const { check, runTest, skipTest } = require("../../../test-api");

// declare validMobileNumber here
function validMobileNumber() {

  
}

console.log("validMobileNumber");
runTest("returns false when passed a string of the wrong length", () => {
  check(validMobileNumber).whenCalledWith("123").returns(false);
  check(validMobileNumber).whenCalledWith("0750617250638").returns(false);
  check(validMobileNumber).whenCalledWith("+447712368768724988").returns(false);
});
runTest("returns true when passed a valid plain phone num string", () => {
  check(validMobileNumber).whenCalledWith("07506172506").returns(true);
});
runTest("returns true when passed a valid string with a + prefix", () => {
  check(validMobileNumber).whenCalledWith("+447506172506").returns(true);
});
runTest("returns true when passed a valid international phone num", () => {
  check(validMobileNumber).whenCalledWith("00447506172506").returns(true);
});
runTest("returns false when passed a string with invalid chars", () => {
  check(validMobileNumber).whenCalledWith("07506189foo").returns(false);
});
runTest("returns true when passed random other valid phone numbers", () => {
  check(validMobileNumber).whenCalledWith("00447555123456").returns(true);
  check(validMobileNumber).whenCalledWith("+447676111222").returns(true);
  check(validMobileNumber).whenCalledWith("07898888643").returns(true);
  check(validMobileNumber).whenCalledWith("07766555432").returns(true);
  check(validMobileNumber).whenCalledWith("07989765490").returns(true);
});
runTest("returns false when passed random other invalid phone numbers", () => {
  check(validMobileNumber).whenCalledWith("004475551&&&23456").returns(false);
  check(validMobileNumber).whenCalledWith("-447676111222").returns(false);
  check(validMobileNumber).whenCalledWith("09898888643").returns(false);
  check(validMobileNumber).whenCalledWith("+449166555432").returns(false);
  check(validMobileNumber).whenCalledWith("00448989765493").returns(false);
  check(validMobileNumber).whenCalledWith("cats").returns(false);
});
