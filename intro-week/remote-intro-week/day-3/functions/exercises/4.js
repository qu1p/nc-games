const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function capitaliseString(string) {
  // return the passed string as upper case
return string.toUpperCase();
}

console.log("capitaliseString() can capitalise a single word");
try {
  check(capitaliseString).whenCalledWith("bang").returns("BANG");
  check(capitaliseString).whenCalledWith("apple").returns("APPLE");
  check(capitaliseString).whenCalledWith("abc").returns("ABC");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
