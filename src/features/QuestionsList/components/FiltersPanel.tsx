import { Button, Stack, Icon, DatePicker, PopoverContent, BadgeCount, Section, Popover, PopoverTrigger } from '@/design-system';
import type { TimestampFilterProps } from '@/features';

interface FiltersPanelProps extends TimestampFilterProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function FiltersPanel({
  from,
  to,
  onFromChange,
  onToChange,
  onClear,
  isOpen,
  onToggle,
}: FiltersPanelProps) {
  const hasFilters = !!(from || to);

  const handleFromChange = (value: string | undefined) => {
    onFromChange(value || '');
  };

  const handleToChange = (value: string | undefined) => {
    onToChange(value || '');
  };

  return (
    <Popover open={isOpen} onOpenChange={onToggle}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          state={hasFilters ? 'filtered' : 'default'}
        >
          <Icon name="MixerHorizontalIcon" variant="sm" />
          Filters
          {hasFilters && (
            <BadgeCount count={[from, to].filter(Boolean).length} variant="default" />
          )}
          <Icon
            name={isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            variant="muted-sm"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent variant="responsive" align="start">
       <Stack variant="list">
       <Stack variant="list-tight">
          <Section variant="grow-tight">
            <DatePicker
              value={from}
              label="From"
              onChange={handleFromChange}
              placeholder="Select start date"
            />
          </Section>

          <Section variant="grow-tight">
            <DatePicker
              value={to}
              label="To"
              onChange={handleToChange}
              placeholder="Select end date"
              fromDate={from ? new Date(from) : undefined}
            />
          </Section>
        </Stack>

        {hasFilters && (
          <Stack variant="centered">
            <Button
              variant="default"
              onClick={onClear}
              size="sm"
            >
              <Stack variant="toolbar">
                <Icon name="Cross2Icon" variant="white"  />
                Clear filters
              </Stack>
            </Button>
          </Stack>
        )}
        </Stack>
      </PopoverContent>
    </Popover>
  );
}
