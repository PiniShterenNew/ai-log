import { useEffect, useMemo, useState } from 'react';
import { Button, Stack, Icon, DatePicker, PopoverContent, BadgeCount, Section, Popover, PopoverTrigger, Drawer } from '@/design-system';
import type { TimestampFilterProps } from '@/features';
import { useMediaQuery } from '@/shared';

interface FiltersPanelProps extends TimestampFilterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FiltersPanel({
  from,
  to,
  onFromChange,
  onToChange,
  onClear,
  open,
  onOpenChange,
}: FiltersPanelProps) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const hasFilters = !!(from || to);
  const [draftFrom, setDraftFrom] = useState(from);
  const [draftTo, setDraftTo] = useState(to);

  const handleFromChange = (value: string | undefined) => {
    onFromChange(value || '');
  };

  const handleToChange = (value: string | undefined) => {
    onToChange(value || '');
  };

  useEffect(() => {
    if (open) {
      setDraftFrom(from);
      setDraftTo(to);
    }
  }, [open, from, to]);

  const handleApply = () => {
    onFromChange(draftFrom || '');
    onToChange(draftTo || '');
    onOpenChange(false);
  };

  const handleClear = () => {
    onClear();
    onOpenChange(false);
  };

  const activeCount = useMemo(() => [from, to].filter(Boolean).length, [from, to]);

  if (isMobile) {
    return (
      <>
        <Button
          variant="outline"
          state={hasFilters ? 'filtered' : 'default'}
          onClick={() => onOpenChange(true)}
          className="relative"
        >
          <Icon name="MixerHorizontalIcon" variant="sm" />
          Filters
          {hasFilters && (
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-slate-900" />
          )}
        </Button>
        <Drawer
          open={open}
          onOpenChange={onOpenChange}
          title="Filters"
          description="Refine results with date ranges."
          footer={(
            <Stack variant="toolbar" className="justify-between gap-3">
              <Button variant="ghost" onClick={handleClear}>
                Clear
              </Button>
              <Button onClick={handleApply}>
                Apply filters
              </Button>
            </Stack>
          )}
        >
          <Stack variant="list-tight">
            <Section variant="grow-tight">
              <DatePicker
                value={draftFrom}
                label="From"
                onChange={(value) => setDraftFrom(value)}
                placeholder="Select start date"
              />
            </Section>

            <Section variant="grow-tight">
              <DatePicker
                value={draftTo}
                label="To"
                onChange={(value) => setDraftTo(value)}
                placeholder="Select end date"
                fromDate={draftFrom ? new Date(draftFrom) : undefined}
              />
            </Section>
          </Stack>
        </Drawer>
      </>
    );
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          state={hasFilters ? 'filtered' : 'default'}
        >
          <Icon name="MixerHorizontalIcon" variant="sm" />
          Filters
          {hasFilters && (
            <BadgeCount count={activeCount} variant="default" />
          )}
          <Icon
            name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'}
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
