import { describe, it, expect } from "vitest"
import { formatDuration } from "./formatDuration"

describe("formatDuration", () => {
    it('returns correct format for duration less than 1000ms', () => {
        const result = formatDuration(500);
        expect(result).toEqual("500ms");
    })
    it('returns correct format for duration equal to 1000ms', () => {
        const result = formatDuration(1000);
        expect(result).toEqual("1.0s");
    })
    it('returns correct format for duration greater than 1000ms', () => {
        const result = formatDuration(1500);
        expect(result).toEqual("1.5s");
    })
    it('returns correct format for duration 0ms', () => {
        const result = formatDuration(0);
        expect(result).toEqual("0ms");
    })
})