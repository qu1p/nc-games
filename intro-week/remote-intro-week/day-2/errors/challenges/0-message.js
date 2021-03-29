const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

try {
  // Declare a variable called message and assign it the correct the value

  let message = "hello there";
  check(message).isEqualTo("hello there");

  printGreenMessage("Success :)");
} catch (e) {
  printRedMessage(e);
}
