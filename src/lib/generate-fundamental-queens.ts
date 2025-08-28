import { isValidPlacement } from "@/lib/is-valid-placement";
import { BoardSymmetry } from "@/lib/board-symmetry";

const generateSymmetries = (board: number[]): number[][] => {
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

export const generateFundamentalQueens = (n: number): number[][] => {
  const results: number[][] = [];
  const seen = new Set<string>();

  const placeQueens = (row: number, board: number[]) => {
    if (row === n) {
      const solutionHash = board.join(",");

      if (seen.has(solutionHash)) return;

      results.push([...board]);

      generateSymmetries(board).forEach((symmetry) => {
        seen.add(symmetry.join(","));
      });

      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValidPlacement(board, row, col)) {
        board[row] = col;
        placeQueens(row + 1, board);
        board[row] = -1;
      }
    }
  };

  placeQueens(0, Array(n).fill(-1));

  return results;
};
