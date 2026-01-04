import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { QuestionsList } from '../components/QuestionsList';
import { SortControl } from '../components/SortControl';
import { FiltersPanel } from '../components/FiltersPanel';
import { useQuestionsList } from '../hooks/useQuestionsList';
import { PageShell, Stack, SearchInput, ActiveFilters, Card, Heading, Text } from '@/design-system';
import { useDebouncedCallback } from '@/shared';

export function QuestionsListPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const {
    items,
    sort,
    search,
    from,
    to,
    activeFilters,
    setSort,
    setSearch,
    setFrom,
    setTo,
    clearFilters,
  } = useQuestionsList();

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  const debouncedSetSearch = useDebouncedCallback(
    (value: unknown) => setSearch(value as string),
    300
  );

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    debouncedSetSearch(value);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsFiltersOpen(false);
  };

  return (
    <PageShell variant="wide-padded" className="h-full flex flex-col overflow-hidden">
      <Stack variant="section" className="flex-1 flex flex-col overflow-hidden min-h-0">
        <Stack variant="list" className="shrink-0">
          <Stack variant="list-tight">
            <Text variant="label-uppercase">AI Question Log</Text>
            <Heading level={2} variant="section" className="text-2xl font-semibold tracking-tight text-slate-900">
              Curated query history
            </Heading>
            <Text variant="body-sm" className="text-slate-600">
              Review questions, filter insights, and keep every AI response organized in one premium workspace.
            </Text>
          </Stack>

          <Card variant="content" className="border border-white/60 bg-white/80 shadow-sm">
            <Stack variant="list-tight">
              <SearchInput
                placeholder="Search questions or users..."
                value={searchInput}
                onChange={(e) => handleSearchChange(e.target.value)}
                onClear={() => {
                  setSearchInput('');
                  setSearch('');
                }}
              />

              <Stack variant="header-center">
                <FiltersPanel
                  from={from}
                  to={to}
                  onFromChange={setFrom}
                  onToChange={setTo}
                  onClear={handleClearFilters}
                  isOpen={isFiltersOpen}
                  onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
                />

                <SortControl value={sort} onChange={setSort} />
              </Stack>

              {activeFilters.length > 0 && (
                <ActiveFilters
                  filters={activeFilters}
                  onClearAll={clearFilters}
                />
              )}
            </Stack>
          </Card>
        </Stack>

        <Stack className="flex-1 min-h-0 overflow-hidden">
          <QuestionsList
            items={items}
            onClick={(id) => {
              const search = searchParams.toString();
              navigate(`/questions/${id}${search ? `?${search}` : ''}`);
            }}
            hasActiveFilters={activeFilters.length > 0}
          />
        </Stack>
      </Stack>
    </PageShell>
  );
}
