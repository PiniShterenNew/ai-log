import type { User } from "@/shared";
import type { Question } from "@/shared";

export interface UseQuestionDetailsReturn {
    question: Question | null;
    user: User | null;
    notFound: boolean;
}