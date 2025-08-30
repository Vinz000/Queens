import { getRandomBoard } from "@/core/get-random-board";
import { isValidPlacement } from "@/core/is-valid-placement";
import { loadFundamentalBoards } from "@/core/load-fundamentals";
import type { QueensBoard } from "@/types/queens-board";
import type { ShapeMap } from "@/types/shape-map";

const solveShapeMap = (shapeMap: ShapeMap, limit = 2): QueensBoard[] => {
  const size = shapeMap.length;
  const usedCols = new Set<number>();
  const usedRegions = new Set<number>();
  const solutions: QueensBoard[] = [];

  const backtrack = (row: number, board: QueensBoard) => {
    if (solutions.length >= limit) return;
    if (row === size) {
      solutions.push([...board]);
      return;
    }

    for (let col = 0; col < size; col++) {
      const region = shapeMap[row][col];
      if (usedCols.has(col) || usedRegions.has(region) || !isValidPlacement(board, row, col)) continue;

      board.push(col);
      usedCols.add(col);
      usedRegions.add(region);

      backtrack(row + 1, board);

      board.pop();
      usedCols.delete(col);
      usedRegions.delete(region);
    }
  };

  backtrack(0, []);
  return solutions;
};

const boardUniquenessExperiment = () => {
  const trials = 10000;
  const fundamentalBoards = loadFundamentalBoards();

  Object.keys(fundamentalBoards).forEach((size) => {
    let unique = 0;
    let multiple = 0;
    for (let i = 0; i < trials; i++) {
      const randomBoard = getRandomBoard(parseInt(size), fundamentalBoards);
      const solved = solveShapeMap(randomBoard.shapeMap, 2);

      if (solved.length === 1) {
        unique++;
      } else {
        multiple++;
      }
    }

    console.log(`${trials} trials for ${size}x${size} board:`);
    console.log(`Unique solutions: ${unique} (${((unique / trials) * 100).toFixed(2)}%)`);
    console.log(`Multiple solutions: ${multiple} (${((multiple / trials) * 100).toFixed(2)}%)`);
    console.log("--------------------------------------------------------------");
  });
};

boardUniquenessExperiment();
