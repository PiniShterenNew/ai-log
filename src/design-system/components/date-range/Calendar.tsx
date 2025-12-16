import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MonthGrid } from './MonthGrid';
import { formatMonthName, getNextMonth, getPrevMonth, isBeforeDate } from './dateRange.utils';
import type { DateRange } from './dateRange.types';
import { Button } from '@/design-system/components/ui/button';

interface CalendarProps {
  value: DateRange;
  onChange: (value: DateRange) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}

export const Calendar = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabled
}: CalendarProps) => {
  // Initialize viewDate to 'from' date or current month
  const [viewDate, setViewDate] = React.useState<Date>(() => {
    return value.from || new Date();
  });
  
  const [hoverDate, setHoverDate] = React.useState<Date | null>(null);

  const handlePrevMonth = () => setViewDate(prev => getPrevMonth(prev));
  const handleNextMonth = () => setViewDate(prev => getNextMonth(prev));

  const handleDayClick = (date: Date) => {
    if (disabled) return;

    if (!value.from) {
      // First click: set from
      onChange({ from: date, to: null });
    } else if (!value.to) {
      // Second click
      if (isBeforeDate(date, value.from)) {
        // Auto swap
        onChange({ from: date, to: value.from });
      } else {
        onChange({ from: value.from, to: date });
      }
    } else {
      // Reset selection
      onChange({ from: date, to: null });
    }
  };

  const handleDayHover = (date: Date) => {
    if (value.from && !value.to && !disabled) {
      setHoverDate(date);
    } else {
      setHoverDate(null);
    }
  };

  const nextMonthDate = getNextMonth(viewDate);

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 p-3">
      {/* First Month */}
      <div className="space-y-4">
        <div className="relative flex items-center justify-center pt-1">
          <Button
            variant="outline"
            className="absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            onClick={handlePrevMonth}
            disabled={disabled}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium">
            {formatMonthName(viewDate)}
          </div>
          {/* Next button for mobile only */}
          <Button
            variant="outline"
            className="absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 md:hidden"
            onClick={handleNextMonth}
            disabled={disabled}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <MonthGrid
          month={viewDate}
          value={value}
          hoverDate={hoverDate}
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
          onDayClick={handleDayClick}
          onDayHover={handleDayHover}
        />
      </div>

      {/* Second Month - Desktop Only */}
      <div className="space-y-4 hidden md:block border-l border-slate-100 pl-4">
        <div className="relative flex items-center justify-center pt-1">
          <div className="text-sm font-medium">
            {formatMonthName(nextMonthDate)}
          </div>
          <Button
            variant="outline"
            className="absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            onClick={handleNextMonth}
            disabled={disabled}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <MonthGrid
          month={nextMonthDate}
          value={value}
          hoverDate={hoverDate}
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
          onDayClick={handleDayClick}
          onDayHover={handleDayHover}
        />
      </div>
    </div>
  );
};
