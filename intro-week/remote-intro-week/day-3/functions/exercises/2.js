const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

// Declare a function called connectStrings
// This function should take 2 strings and join them together with a space inbetween

function connectStrings(string1, string2) {
  return `${string1} ${string2}`
}

console.log("connectStrings() can join 2 strings together");
try {
  check(connectStrings).whenCalledWith("hello", "world").returns("hello world");
  check(connectStrings).whenCalledWith("paul", "rogerson").returns("paul rogerson");
  check(connectStrings).whenCalledWith("blue", "sky").returns("blue sky");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
