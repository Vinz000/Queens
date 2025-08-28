// scripts/gen-queens.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateFundamentalQueens } from "@/lib/generate-fundamental-queens";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDirectory = path.resolve(__dirname, "../src/data/queens");
fs.mkdirSync(outputDirectory, { recursive: true });

const sizes = [8, 10, 12];
sizes.forEach((size) => {
  const fileName = `${size}x${size}`;
  console.log(`Generating ${fileName} fundamental queens solutions`);

  const solutions = generateFundamentalQueens(size);
  const filePath = path.join(outputDirectory, `${fileName}.json`);
  fs.writeFileSync(filePath, JSON.stringify(solutions));

  console.log(`Saved ${fileName} solutions to ${filePath}`);
});
