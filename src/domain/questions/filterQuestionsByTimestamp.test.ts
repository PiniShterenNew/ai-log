import { describe, it, expect } from "vitest"
import { filterQuestionsByTimestamp } from "./filterQuestionsByTimestamp"
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
];


describe("filterQuestionsByTimestamp", () => {
    // no filters ⇒ מחזיר הכול
    it('returns all questions when no range is provided', () => {
        const result = filterQuestionsByTimestamp(QUESTIONS, {});
        expect(result).toEqual(QUESTIONS);
    })
    it('returns questions when only fromUtc is provided', () => {
        const result = filterQuestionsByTimestamp(QUESTIONS, { fromUtc: "2025-01-02T00:00:00Z" });
        expect(result).toEqual([QUESTIONS[1], QUESTIONS[2]]);
    })
    it('returns questions when only toUtc is provided', () => {
        const result = filterQuestionsByTimestamp(QUESTIONS, { toUtc: "2025-01-02T00:00:00Z" });
        expect(result).toEqual([QUESTIONS[0], QUESTIONS[1]]);
    })
    it('returns questions from and to date range', () => {
        const result = filterQuestionsByTimestamp(QUESTIONS, { fromUtc: "2025-01-02T00:00:00Z", toUtc: "2025-01-03T00:00:00Z" });
        expect(result).toEqual([QUESTIONS[1], QUESTIONS[2]]);
    })
    it('returns empty array when from is greater than to', () => {
        const result = filterQuestionsByTimestamp(QUESTIONS, { fromUtc: "2025-01-04T00:00:00Z", toUtc: "2025-01-03T00:00:00Z" });
        expect(result).toEqual([]);
    })
    it('returns empty array when array is empty', () => {
        const result = filterQuestionsByTimestamp([], {});
        expect(result).toEqual([]);
    })
})