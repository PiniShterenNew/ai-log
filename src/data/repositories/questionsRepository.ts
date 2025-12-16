import type { Question } from '@/shared/types/Question.type';
import { questionsMock } from '../mock/questions.mock';

export interface QuestionsRepository {
  getAll(): Question[];
  getById(id: string): Question | null;
}

export const questionsRepository: QuestionsRepository = {
  getAll() {
    return [...questionsMock];
  },
  getById(id) {
    return questionsMock.find(q => q.id === id) ?? null;
  }
};
