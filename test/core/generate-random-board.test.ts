import { getRandomBoard } from "@/core/get-random-board";
import { describe, expect, it } from "vitest";

describe("getRandomBoard", () => {
  const fundamentalBoards = {
    8: [
      [1, 5, 0, 6, 3, 7, 2, 4],
      [1, 5, 7, 2, 0, 3, 6, 4],
    ],
    10: [
      [0, 3, 9, 6, 8, 2, 4, 1, 7, 5],
      [0, 4, 6, 9, 3, 1, 8, 2, 5, 7],
    ],
  };

  it("should throw an error if no solutions for a given size", () => {
    expect(() => getRandomBoard(5, fundamentalBoards)).toThrow("No fundamental solutions for size 5");
    expect(() => getRandomBoard(11, fundamentalBoards)).toThrow("No fundamental solutions for size 11");
  });

  it("should return a gameboard with queens and shapeMap", () => {
    const board = getRandomBoard(8, fundamentalBoards);
    expect(board).toHaveProperty("queens");
    expect(board).toHaveProperty("shapeMap");
    expect(Array.isArray(board.queens)).toBe(true);
    expect(Array.isArray(board.shapeMap)).toBe(true);
  });

  it("should likely produce different results", () => {
    const board1 = getRandomBoard(10, fundamentalBoards);
    const board2 = getRandomBoard(10, fundamentalBoards);
    expect(board1).not.toEqual(board2);
  });
});
