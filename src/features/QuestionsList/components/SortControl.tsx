import { useState } from 'react';
import { Button, Stack, Icon, PopoverContent, Text, Popover, PopoverTrigger } from '@/design-system';
import type { SortControlProps, SortOrder } from '@/features';

const sortOptions: { label: string; value: SortOrder }[] = [
  { label: 'Newest first', value: 'newest' },
  { label: 'Oldest first', value: 'oldest' },
];

export function SortControl({ value, onChange }: SortControlProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = sortOptions.find(opt => opt.value === value)?.label || 'Sort by';

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Icon name="CaretSortIcon" variant="sm" />
          <Text variant="body-sm">{selectedLabel}</Text>
          <Icon
            name={isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            variant="muted-sm"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="sm" align="end">
        <Stack variant="list-dense">
          {sortOptions.map((option) => (
            <Button
              key={option.value}
              variant={value === option.value ? 'default' : 'ghost'}
              layout="full-start"
              state={value === option.value ? 'active' : 'default'}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
              {value === option.value && (
                <Icon name="CheckIcon" variant="check" />
              )}
            </Button>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
}
