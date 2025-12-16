import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/design-system/utils';
import { Button } from '@/design-system/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/design-system/components/ui/popover';
import { Calendar } from './Calendar';
import type { DateRange, DateRangePickerProps } from './dateRange.types';

export const DateRangePicker = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabled
}: DateRangePickerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const displayValue = React.useMemo(() => {
    if (value.from && value.to) {
      return `${format(value.from, 'MMM dd, yyyy')} - ${format(value.to, 'MMM dd, yyyy')}`;
    }
    if (value.from) {
      return `${format(value.from, 'MMM dd, yyyy')} - ...`;
    }
    return 'Pick a date range';
  }, [value]);

  const handleCalendarChange = (newValue: DateRange) => {
    onChange(newValue);
    if (newValue.from && newValue.to) {
      // Keep open or close? "If second date < first date → auto swap" ... "Clicking a selected range resets selection"
      // User didn't strictly say when to close. Shadcn usually closes on second selection.
      // But standard UX for range picker often keeps open to let user see selection, but usually closes.
      // I'll close it for better UX.
      setIsOpen(false);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value.from && "text-slate-500",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {displayValue}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center" side="bottom">
        <Calendar
          value={value}
          onChange={handleCalendarChange}
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
};
