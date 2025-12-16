import { describe, it, expect, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { useQuestionsList } from './useQuestionsList';

vi.mock('@/data/repositories/questionsRepository', () => ({
    questionsRepository: {
        getAll: () => [
            {
                id: 'q1',
                userId: 'u1',
                askedAtUtc: '2025-01-01T00:00:00Z',
                questionText: 'Test question',
                aiResponse: {
                    durationMs: 123,
                },
            },
        ],
    },
}));

vi.mock('@/data/repositories/usersRepository', () => ({
    usersRepository: {
        getById: () => ({
            id: 'u1',
            displayName: 'Alice',
        }),
    },
}));

describe('useQuestionsList', () => {
    it('returns default state when no search params are provided', () => {
        const { result } = renderHook(
            () => useQuestionsList(),
            {
                wrapper: ({ children }) => (
                    <MemoryRouter initialEntries={['/']}>
                        {children}
                    </MemoryRouter>
                ),
            }
        );

        expect(Array.isArray(result.current.items)).toBe(true);
        expect(result.current.items.length).toBeGreaterThan(0);

        expect(result.current.sort).toBe('newest');
        expect(result.current.search).toBe('');
        expect(result.current.from).toBeUndefined();
        expect(result.current.to).toBeUndefined();
    });
    it('reads sort from URL and updates it via setSort', () => {
        const { result } = renderHook(
            () => useQuestionsList(),
            {
                wrapper: ({ children }) => (
                    <MemoryRouter initialEntries={['/?sort=oldest']}>
                        {children}
                    </MemoryRouter>
                ),
            }
        );

        expect(result.current.sort).toBe('oldest');
        act(() => {
            result.current.setSort('newest');
        });
        expect(result.current.sort).toBe('newest');
    });
    // reads search from URL and updates it via setSearch
    it('reads search from URL and updates it via setSearch', () => {
        const { result } = renderHook(
            () => useQuestionsList(),
            {
                wrapper: ({ children }) => (
                    <MemoryRouter initialEntries={['/?search=test']}>
                        {children}
                    </MemoryRouter>
                ),
            }
        );
        expect(result.current.search).toBe('test');
        act(() => {
            result.current.setSearch('test2');
        });
        expect(result.current.search).toBe('test2');

    });

    it('filters items by search (case-insensitive) on question text or user name', () => {
        const { result } = renderHook(
            () => useQuestionsList(),
            {
                wrapper: ({ children }) => (
                    <MemoryRouter initialEntries={['/?search=ali']}>
                        {children}
                    </MemoryRouter>
                ),
            }
        );

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0].userDisplayName).toBe('Alice');
    });

    it('clearFilters resets all params to default', () => {
        const { result } = renderHook(
            () => useQuestionsList(),
            {
                wrapper: ({ children }) => (
                    <MemoryRouter initialEntries={['/?search=ali&sort=oldest']}>
                        {children}
                    </MemoryRouter>
                ),
            }
        );

        expect(result.current.search).toBe('ali');
        expect(result.current.sort).toBe('oldest');

        act(() => {
            result.current.clearFilters();
        });

        expect(result.current.search).toBe('');
        expect(result.current.sort).toBe('newest');
        expect(result.current.from).toBeUndefined();
        expect(result.current.to).toBeUndefined();
    });
});

