import type { SortOrder } from "./useQuestionsList.type";

export interface SortControlProps {
    value: SortOrder;
    onChange: (value: SortOrder) => void;
  }
  