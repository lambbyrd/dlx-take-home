import { testValidation } from "../validation";

describe("testValidation()", () => {
  it("Should return correct object", () => {
    const correctObject = testValidation("CREDIT_SCORE");
    expect(correctObject).toMatchSnapshot();
  });

  it("Should return default object", () => {
    const defaultObject = testValidation("FAKE_THING");

    expect(defaultObject).toEqual(undefined);
  });
});
