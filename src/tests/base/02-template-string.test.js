import { getGreeting } from "../../base/02-template-string";

describe("02-template-string", () => {
  test("should return Hi Nahuel", () => {
    const name = "Nahuel";

    const greeting = getGreeting(name);

    expect(greeting).toBe("Hi " + name);
  });

  test("should return Hi Manuel", () => {
    const greeting = getGreeting();

    expect(greeting).toBe("Hola Manuel");
  });
});
