import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { questionsRepository } from "@/data/repositories/questionsRepository";
import { usersRepository } from "@/data/repositories/usersRepository";

import { filterQuestionsByTimestamp } from "@/domain/questions/filterQuestionsByTimestamp";
import { sortQuestionsByTimestamp } from "@/domain/questions/sortQuestionsByTimestamp";

import type { QuestionsListItem, SortOrder, UseQuestionsListReturn } from "@/features";
import { formatLocalToUtc } from "@/shared";
import type { ActiveFilter } from "@/design-system";

const DEFAULT_SORT: SortOrder = 'newest';

export function useQuestionsList(): UseQuestionsListReturn {
    const [searchParams, setSearchParams] = useSearchParams();

    const sort = (searchParams.get('sort') as SortOrder) || DEFAULT_SORT;
    const search = searchParams.get('search') ?? '';
    const from = searchParams.get('from') ?? undefined;
    const to = searchParams.get('to') ?? undefined;

    const fromUtc = from ? formatLocalToUtc(from) : '';
    const toUtc = to ? formatLocalToUtc(to) : '';

    const items = useMemo<QuestionsListItem[]>(() => {
        const allQuestions = questionsRepository.getAll();

        const filtered = filterQuestionsByTimestamp(allQuestions, { fromUtc: fromUtc, toUtc: toUtc });

        const sorted = sortQuestionsByTimestamp(filtered, sort);

        let result = sorted.map(question => {
            const user = usersRepository.getById(question.userId);

            return {
                id: question.id,
                questionPreview: question.questionText,
                userDisplayName: user?.displayName ?? '',
                askedAtUtc: question.askedAtUtc,
                durationMs: question.aiResponse.durationMs,
            };
        });

        if (search.trim()) {
            const query = search.toLowerCase();
            result = result.filter(item =>
                item.questionPreview.toLowerCase().includes(query) ||
                item.userDisplayName.toLowerCase().includes(query)
            );
        }

        return result;
    }, [fromUtc, toUtc, sort, search]);

    const updateParams = useCallback((key: string, value?: string): void => {
        const next = new URLSearchParams(searchParams);
        if (value && value.trim()) {
            next.set(key, value);
        } else {
            next.delete(key);
        }
        setSearchParams(next, { replace: true });
    }, [searchParams, setSearchParams]);

    const activeFilters = useMemo<ActiveFilter[]>(() => {
        const filters: ActiveFilter[] = [];
        
        if (search) {
            filters.push({
                label: 'Search',
                value: search,
                onRemove: () => updateParams('search', ''),
            });
        }
        
        if (from) {
            filters.push({
                label: 'From',
                value: from,
                onRemove: () => updateParams('from', ''),
            });
        }
        
        if (to) {
            filters.push({
                label: 'To',
                value: to,
                onRemove: () => updateParams('to', ''),
            });
        }
        
        return filters;
    }, [search, from, to, updateParams]);

    return {
        items,
        sort,
        search,
        from,
        to,
        activeFilters,
        setSort: (nextSort: SortOrder) => updateParams('sort', nextSort),
        setSearch: (nextSearch: string) => updateParams('search', nextSearch),
        setFrom: (nextFrom: string) => updateParams('from', nextFrom),
        setTo: (nextTo: string) => updateParams('to', nextTo),
        clearFilters: () => {
            const next = new URLSearchParams();
            setSearchParams(next, { replace: true });
        },
    };
}