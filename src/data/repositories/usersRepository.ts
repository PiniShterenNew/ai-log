import type { User } from '@/shared/types/User.type';
import { usersMock } from '../mock/users.mock';

export interface UsersRepository {
  getById(id: string): User | null;
}

export const usersRepository: UsersRepository = {
  getById(id) {
    return usersMock.find(u => u.id === id) ?? null;
  }
};
