import { describe, it, expect } from "vitest";
import { formatUtcToLocal } from "./formatUtcToLocal";

describe("formatUtcToLocal", () => {
  it("returns a human-readable local date string", () => {
    const result = formatUtcToLocal("2025-01-01T00:00:00Z");

    expect(result).toContain("2025");
    expect(result).toMatch(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/);
    expect(result).toMatch(/\d{1,2}:\d{2}/);
  });

  it("does not return an ISO string", () => {
    const result = formatUtcToLocal("2025-01-01T00:00:00Z");

    expect(result).not.toContain("T");
    expect(result).not.toContain("Z");
  });
});
