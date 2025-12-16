import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { MockedFunction } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useQuestionDetails } from './useQuestionDetails';
import { useParams } from 'react-router-dom';
import { questionsMock } from '@/data/mock/questions.mock';
import { usersMock } from '@/data/mock/users.mock';
import { questionsRepository } from '@/data/repositories/questionsRepository';
import { usersRepository } from '@/data/repositories/usersRepository';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock('@/data/repositories/questionsRepository', () => ({
  questionsRepository: {
    getById: vi.fn(),
  },
}));

vi.mock('@/data/repositories/usersRepository', () => ({
  usersRepository: {
    getById: vi.fn(),
  },
}));

const mockUseParams = useParams as MockedFunction<typeof useParams>;
const mockGetQuestionById =
  questionsRepository.getById as MockedFunction<
    typeof questionsRepository.getById
  >;

const mockGetUserById =
  usersRepository.getById as MockedFunction<
    typeof usersRepository.getById
  >;

describe('useQuestionDetails', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns default state when no id is provided', () => {
    mockUseParams.mockReturnValue({});

    const { result } = renderHook(() => useQuestionDetails());

    expect(result.current.question).toBeNull();
    expect(result.current.user).toBeNull();
    expect(result.current.notFound).toBe(false);
  });

  it('returns notFound when question does not exist', () => {
    mockUseParams.mockReturnValue({ id: 'q1' });
    mockGetQuestionById.mockReturnValue(null);

    const { result } = renderHook(() => useQuestionDetails());

    expect(result.current.question).toBeNull();
    expect(result.current.user).toBeNull();
    expect(result.current.notFound).toBe(true);
  });

  it('returns question and user when both exist', () => {
    mockUseParams.mockReturnValue({ id: 'q1' });
    mockGetQuestionById.mockReturnValue(questionsMock[0]);
    mockGetUserById.mockReturnValue(usersMock[0]);

    const { result } = renderHook(() => useQuestionDetails());

    expect(result.current.question).toEqual(questionsMock[0]);
    expect(result.current.user).toEqual(usersMock[0]);
    expect(result.current.notFound).toBe(false);
  });
});
