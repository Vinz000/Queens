import { loadFundamentalBoards } from "@/core/load-fundamentals";
import { describe, it, expect, vi } from "vitest";
import fs from "fs";

describe("loadFundamentals", () => {
  it("should load boards for all supported sizes", () => {
    const fundamentalBoards = loadFundamentalBoards();

    [8, 10, 12].forEach((size) => {
      expect(fundamentalBoards[size]).toBeDefined();
      expect(Array.isArray(fundamentalBoards[size])).toBe(true);
      expect(fundamentalBoards[size].length).toBeGreaterThan(0);
    });
  });

  it("should throw if JSON file is missing", () => {
    const spy = vi.spyOn(fs, "existsSync").mockReturnValue(false);
    expect(() => loadFundamentalBoards()).toThrow("No JSON file found for");
    spy.mockRestore();
  });
});
