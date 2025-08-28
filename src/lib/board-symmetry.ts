import type { QueensBoard } from "@/types/queens-board";

export class BoardSymmetry {
  static rotate90(board: QueensBoard): QueensBoard {
    const n = board.length;
    const rotated = Array(n);
    board.forEach((col, row) => {
      rotated[col] = n - 1 - row;
    });
    return rotated;
  }

  static rotate180(board: QueensBoard): QueensBoard {
    const n = board.length;
    const rotated = Array(n);
    board.forEach((col, row) => {
      rotated[n - 1 - row] = n - 1 - col;
    });
    return rotated;
  }

  static rotate270(board: QueensBoard): QueensBoard {
    const n = board.length;
    const rotated = Array(n);
    board.forEach((col, row) => {
      rotated[n - 1 - col] = row;
    });
    return rotated;
  }

  static reflectHorizontally(board: QueensBoard): QueensBoard {
    const n = board.length;
    return board.map((col) => n - 1 - col);
  }
}
