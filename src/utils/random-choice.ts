export const randomChoice = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error("Cannot chose from an empty array");
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
