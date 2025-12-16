import { describe, it, expect } from "vitest"
import { sortQuestionsByTimestamp } from "./sortQuestionsByTimestamp"
import type { Question } from "@/shared"

const QUESTIONS: Question[] = [
    {
        id: "1",
        userId: "1",
        askedAtUtc: "2025-01-01T00:00:00Z",
        questionText: "What is the capital of France?",
        aiResponse: { text: "The capital of France is Paris.", durationMs: 1000 }
    },
    {
        id: "2",
        userId: "2",
        askedAtUtc: "2025-01-02T00:00:00Z",
        questionText: "What is the capital of Germany?",
        aiResponse: { text: "The capital of Germany is Berlin.", durationMs: 1000 }
    },
    {
        id: "3",
        userId: "3",
        askedAtUtc: "2025-01-03T00:00:00Z",
        questionText: "What is the capital of Italy?",
        aiResponse: { text: "The capital of Italy is Rome.", durationMs: 1000 }
    }
]

describe("sortQuestionsByTimestamp", () => {
    it('return correct order when newest first', () => {
        const result = sortQuestionsByTimestamp(QUESTIONS, 'newest');
        expect(result).toEqual([QUESTIONS[2], QUESTIONS[1], QUESTIONS[0]]);
    })
    it('does not mutate the original array', () => {
        const original = [...QUESTIONS];
        sortQuestionsByTimestamp(QUESTIONS, 'newest');
        expect(QUESTIONS).toEqual(original);
    });
    it('returns correct order when oldest first', () => {
        const result = sortQuestionsByTimestamp(QUESTIONS, 'oldest');
        expect(result.map(q => q.id)).toEqual(['1', '2', '3']);
    });
    it('returns empty array when input is empty', () => {
        const result = sortQuestionsByTimestamp([], 'newest');
        expect(result).toEqual([]);
    });
    it('returns same array when only one question exists', () => {
        const single = [QUESTIONS[0]];
        const result = sortQuestionsByTimestamp(single, 'newest');
        expect(result).toEqual(single);
    });

});