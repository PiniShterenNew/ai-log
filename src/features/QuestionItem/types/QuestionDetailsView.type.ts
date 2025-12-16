import type { Question } from '@/shared/types/Question.type';
import type { User } from '@/shared/types/User.type';

export interface QuestionDetailsViewProps {
  question: Question;
  user: User;
}