
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Hardcoded URLs to ensure server-side reliability independently of frontend build
const ICAL_URLS = [
    'https://www.airbnb.fr/calendar/ical/1574720018210550640.ics?t=fdcf0013cbe248c5a65c415545b3d98d', // Airbnb
    'https://calendar.google.com/calendar/ical/carophe%40hotmail.com/private-9e8107756e56cb4dde9de08e68912c5e/basic.ics' // Google Private
];

export default async function handler(request: VercelRequest, response: VercelResponse) {
    try {
        const blockedDates = new Set<string>();

        console.log("Fetching calendars...");

        const fetchPromises = ICAL_URLS.map(async (url) => {
            try {
                // Add cache busting to force fresh data from Google/Airbnb
                const cacheBuster = `nocache=${Date.now()}_${Math.random().toString(36).substring(7)}`;
                const targetUrl = url.includes('?') ? `${url}&${cacheBuster}` : `${url}?${cacheBuster}`;

                const res = await fetch(targetUrl);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const text = await res.text();
                return text;
            } catch (e) {
                console.error(`Failed to fetch ${url}:`, e);
                return null;
            }
        });

        const results = await Promise.all(fetchPromises);

        results.forEach((icsData) => {
            if (!icsData) return;

            const dates = parseICSFeed(icsData);
            dates.forEach(d => blockedDates.add(d));
        });

        // Return the aggregated blocked dates
        response.status(200).json({
            dates: Array.from(blockedDates).sort(),
            lastSynced: new Date().toISOString()
        });

    } catch (error) {
        console.error('Calendar Sync Error:', error);
        response.status(500).json({ error: 'Failed to sync calendars' });
    }
}

// Robust Parser (Same logic as debugging script)
const parseICSFeed = (icsData: string): string[] => {
    const dates = new Set<string>();

    // Unfold lines
    const unfolded = icsData.replace(/\r?\n[ \t]/g, '');
    const vevents = unfolded.split(/BEGIN:VEVENT/i);

    vevents.slice(1).forEach(eventBlock => {
        const cleanBlock = eventBlock.split(/END:VEVENT/i)[0];
        const lines = cleanBlock.split(/\r?\n/);

        // Summary Parsing
        let summary = '';
        lines.forEach(line => {
            if (line.toUpperCase().startsWith('SUMMARY')) summary = line.substring(line.indexOf(':') + 1);
        });

        // Transparency Check with Override for 'BOOKED'
        const isTransparent = lines.some(line => line.toUpperCase().startsWith('TRANSP:TRANSPARENT'));
        const isExplicitlyBooked = summary.toLowerCase().includes('booked') || summary.toLowerCase().includes('reserved');

        if (isTransparent && !isExplicitlyBooked) return;

        // Date Extraction
        let dtStartStr = '';
        let dtEndStr = '';

        const extractDateStr = (line: string) => {
            const match = line.match(/:(?:(\d{8})T?(\d{6})?Z?)/);
            if (match) return match[1];
            const fallback = line.match(/(\d{8})/);
            return fallback ? fallback[1] : null;
        };

        lines.forEach(line => {
            const upperLine = line.toUpperCase();
            if (upperLine.startsWith('DTSTART')) dtStartStr = extractDateStr(line) || '';
            if (upperLine.startsWith('DTEND')) dtEndStr = extractDateStr(line) || '';
        });

        if (dtStartStr) {
            const sY = parseInt(dtStartStr.substring(0, 4));
            const sM = parseInt(dtStartStr.substring(4, 6)) - 1;
            const sD = parseInt(dtStartStr.substring(6, 8));

            if (!dtEndStr) dtEndStr = dtStartStr;

            const eY = parseInt(dtEndStr.substring(0, 4));
            const eM = parseInt(dtEndStr.substring(4, 6)) - 1;
            const eD = parseInt(dtEndStr.substring(6, 8));

            const start = new Date(sY, sM, sD, 0, 0, 0);
            const end = new Date(eY, eM, eD, 0, 0, 0);

            // Fix: Ensure end > start
            if (end <= start) end.setDate(end.getDate() + 1);

            let current = new Date(start);
            while (current < end) {
                const y = current.getFullYear();
                const m = String(current.getMonth() + 1).padStart(2, '0');
                const d = String(current.getDate()).padStart(2, '0');
                dates.add(`${y}-${m}-${d}`);
                current.setDate(current.getDate() + 1);
            }
        }
    });

    return Array.from(dates);
};
