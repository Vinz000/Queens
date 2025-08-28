export const isValidPlacement = (board: number[], row: number, col: number): boolean => {
  for (let i = 0; i < row; i++) {
    const isSameCol = board[i] === col;
    const isSameDiagonal = Math.abs(board[i] - col) === row - i;
    if (isSameCol || isSameDiagonal) {
      return false;
    }
  }

  return true;
};
