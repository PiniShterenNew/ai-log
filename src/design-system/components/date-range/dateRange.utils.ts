import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  addMonths, 
  subMonths,
  format,
  isSameMonth,
  isSameDay,
  isBefore,
  isAfter
} from 'date-fns';

export const getMonthDays = (month: Date) => {
  const start = startOfWeek(startOfMonth(month));
  const end = endOfWeek(endOfMonth(month));
  return eachDayOfInterval({ start, end });
};

export const getNextMonth = (date: Date) => addMonths(date, 1);
export const getPrevMonth = (date: Date) => subMonths(date, 1);

export const formatMonthName = (date: Date) => format(date, 'MMMM yyyy');

export const isDateDisabled = (date: Date, minDate?: Date, maxDate?: Date) => {
  if (minDate && isBefore(date, minDate) && !isSameDay(date, minDate)) return true;
  if (maxDate && isAfter(date, maxDate) && !isSameDay(date, maxDate)) return true;
  return false;
};

export const isDateInRange = (date: Date, from: Date | null, to: Date | null) => {
  if (!from || !to) return false;
  // Check if date is between from and to (inclusive)
  const start = isBefore(from, to) ? from : to;
  const end = isAfter(to, from) ? to : from;
  // isWithinInterval is inclusive, but we want to exclude the endpoints (they have selected styling)
  return isAfter(date, start) && isBefore(date, end);
};

export const isDateSelected = (date: Date, from: Date | null, to: Date | null) => {
  return (from && isSameDay(date, from)) || (to && isSameDay(date, to));
};

export const isSameDate = isSameDay;
export const isSameMonthDate = isSameMonth;
export const isBeforeDate = isBefore;
export const isAfterDate = isAfter;

export const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
