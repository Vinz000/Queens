import { describe, it, expect } from "vitest";
import { generateShapeMap } from "@/lib/generate-shape-map";

describe("generateShapeMap", () => {
  const board = [0, 5, 3, 6, 9, 2, 8, 1, 4, 7];
  const size = board.length;

  it("should create an nxn array", () => {
    const shapeMap = generateShapeMap(board);
    expect(shapeMap.length).toBe(size);
    shapeMap.forEach((row) => expect(row.length).toBe(size));
  });

  it("should fill the entire grid (no -1 values)", () => {
    const shapeMap = generateShapeMap(board);
    shapeMap.forEach((row) => {
      row.forEach((col) => {
        expect(col).not.toBe(-1);
      });
    });
  });

  it("should contain at least n different queen ids", () => {
    const shapeMap = generateShapeMap(board);
    const ids = new Set(shapeMap.flat());
    expect(ids.size).toBe(size);
  });

  it("should only contain ids in the range 0->n-1", () => {
    const shapeMap = generateShapeMap(board);
    shapeMap.flat().forEach((id) => {
      expect(id).toBeGreaterThanOrEqual(0);
      expect(id).toBeLessThan(size);
    });
  });

  it("should assign each queens starting cell to its own id", () => {
    const shapeMap = generateShapeMap(board);
    board.forEach((col, row) => {
      expect(shapeMap[row][col]).toBe(row);
    });
  });

  it("should likely generate different maps on different runs", () => {
    const map1 = generateShapeMap(board);
    const map2 = generateShapeMap(board);

    expect(map1).not.toEqual(map2);
  });
});
