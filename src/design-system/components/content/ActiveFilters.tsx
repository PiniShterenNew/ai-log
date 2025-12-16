import { Stack } from '../layout/Stack';
import { Badge } from './Badge';
import { Icon } from './Icon';
import { Text } from '../typography/Text';
import { cn } from '@/design-system/utils';

export interface ActiveFilter {
  label: string;
  value: string;
  onRemove: () => void;
}

export interface ActiveFiltersProps {
  filters: ActiveFilter[];
  onClearAll?: () => void;
  className?: string;
}

const formatFilterValue = (label: string, value: string): string => {
  if (label === 'From' || label === 'To') {
    try {
      const date = new Date(value);
      // Format only date without time
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: 'medium', // e.g., "Jan 1, 2025"
      }).format(date);
    } catch {
      return value;
    }
  }
  return value;
};

export function ActiveFilters({
  filters,
  onClearAll,
  className,
}: ActiveFiltersProps) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <Stack variant="toolbar" className={cn('flex-wrap', className)}>
      {filters.map((filter, index) => (
        <Badge 
          key={index} 
          variant="secondary" 
          className="gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-100 border-0"
        >
          <Text variant="caption">
            {filter.label}: {formatFilterValue(filter.label, filter.value)}
          </Text>
          <button
            onClick={filter.onRemove}
            className="h-4 w-4 p-0 rounded-full hover:bg-slate-200 flex items-center justify-center transition-colors ml-0.5"
            aria-label={`Remove ${filter.label} filter`}
          >
            <Icon name="Cross2Icon" variant="xs" />
          </button>
        </Badge>
      ))}
      {onClearAll && (
        <button
          onClick={onClearAll}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors cursor-pointer"
        >
          Clear all
        </button>
      )}
    </Stack>
  );
}

