const Word = require("../util/Word");

describe("Word", () => {
  describe("Success", () => {
    it("Should create a new word object with the word set to argument"),
      () => {
        const testWord = new Word("test");
        expect(testWord).toEqual({ word: "test" });
      };
  });
  it("Should return word", () => {
    const testWord = new word("test");
    expect(testWord.getWord).toBe("test");
  });
});

describe("getWord", () => {
  it("Should set the word to the arguument that was passed", () => {
    const testWord = new Word("test");
    testWord.setWord("thing");
    expect(testWord).toEqual({ word: "thing" });
  });
});

describe("rev", () => {
  it("Should return a new object with the initial word reversed", () => {
    const testWord = new Word("test");
    expect(testWord).toEqual({ word: "tset" });
  });
});
