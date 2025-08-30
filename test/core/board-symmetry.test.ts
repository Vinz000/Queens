import { describe, it, expect } from "vitest";
import { BoardSymmetry } from "@/core/board-symmetry";

describe("BoardSymmetry", () => {
  const board = [1, 6, 2, 5, 7, 4, 0, 3];

  it("should rotate 90 degrees", () => {
    const rotated = BoardSymmetry.rotate90(board);
    expect(rotated).toEqual([1, 7, 5, 0, 2, 4, 6, 3]);
  });

  it("should rotate 180 degrees", () => {
    const rotated = BoardSymmetry.rotate180(board);
    expect(rotated).toEqual([4, 7, 3, 0, 2, 5, 1, 6]);
  });

  it("should rotate 270 degrees", () => {
    const rotated = BoardSymmetry.rotate270(board);
    expect(rotated).toEqual([4, 1, 3, 5, 7, 2, 0, 6]);
  });

  it("should reflect horizontally", () => {
    const reflected = BoardSymmetry.reflectHorizontally(board);
    expect(reflected).toEqual([6, 1, 5, 2, 0, 3, 7, 4]);
  });
});
