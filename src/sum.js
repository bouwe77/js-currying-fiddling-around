const assert = require("assert");

// This function can make a "normal" function curried:
// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return function (a) {
      return curried(...[...args, a]);
    };
  };
}

// This is a "normal" function, i.e. with several parameters:
function sum(a, b, c) {
  return a + b + c;
}

// Let's make it curried:
let curriedSum = curry(sum);

// Now we can still call it with all the arguments:
assert(curriedSum(1, 2, 3) === 6);

// We can call it with all arguments separately:
assert(curriedSum(1)(2)(3) === 6);

// And we can apply parial application:
const add100 = curriedSum(100);
const add200 = add100(200);
assert(add200(1) === 301);

console.log("Success!");
