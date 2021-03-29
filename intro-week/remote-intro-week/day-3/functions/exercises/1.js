const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function getLength(string) {
  // return the length of the passed string
return string.length 

}


console.log("getLength() returns the correct string length");
try {
  check(getLength).whenCalledWith("jonny").returns(5);
  check(getLength).whenCalledWith("jd").returns(2);
  check(getLength).whenCalledWith("rosa").returns(4);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
