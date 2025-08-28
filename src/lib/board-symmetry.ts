export class BoardSymmetry {
  static rotate90(board: number[]): number[] {
    const n = board.length;
    const rotated = Array(n);
    board.forEach((col, row) => {
      rotated[col] = n - 1 - row;
    });
    return rotated;
  }

  static rotate180(board: number[]): number[] {
    const n = board.length;
    const rotated = Array(n);
    board.forEach((col, row) => {
      rotated[n - 1 - row] = n - 1 - col;
    });
    return rotated;
  }

  static rotate270(board: number[]): number[] {
    const n = board.length;
    const rotated = Array(n);
    board.forEach((col, row) => {
      rotated[n - 1 - col] = row;
    });
    return rotated;
  }

  static reflectHorizontally(board: number[]): number[] {
    const n = board.length;
    return board.map((col) => n - 1 - col);
  }
}
