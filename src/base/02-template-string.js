const name = "Nahuel";
const lastName = "Castillo";

// const fullName = name + ' ' + lastName;
const fullName = `${name} ${lastName}`;

// console.log( fullName );

export function getGreeting(name = "Manuel" /* default value */) {
  return "Hi " + name;
}

// console.log( `Gretting: ${ getGretting( name ) }  ` );
