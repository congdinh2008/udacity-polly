import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("API - Test save question with correct input data", () => {
  it("tests all expected fields are populated", async () => {
    const rightQuestion = {
      optionOneText: "Learning English",
      optionTwoText: "Learning Mathematics",
      author: "sarahedo",
    };
    const savedQuestion = await _saveQuestion(rightQuestion);
    expect(savedQuestion).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        author: rightQuestion.author,
        optionOne: { text: rightQuestion.optionOneText, votes: [] },
        optionTwo: { text: rightQuestion.optionTwoText, votes: [] },
        timestamp: expect.any(Number),
      })
    );
  });
});

describe("API - Test save question with error input data", () => {
  it("retuns error in case incorrect data passed", async () => {
    const wrongInputQuestion = {
      optionOne: "Learning English",
      optionTwo: "Learning Mathematics",
      author: "sarahedo",
    };
    await expect(_saveQuestion(wrongInputQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("API - Test save question answer with correct input data", () => {
  it("will returns formatted question", async () => {
    const answer = {
      authedUser: "sarahedo",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionTwo",
    };
    await expect(_saveQuestionAnswer(answer)).resolves.toEqual(true);
  });
});

describe("API - Test save question answer with wrong input data", () => {
  it("will returns error if missing input question answer", async () => {
    const mockIncorrectAnswer = {
      authedUser: "sarahedo",
      qid: "xj352vofupe1dqz9emx13r",
    };
    await expect(_saveQuestionAnswer(mockIncorrectAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
