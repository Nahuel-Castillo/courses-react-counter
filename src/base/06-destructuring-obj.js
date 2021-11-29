const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

// object destructuring
const { age, key, name } = person;

const context = ({ key, name, age, range = "Leader" }) => {
  return {
    keyName: key,
    age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  keyName,
  age,
  latlng: { lat, lng },
} = context(person);
