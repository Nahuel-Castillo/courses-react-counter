import { getHeroByIdAsync } from "../../base/09-promesas";
import heroes from "../../datos/heroes";

describe("09-promises", () => {
  test("should return an hero", (done) => {
    const id = 1;

    getHeroByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);

      done(); //asegurarse de que el proceso terminó
    });
  });

  test("should return an error if id does not exist", (done) => {
    const id = 10;
    getHeroByIdAsync(id).catch((err) => {
      expect(err).toBe(`Hero with id: ${id} not found`);
      done();
    });
  });
});
