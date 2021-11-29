import { getHeroeById } from "./08-imp-exp";

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject(`Hero with id: ${id} not found`);
      }
    }, 1000);
  });
};

// getHeroeByIdAsync(1)
//     .then( console.log )
//     .catch( console.warn );
