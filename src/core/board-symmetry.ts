import type { QueensBoard } from "@/types/queens-board";

export class BoardSymmetry {
  static rotate90(board: QueensBoard): QueensBoard {
    const size = board.length;
    const rotated = Array(size);
    board.forEach((col, row) => {
      rotated[col] = size - 1 - row;
    });
    return rotated;
  }

  static rotate180(board: QueensBoard): QueensBoard {
    const size = board.length;
    const rotated = Array(size);
    board.forEach((col, row) => {
      rotated[size - 1 - row] = size - 1 - col;
    });
    return rotated;
  }

  static rotate270(board: QueensBoard): QueensBoard {
    const size = board.length;
    const rotated = Array(size);
    board.forEach((col, row) => {
      rotated[size - 1 - col] = row;
    });
    return rotated;
  }

  static reflectHorizontally(board: QueensBoard): QueensBoard {
    const size = board.length;
    return board.map((col) => size - 1 - col);
  }
}
