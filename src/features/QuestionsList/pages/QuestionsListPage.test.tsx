import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuestionsListPage } from './QuestionsListPage';
import type { QuestionsListItem } from '../types/useQuestionsList.type';

vi.mock('../hooks/useQuestionsList', () => ({
    useQuestionsList: () => ({
        items: [
            {
                id: 'q1',
                questionPreview: 'How does React work?',
                userDisplayName: 'Alice',
                askedAtUtc: '2025-01-01T00:00:00Z',
                durationMs: 120,
            },
            {
                id: 'q2',
                questionPreview: 'What is a hook?',
                userDisplayName: 'Bob',
                askedAtUtc: '2025-01-02T00:00:00Z',
                durationMs: 90,
            },
        ],
        sort: 'newest',
        search: '',
        from: undefined,
        to: undefined,
        activeFilters: [],
        setSort: vi.fn(),
        setSearch: vi.fn(),
        setFrom: vi.fn(),
        setTo: vi.fn(),
        clearFilters: vi.fn(),
    }),
}));

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(),
        useSearchParams: vi.fn().mockReturnValue([new URLSearchParams(), vi.fn()]),
    };
});

vi.mock('../components/QuestionsList', () => ({
    QuestionsList: ({ items }: { items: QuestionsListItem[] }) => (
      <div data-testid="questions-list">
        {items.map(item => (
          <div key={item.id}>
            <span>{item.questionPreview}</span>
            <span>{item.userDisplayName}</span>
          </div>
        ))}
      </div>
    ),
  }));

describe('QuestionsListPage', () => {
    it('renders list of questions', () => {
        render(<QuestionsListPage />);

        expect(screen.getByText('How does React work?')).toBeTruthy();
        expect(screen.getByText('Alice')).toBeTruthy();

        expect(screen.getByText('What is a hook?')).toBeTruthy();
        expect(screen.getByText('Bob')).toBeTruthy();
    });
});
