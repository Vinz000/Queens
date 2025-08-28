type Grid = number[][];

const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const SKIP_CHANCE = 0.3;

const isEmptyCell = (shapeMap: Grid, row: number, col: number): boolean => {
  const n = shapeMap[0].length;
  return row >= 0 && row < n && col >= 0 && col < n && shapeMap[row][col] === -1;
};

export const generateShapeMap = (board: number[]): number[][] => {
  const n = board.length;
  const shapeMap = Array.from({ length: n }, () => Array(n).fill(-1));

  const activeCells = board.map((col, row) => {
    shapeMap[row][col] = row;
    return { row, col, queenId: row };
  });

  while (activeCells.length > 0) {
    const index = Math.floor(Math.random() * activeCells.length);
    const { row, col, queenId } = activeCells[index];

    if (Math.random() < SKIP_CHANCE) continue;

    const [rowOffset, colOffset] = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
    const newRow = row + rowOffset;
    const newCol = col + colOffset;

    if (isEmptyCell(shapeMap, newRow, newCol)) {
      shapeMap[newRow][newCol] = queenId;
      activeCells.push({ row: newRow, col: newCol, queenId });
    }

    const canExpand = DIRECTIONS.some(([rOffset, cOffset]) => {
      const nextRow = row + rOffset;
      const nextCol = col + cOffset;
      return isEmptyCell(shapeMap, nextRow, nextCol);
    });

    if (!canExpand) {
      activeCells.splice(index, 1);
    }
  }

  return shapeMap;
};
