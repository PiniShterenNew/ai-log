import { describe, it, expect } from "vitest";
import { formatLocalToUtc } from "./formatLocalToUtc";

describe("formatLocalToUtc", () => {
  it("converts local ISO with offset to UTC ISO", () => {
    const result = formatLocalToUtc("2025-01-01T00:00:00+02:00");
    expect(result).toBe("2024-12-31T22:00:00.000Z");
  });

  it("keeps correct time when offset is negative", () => {
    const result = formatLocalToUtc("2025-01-01T00:00:00-05:00");
    expect(result).toBe("2025-01-01T05:00:00.000Z");
  });

  it("returns ISO string in UTC format", () => {
    const result = formatLocalToUtc("2025-06-15T10:30:00+00:00");
    expect(result.endsWith("Z")).toBe(true);
  });
});
