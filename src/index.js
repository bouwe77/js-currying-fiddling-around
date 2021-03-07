// =================================================
// Version 1 - Hard-coded English greeting
function greet(name) {
  return `Hello, ${name}!`;
}

//greet("John"); // Hello, John!

// =================================================
// Version 2 -
function greet2(salutation, name) {
  return `${salutation}, ${name}!`;
}

//console.log(greet2("Hello", "Mary")); // Hello, Mary!
//console.log(greet2("Good morning", "Mister Davies")); // Good morning, Mister Davies!

// =================================================
// Version 3 - More declarative approach

const informalGreet2 = (name) => greet2("Hi", name);
const formalGreet2 = (name) => greet2("Good day", name);
const dutchGreet2 = (name) => greet2("Hoi", name);
console.log(informalGreet2("Jack")); // Hi, Jack!
console.log(formalGreet2("Ms Brown")); // Good day, Ms Brown!
console.log(dutchGreet2("Piet")); // Hoi, Piet!

// =================================================
// Version 4 - Currying

function greet3(salutation) {
  return function (name) {
    return `${salutation}, ${name}!`;
  };
}

const informalGreet3 = greet3("Hi");
const formalGreet3 = greet3("Good day");
const dutchGreet3 = greet3("Hoi");
console.log(informalGreet3("Jack")); // Hi, Jack!
console.log(formalGreet3("Ms Brown")); // Good day, Ms Brown!
console.log(dutchGreet3("Piet")); // Hoi, Piet!

// =================================================
// Version 5 - Currying with more arguments

function greet4(salutation) {
  return function (openingSentence) {
    return function (name) {
      return `${salutation}, ${name}! ${openingSentence}`;
    };
  };
}

const informalGreet4 = greet4("Hi")("How are you?");
const formalGreet4 = greet4("Good day")("How do you do?");
const dutchGreet4 = greet4("Hoi")("Alles kits?");
console.log(informalGreet4("Jack")); // Hi, Jack! How are you?
console.log(formalGreet4("Ms Brown")); // Good day, Ms Brown! How do you do?
console.log(dutchGreet4("Piet")); // Hoi, Piet! Alles kits?
