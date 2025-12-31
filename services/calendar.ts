
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
    // Call our own Vercel API function
    const response = await fetch('/api/calendar');

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();

    if (data.dates && Array.isArray(data.dates)) {
      data.dates.forEach((d: string) => blockedDates.add(d));

      // Use the server timestamp if available, else local
      const dateObj = data.lastSynced ? new Date(data.lastSynced) : new Date();
      lastSynced = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      console.log(`Sync Successful. Total blocked dates: ${blockedDates.size}`);
    }

  } catch (error) {
    console.error("Critical Sync Failure:", error);
    lastSynced = "Connection Error";
  }

  return { dates: blockedDates, lastSynced };
};
