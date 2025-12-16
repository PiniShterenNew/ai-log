import { cn } from '@/design-system/utils';

interface DayCellProps {
  date: Date;
  dayNumber: number;
  isSelectedStart?: boolean;
  isSelectedEnd?: boolean;
  isInRange?: boolean;
  isHoverRange?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isOutsideMonth?: boolean;
  onClick: (date: Date) => void;
  onMouseEnter: (date: Date) => void;
}

export const DayCell = ({
  date,
  dayNumber,
  isSelectedStart,
  isSelectedEnd,
  isInRange,
  isHoverRange,
  isToday,
  isDisabled,
  isOutsideMonth,
  onClick,
  onMouseEnter,
}: DayCellProps) => {
  return (
    <div
      className={cn(
        'p-0 relative focus-within:relative focus-within:z-20',
        (isInRange || isHoverRange) && !isOutsideMonth && !isDisabled && 'bg-slate-50 first:rounded-l-md last:rounded-r-md'
      )}
      role="gridcell"
      aria-selected={isSelectedStart || isSelectedEnd}
      aria-disabled={isDisabled}
      aria-current={isToday ? 'date' : undefined}
    >
      <button
        type="button"
        onClick={() => !isDisabled && onClick(date)}
        onMouseEnter={() => !isDisabled && onMouseEnter(date)}
        disabled={isDisabled}
        className={cn(
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2',
          isOutsideMonth && 'text-slate-400 opacity-50',
          // Wait, "Clear visual separation between months" -> This implies multi-month view separation.
          // For day cells:
          !isSelectedStart && !isSelectedEnd && !isDisabled && !isOutsideMonth && 'hover:bg-slate-100',
          (isSelectedStart || isSelectedEnd) && 'bg-slate-900 text-white hover:bg-slate-900 hover:text-white focus:bg-slate-900 focus:text-white',
          isToday && !isSelectedStart && !isSelectedEnd && 'ring-1 ring-slate-400',
          isDisabled && 'opacity-40 cursor-not-allowed',
          // Range middle styling handled by parent div usually, but here we can do it on button if we want, OR parent div handles background.
          // Shadcn puts background on the wrapper div for range.
          // The button itself needs to be transparent if in range but not selected.
          (isInRange || isHoverRange) && !isSelectedStart && !isSelectedEnd && !isOutsideMonth && 'bg-slate-50 text-slate-900',
          // Fix for selected start/end having range background behind them (handled by parent div bg-slate-50 but button has bg-slate-900)
        )}
      >
        <time dateTime={date.toISOString().split('T')[0]}>{dayNumber}</time>
      </button>
    </div>
  );
};
