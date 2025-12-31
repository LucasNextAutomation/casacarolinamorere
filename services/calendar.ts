
import { GOOGLE_CALENDAR_CONFIG } from '../constants';
import { parseICSFeed } from './ical';

export interface DayInfo {
  date: Date;
  dateString: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isBlocked: boolean;
  isPast: boolean;
}

export const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const getDaysInMonth = (year: number, month: number): Date[] => {
  const date = new Date(year, month, 1);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const getCalendarGridDays = (year: number, month: number): DayInfo[] => {
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayIndex = firstDayOfMonth.getDay();
  const daysInMonth = getDaysInMonth(year, month);
  const grid: DayInfo[] = [];
  const todayStr = formatDate(new Date());

  for (let i = 0; i < startingDayIndex; i++) {
    const d = new Date(year, month, 1 - (startingDayIndex - i));
    grid.push({
      date: d, dateString: formatDate(d), isCurrentMonth: false,
      isToday: formatDate(d) === todayStr, isBlocked: false, isPast: formatDate(d) < todayStr
    });
  }

  daysInMonth.forEach(d => {
    const dStr = formatDate(d);
    grid.push({
      date: d, dateString: dStr, isCurrentMonth: true,
      isToday: dStr === todayStr, isBlocked: false, isPast: dStr < todayStr
    });
  });

  return grid;
};

export const isDateInRange = (dateStr: string, startStr: string | null, endStr: string | null) => {
  if (!startStr) return false;
  if (!endStr) return dateStr === startStr;
  return dateStr >= startStr && dateStr <= endStr;
};

export const fetchBlockedDates = async (): Promise<{ dates: Set<string>; lastSynced: string }> => {
  const blockedDates = new Set<string>();
  let lastSynced = "Sync failed";

  try {
    // Aggressive cache-busting
    const cacheBuster = `nocache=${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const targetUrl = GOOGLE_CALENDAR_CONFIG.ICAL_URL.includes('?')
      ? `${GOOGLE_CALENDAR_CONFIG.ICAL_URL}&${cacheBuster}`
      : `${GOOGLE_CALENDAR_CONFIG.ICAL_URL}?${cacheBuster}`;

    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}&disableCache=true`;

    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();

    // Ensure data contents exist before processing
    if (data && data.contents) {
      const externalDates = parseICSFeed(data.contents);

      if (externalDates && externalDates.length > 0) {
        externalDates.forEach(d => blockedDates.add(d));
        lastSynced = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        console.log(`Sync Successful. Received ${externalDates.length} blocked dates.`);
      } else {
        // Handle cases where feed is empty or malformed but request succeeded
        console.warn("Feed parsed successfully but returned no blocked dates.");
        lastSynced = "No active blocks found";
      }
    } else {
      throw new Error("Invalid response structure from proxy");
    }

  } catch (error) {
    console.error("Critical Sync Failure:", error);
    lastSynced = "Connection Error";
  }

  return { dates: blockedDates, lastSynced };
};
