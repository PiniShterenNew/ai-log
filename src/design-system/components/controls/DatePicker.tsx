import { useState, useMemo, useEffect } from 'react';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';
import { cn } from '@/design-system/utils';
import { HiCalendar } from 'react-icons/hi2';
import { Text } from '../typography/Text';

export interface DatePickerProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  fromDate?: Date;
  toDate?: Date;
  label?: string;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Select date',
  fromDate,
  toDate,
  label,
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const currentDate = value ? new Date(value) : new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  // Generate years list
  const years = useMemo(() => {
    const startYear = fromDate ? fromDate.getFullYear() : 1900;
    const endYear = toDate ? toDate.getFullYear() : 2100;
    const yearsList = [];
    for (let y = startYear; y <= endYear; y++) {
      yearsList.push(y);
    }
    return yearsList;
  }, [fromDate, toDate]);

  // Generate months list
  const months = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      value: i,
      label: format(new Date(2000, i, 1), 'MMMM'),
    }));
  }, []);

  // Update calendar when month/year changes
  const calendarDate = useMemo(() => {
    return new Date(year, month, 1);
  }, [year, month]);

  // Update month/year when value changes externally
  useEffect(() => {
    if (value) {
      const date = new Date(value);
      const newMonth = date.getMonth();
      const newYear = date.getFullYear();
      if (month !== newMonth || year !== newYear) {
        setMonth(newMonth);
        setYear(newYear);
      }
      if (!selectedDate || selectedDate.getTime() !== date.getTime()) {
        setSelectedDate(date);
      }
    } else {
      if (selectedDate !== undefined) {
        setSelectedDate(undefined);
      }
    }
    // We intentionally only depend on value to sync external changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setOpen(false);
    if (date) {
      setMonth(date.getMonth());
      setYear(date.getFullYear());
      // Return only date part (set time to midnight UTC)
      const dateOnly = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      onChange?.(dateOnly.toISOString());
    } else {
      onChange?.(undefined);
    }
  };

  const handleMonthChange = (monthValue: string) => {
    const newMonth = parseInt(monthValue, 10);
    setMonth(newMonth);
    setSelectedDate(undefined);
  };

  const handleYearChange = (yearValue: string) => {
    const newYear = parseInt(yearValue, 10);
    setYear(newYear);
    setSelectedDate(undefined);
  };

  const displayValue = value
    ? new Intl.DateTimeFormat("en-US", {
        dateStyle: 'medium', // e.g., "Jan 1, 2025"
      }).format(new Date(value))
    : '';

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <Text variant="label" className="text-md font-medium">{label}</Text>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal rounded-lg min-w-[200px] whitespace-normal h-8',
              !value && 'text-slate-500'
            )}
          >
            <HiCalendar className="h-5 w-5 shrink-0" />
            <span className="truncate">{displayValue || placeholder}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 min-w-[320px]" align="start">
          <div className="p-3 space-y-3">
            {/* Month and Year Selectors */}
            <div className="flex gap-2">
              <Select value={month.toString()} onValueChange={handleMonthChange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((m) => (
                    <SelectItem key={m.value} value={m.value.toString()}>
                      {m.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={year.toString()} onValueChange={handleYearChange}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="max-h-[200px]">
                  {years.map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Calendar */}
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              month={calendarDate}
              onMonthChange={(date) => {
                setMonth(date.getMonth());
                setYear(date.getFullYear());
              }}
              disabled={(date) => {
                if (fromDate && date < fromDate) return true;
                if (toDate && date > toDate) return true;
                return false;
              }}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

