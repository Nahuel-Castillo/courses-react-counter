const characters = ["Goku", "Vegeta", "Trunks"];

// array destructuring
const [, , p3] = characters;

const getArray = () => {
  return ["ABC", 123];
};

const [letters, nums] = getArray();
// console.log(letras, numeros);

export { getArray };
