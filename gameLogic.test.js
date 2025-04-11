describe("Hangman core logic", () => {
  const sampleWord = "REACT";

  test("correct guess returns true", () => {
    const guess = "A";
    expect(sampleWord.includes(guess)).toBe(true);
  });

  test("incorrect guess returns false", () => {
    const guess = "Z";
    expect(sampleWord.includes(guess)).toBe(false);
  });

  test("all letters guessed returns true", () => {
    const used = ["R", "E", "A", "C", "T"];
    const result = sampleWord.split('').every(l => used.includes(l));
    expect(result).toBe(true);
  });

  test("not all letters guessed returns false", () => {
    const used = ["R", "E", "A"];
    const result = sampleWord.split('').every(l => used.includes(l));
    expect(result).toBe(false);
  });
});
