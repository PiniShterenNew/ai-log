import type { SortOrder } from "@/features";
import type { Question } from "@/shared";


export function sortQuestionsByTimestamp (
    questions: Question[],
    order: SortOrder
): Question[] {
    return [...questions].sort((a, b) => {
        const t1 = Date.parse(a.askedAtUtc);
        const t2 = Date.parse(b.askedAtUtc);
        return order === 'newest' ? t2 - t1 : t1 - t2;
    });
}