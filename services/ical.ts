
/**
 * Generates an iCalendar (.ics) string for export to other platforms
 */
export const generateICSFeed = (bookings: any[]) => {
  const header = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Casa Carolina Moreré//Channel Manager//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ];

  const events = bookings.map((b, i) => {
    const start = b.startDate.replace(/-/g, '');
    const end = b.endDate.replace(/-/g, '');
    return [
      'BEGIN:VEVENT',
      `UID:booking-${i}@casacarolinamorere.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '').split('T')[0]}T000000Z`,
      `DTSTART;VALUE=DATE:${start}`,
      `DTEND;VALUE=DATE:${end}`,
      `SUMMARY:Website Booking - ${b.name}`,
      'END:VEVENT'
    ].join('\r\n');
  });

  return [...header, ...events, 'END:VCALENDAR'].join('\r\n');
};

/**
 * Robust iCal parser designed to handle line folding, various date formats (UTC/Local),
 * and standard iCal properties from Airbnb/Google feeds.
 */
export const parseICSFeed = (icsData: string): string[] => {
  const blockedDates = new Set<string>();
  
  // 1. Unfold lines (Standard iCal lines split by CRLF + Space/Tab)
  const unfolded = icsData.replace(/\r?\n[ \t]/g, '');
  
  // 2. Split into events
  const vevents = unfolded.split(/BEGIN:VEVENT/i);
  
  vevents.slice(1).forEach(eventBlock => {
    const cleanBlock = eventBlock.split(/END:VEVENT/i)[0];
    const lines = cleanBlock.split(/\r?\n/);
    
    // Standard block check: Ignore "Free" events or cancelled ones
    const isTransparent = lines.some(line => line.toUpperCase().startsWith('TRANSP:TRANSPARENT'));
    if (isTransparent) return;

    let dtStartStr = '';
    let dtEndStr = '';

    // Extracts the date part (YYYYMMDD) from iCal date properties
    const extractDateStr = (line: string) => {
      // Handles DTSTART:20250101, DTSTART;VALUE=DATE:20250101, DTSTART:20250101T120000Z
      const match = line.match(/:(?:(\d{8})T?(\d{6})?Z?)/);
      if (match) return match[1];
      // Try again without colon if it's strictly the value
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

      // If no end date, treat as 1-day event (standard iCal safety)
      if (!dtEndStr) dtEndStr = dtStartStr;
      
      const eY = parseInt(dtEndStr.substring(0, 4));
      const eM = parseInt(dtEndStr.substring(4, 6)) - 1;
      const eD = parseInt(dtEndStr.substring(6, 8));

      // Create pure dates without time shifts to avoid timezone leakage
      const start = new Date(sY, sM, sD, 0, 0, 0);
      const end = new Date(eY, eM, eD, 0, 0, 0);

      // Loop through range: DTEND is non-inclusive in the iCal spec
      // We block from start date up until (but not including) the end date
      let current = new Date(start);
      
      // Safety check: if end <= start for some reason (broken feed), block at least start day
      if (end <= start) {
        const y = current.getFullYear();
        const m = String(current.getMonth() + 1).padStart(2, '0');
        const d = String(current.getDate()).padStart(2, '0');
        blockedDates.add(`${y}-${m}-${d}`);
      } else {
        while (current < end) {
          const y = current.getFullYear();
          const m = String(current.getMonth() + 1).padStart(2, '0');
          const d = String(current.getDate()).padStart(2, '0');
          blockedDates.add(`${y}-${m}-${d}`);
          current.setDate(current.getDate() + 1);
        }
      }
    }
  });

  return Array.from(blockedDates);
};
