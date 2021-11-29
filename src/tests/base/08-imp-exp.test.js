import { getHeroById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../datos/heroes";

describe("08-imp-exp", () => {
  test("should return an object", () => {
    for (let i = 1; i <= heroes.length; i++) {
      const heroe = getHeroById(i);

      expect(heroe).toBeDefined();
    }
  });

  test("should return DC heroes", () => {
    const ownerDC = "DC";

    const heroesDC = getHeroesByOwner(ownerDC);

    heroesDC.forEach(({ owner }) => {
      expect(owner).toBe(ownerDC);
    });
  });

  test("should return an array with 2 Marvel heroes", () => {
    const owner = "Marvel";

    const heroesMarvel = getHeroesByOwner(owner);

    expect(heroesMarvel.length).toBe(2);
  });
});
