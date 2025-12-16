import { DayCell } from './DayCell';
import { getMonthDays, isDateDisabled, isDateInRange, isSameDate, isSameMonthDate, weekDays, isBeforeDate, isAfterDate } from './dateRange.utils';
import type { DateRange } from './dateRange.types';

interface MonthGridProps {
  month: Date;
  value: DateRange;
  hoverDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  onDayClick: (date: Date) => void;
  onDayHover: (date: Date) => void;
}

export const MonthGrid = ({
  month,
  value,
  hoverDate,
  minDate,
  maxDate,
  disabled,
  onDayClick,
  onDayHover,
}: MonthGridProps) => {
  const days = getMonthDays(month);
  const today = new Date();

  const isHoverRange = (date: Date) => {
    if (!value.from || !hoverDate || value.to) return false;
    // Highlight range between from and hoverDate (exclusive of endpoints)
    const start = isBeforeDate(value.from, hoverDate) ? value.from : hoverDate;
    const end = isAfterDate(value.from, hoverDate) ? value.from : hoverDate;
    
    // Check if date is strictly between start and end (not equal to either)
    return isAfterDate(date, start) && isBeforeDate(date, end);
  };

  return (
    <div className="space-y-4" role="grid">
      <div className="flex justify-center pt-1 relative items-center">
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-slate-500 rounded-md w-9 font-normal text-[0.8rem] flex items-center justify-center"
            aria-hidden="true"
          >
            {day}
          </div>
        ))}
        {days.map((date) => {
          const isSelectedStart = value.from ? isSameDate(date, value.from) : false;
          const isSelectedEnd = value.to ? isSameDate(date, value.to) : false;
          const isInRange = isDateInRange(date, value.from, value.to);
          const isDisabled = disabled || isDateDisabled(date, minDate, maxDate);
          const isOutside = !isSameMonthDate(date, month);

          return (
            <DayCell
              key={date.toISOString()}
              date={date}
              dayNumber={date.getDate()}
              isSelectedStart={isSelectedStart}
              isSelectedEnd={isSelectedEnd}
              isInRange={isInRange}
              isHoverRange={isHoverRange(date)}
              isToday={isSameDate(date, today)}
              isDisabled={isDisabled}
              isOutsideMonth={isOutside}
              onClick={onDayClick}
              onMouseEnter={onDayHover}
            />
          );
        })}
      </div>
    </div>
  );
};
