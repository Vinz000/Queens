import { isValidPlacement } from "@/lib/is-valid-placement";

const reflectHorizontally = (board: number[], n: number): number[] => {
  return board.map((col) => n - 1 - col);
};

const generateSymmetries = (board: number[]): number[][] => {
  const n = board.length;

  const rotate90 = Array(n);
  board.forEach((col, row) => {
    rotate90[col] = n - 1 - row;
  });

  const rotate180 = Array(n);
  board.forEach((col, row) => {
    rotate180[n - 1 - row] = n - 1 - col;
  });

  const rotate270 = Array(n);
  board.forEach((col, row) => {
    rotate270[n - 1 - col] = row;
  });

  return [
    board,
    rotate90,
    rotate180,
    rotate270,
    reflectHorizontally(board, n),
    reflectHorizontally(rotate90, n),
    reflectHorizontally(rotate180, n),
    reflectHorizontally(rotate270, n),
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
