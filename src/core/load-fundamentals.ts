import path from "path";
import fs from "fs";
import type { QueensBoard } from "@/types/queens-board";
import { fileURLToPath } from "url";

const BOARD_SIZES = [8, 10, 12];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadFundamentalBoards = (): Record<number, QueensBoard[]> => {
  const fundamentalBoards: Record<number, QueensBoard[]> = {};

  BOARD_SIZES.forEach((size) => {
    const filePath = path.resolve(__dirname, `../data/queens/${size}x${size}.json`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`No JSON file found for ${size}x${size} queens at ${filePath}`);
    }
    const content = fs.readFileSync(filePath, "utf-8");
    fundamentalBoards[size] = JSON.parse(content) as QueensBoard[];
  });

  return fundamentalBoards;
};
