import { describe, it, expect } from "vitest"
import { questionsRepository } from "./questionsRepository"
import { questionsMock } from "../mock/questions.mock"

describe("getAll", () => {
    it('returns all questions', () => {
        const result = questionsRepository.getAll();
        expect(result).toEqual(questionsMock);
    })
    it('returns a new array instance', () => {
        const result = questionsRepository.getAll();
        expect(result).not.toBe(questionsMock);
      });
})

describe("getById", () => {
    it('returns question by id', () => {
        const result = questionsRepository.getById("q1");
        expect(result).toEqual(questionsMock[0]);
    })
    it('returns null if question not found', () => {
        const result = questionsRepository.getById("q100");
        expect(result).toEqual(null);
    })
})