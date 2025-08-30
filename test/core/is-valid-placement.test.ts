import { describe, it, expect } from "vitest";
import { isValidPlacement } from "@/core/is-valid-placement";

describe("isValidPlacement", () => {
  it("should allow first queen anywhere", () => {
    for (let col = 0; col < 8; col++) {
      expect(isValidPlacement([], 0, col)).toBe(true);
    }
  });

  it("should allow if no conflicts", () => {
    const board = [2, 4, 7, 3, 0];
    expect(isValidPlacement(board, 5, 6)).toBe(true);
  });

  it("should detect same column conflicts", () => {
    const board = [2, 4, 7, 3, 0];
    expect(isValidPlacement(board, 5, 7)).toBe(false);
  });

  it("should detect same diagonal conflict", () => {
    // On diagonal (↘)
    const board1 = [0];
    expect(isValidPlacement(board1, 1, 1)).toBe(false);

    // On diagonal (↙)
    const board = [1];
    expect(isValidPlacement(board, 1, 0)).toBe(false);
  });
});
