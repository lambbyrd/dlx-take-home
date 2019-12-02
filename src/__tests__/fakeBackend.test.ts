import { toNumber, checkApplication } from "../fakeBackend";

describe("fakeBackend", () => {
  it("Should return a number in thousands", () => {
    const correctNumber = toNumber("2,000.00");

    expect(typeof correctNumber).toEqual("number");
    expect(correctNumber).toEqual(2000);
  });

  it("Should return a number in millions", () => {
    const correctNumber = toNumber("2,000,000.00");

    expect(typeof correctNumber).toEqual("number");
    expect(correctNumber).toEqual(2000000);
  });

  it("Should return a BAD_REQUEST", () => {
    const fakeObject = {
      question1: "2,000,000.00",
      question2: "Hello",
      question3: "Hi",
      question4: "120,000.00",
      question5: 700
    };
    const appStatus = checkApplication(fakeObject);

    expect(appStatus.decision).toEqual("BAD_REQUEST");
  });

  it("Should return a DENIED", () => {
    const fakeObject = {
      question1: "100,000.00",
      question2: "Hello",
      question3: "Hi",
      question4: "120,000.00",
      question5: 700
    };
    const appStatus = checkApplication(fakeObject);

    expect(appStatus.decision).toEqual("DENIED");
  });

  it("Should return a APPROVED", () => {
    const fakeObject = {
      question1: "10,000.00",
      question2: "Hello",
      question3: "Hi",
      question4: "120,000.00",
      question5: 700
    };
    const appStatus = checkApplication(fakeObject);

    expect(appStatus.decision).toEqual("APPROVED");
  });
});
