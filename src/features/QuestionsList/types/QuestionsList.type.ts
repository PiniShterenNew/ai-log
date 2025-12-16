import type { QuestionsListItem } from './useQuestionsList.type';

export interface QuestionsListProps {
  items: QuestionsListItem[];
  onClick: (id: string) => void;
  hasActiveFilters?: boolean;
}
