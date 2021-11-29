// Functions in JS
const greeting = function (name) {
  return `Hi, ${name}`;
};

//Arrow Functions
const greeting2 = (name) => {
  return `Hi, ${name}`;
};

//auto return
const greeting3 = (name) => `Hi, ${name}`;
const greeting4 = () => `Hello World`;

// console.log(greeting("Nahuel"));
// console.log(greeting2("Nahuel"));
// console.log(greeting3("Nahuel"));
// console.log(greeting4());

const getUser = () => ({
  uid: "123",
  uname: "Nahuel",
});

const user = getUser();
// console.log(user);

//destructuring parameters
const getActiveUser = ({ uid, uname }, active = true) => ({
  uid: uid,
  uname: uname,
  active: active,
});

const activeUser = getActiveUser(getUser());

export { getUser, getActiveUser };
