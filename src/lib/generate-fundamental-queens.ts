import { isValidPlacement } from "@/lib/is-valid-placement";
import { BoardSymmetry } from "@/lib/board-symmetry";
import type { QueensBoard } from "@/types/queens-board";

const generateSymmetries = (board: QueensBoard): QueensBoard[] => {
  const rotate90 = BoardSymmetry.rotate90(board);
  const rotate180 = BoardSymmetry.rotate180(board);
  const rotate270 = BoardSymmetry.rotate270(board);

  return [
    board,
    rotate90,
    rotate180,
    rotate270,
    BoardSymmetry.reflectHorizontally(board),
    BoardSymmetry.reflectHorizontally(rotate90),
    BoardSymmetry.reflectHorizontally(rotate180),
    BoardSymmetry.reflectHorizontally(rotate270),
  ];
};

export const generateFundamentalQueens = (size: number): QueensBoard[] => {
  const results: QueensBoard[] = [];
  const seen = new Set<string>();

  const placeQueens = (row: number, board: QueensBoard) => {
    if (row === size) {
      const solutionHash = board.join(",");

      if (seen.has(solutionHash)) return;

      results.push([...board]);

      generateSymmetries(board).forEach((symmetry) => {
        seen.add(symmetry.join(","));
      });

      return;
    }

    for (let col = 0; col < size; col++) {
      if (isValidPlacement(board, row, col)) {
        board[row] = col;
        placeQueens(row + 1, board);
        board[row] = -1;
      }
    }
  };

  placeQueens(0, Array(size).fill(-1));

  return results;
};
