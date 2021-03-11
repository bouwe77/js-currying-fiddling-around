const assert = require("assert");

// STEP 1: Create the "replicate I character" and a curried replace functions

// This function returns a string with the given number of "I"s
function replicateIs(howMany) {
  return "I".repeat(howMany);
}

// This is a curried version of a string replace function.
function replace(oldValue, newValue) {
  return function (inputStr) {
    return inputStr.replace(new RegExp(oldValue), newValue);
  };
}

// STEP 2: Compose replace functions out of the curried replace function: partial application

const replace_IIIII_with_V = replace("IIIII", "V");
const replace_VV_with_X = replace("VV", "X");
const replace_XXXXX_with_L = replace("XXXXX", "L");
// etc.

// STEP 3: Create a "decimal to Roman numeral" function

function decimaltoRomanNumeral(decimal) {
  return replace_XXXXX_with_L(
    replace_VV_with_X(replace_IIIII_with_V(replicateIs(decimal)))
  );

  // As soon as this is supported: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator
  // return decimal
  //   |> replicateIs
  //   |> replace_IIIII_with_V
  //   |> replace_VV_with_X
  //   |> replace_XXXXX_with_L;
}

// STEP 4: Let's do some testing :)
decimaltoRomanNumeral(2); // "II"
decimaltoRomanNumeral(5); // "V"
decimaltoRomanNumeral(6); // "VI"
// etc.

test(2, "II");
test(4, "IIII");
test(5, "V");
test(6, "VI");

// This is a utility function to make the tests more readable:
function test(decimalNumber, romanNumeral) {
  let result = "✅ OK";
  try {
    assert.strictEqual(decimaltoRomanNumeral(decimalNumber), romanNumeral);
  } catch {
    result = "❌ NOK";
  }

  console.log(`${result} (${decimalNumber} === ${romanNumeral})`);
}
