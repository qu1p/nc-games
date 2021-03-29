const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

// Declare a function called multiply
// This function should multiply 2 numbers and return the result
function multiply(num1, num2) {
  return num1 * num2;
}

console.log("multiply() can multiply 2 numbers together");
try {
  check(multiply).whenCalledWith(10, 42).returns(420);
  check(multiply).whenCalledWith(3, 5).returns(15);
  check(multiply).whenCalledWith(-180, 2).returns(-360);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
