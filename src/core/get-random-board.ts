import type { GameBoard } from "@/types/game-board";
import type { QueensBoard } from "@/types/queens-board";
import { randomChoice } from "@/utils/random-choice";
import { BoardSymmetry } from "@/core/board-symmetry";
import { generateShapeMap } from "@/core/generate-shape-map";

const SYMMETRIES = [(b: QueensBoard) => b, BoardSymmetry.rotate90, BoardSymmetry.rotate180, BoardSymmetry.rotate270];

const getBaseBoard = (size: number, fundamentalBoards: Record<number, QueensBoard[]>): QueensBoard => {
  const boards = fundamentalBoards[size];
  if (!boards || boards.length === 0) {
    throw new Error(`No fundamental solutions for size ${size}`);
  }
  return randomChoice(boards);
};

const applyRandomSymmetry = (baseBoard: QueensBoard): QueensBoard => {
  let board = randomChoice(SYMMETRIES)(baseBoard);
  if (Math.random() < 0.5) {
    board = BoardSymmetry.reflectThroughYAxis(board);
  }
  return board;
};

export const getRandomBoard = (size: number, fundamentalBoards: Record<number, QueensBoard[]>): GameBoard => {
  const baseBoard = getBaseBoard(size, fundamentalBoards);
  const board = applyRandomSymmetry(baseBoard);
  const shapeMap = generateShapeMap(board);
  return { queens: board, shapeMap };
};
