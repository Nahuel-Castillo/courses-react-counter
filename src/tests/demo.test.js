describe("file demo.test.js", () => {
  test("string1 and string2 should be equals", () => {
    //1. Initiation
    const message = "Hola mundo";

    //2. stimulus
    const message2 = "Hola mundo";

    //3. evaluation
    expect(message).toBe(message2);
  });
});
