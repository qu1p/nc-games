const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function double(num) {
  // return any number doubled
  return num * 2
}

console.log("double() can double any number");
try {
  check(double).whenCalledWith(11).returns(22);
  check(double).whenCalledWith(129).returns(258);
  check(double).whenCalledWith(25).returns(50);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
