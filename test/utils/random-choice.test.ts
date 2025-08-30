import { randomChoice } from "@/utils/random-choice";
import { describe, expect, it } from "vitest";

describe("randomChoice", () => {
  it("should return an element from an array", () => {
    const array = [1, 2, 3, 4];
    const value = randomChoice(array);
    expect(array).toContain(value);
  });

  it("should throw an error when passing empty array", () => {
    expect(() => randomChoice([])).toThrow("Cannot chose from an empty array");
  });
});
