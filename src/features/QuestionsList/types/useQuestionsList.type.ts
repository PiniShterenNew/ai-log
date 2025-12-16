import type { ActiveFilter } from '@/design-system';

export type SortOrder = 'newest' | 'oldest';

export interface QuestionsListItem {
    id: string;
    questionPreview: string;
    userDisplayName: string;
    askedAtUtc: string;
    durationMs: number;
  }

export interface UseQuestionsListReturn {
    items: QuestionsListItem[];
    sort: SortOrder;
    search: string;
    from?: string;
    to?: string;
    setSort: (sort: SortOrder) => void;
    setSearch: (search: string) => void;
    activeFilters: ActiveFilter[];
    setFrom: (from: string) => void;
    setTo: (to: string) => void;
    clearFilters: () => void;
}