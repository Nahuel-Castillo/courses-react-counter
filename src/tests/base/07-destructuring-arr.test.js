import { getArray } from "../../base/07-deses-arr";

describe("07-destructuring-arr", () => {
  test("should return string and number", () => {
    const [letters, nums] = getArray();

    expect(typeof letters).toBe("string");
    expect(letters).toBe("ABC");

    expect(typeof nums).toBe("number");
    expect(nums).toBe(123);
  });
});
