const { check, runTest, skipTest } = require("../../../test-api");

// declare sumDigitsFromString here...

console.log("sumDigitsFromString");

runTest("picks out a digit from a string and returns", () => {
  check(sumDigitsFromString).whenCalledWith("foo5foo").returns(5);
});
runTest("sums multiple digits from a string", () => {
  check(sumDigitsFromString).whenCalledWith("5foo5foo").returns(10);
});
runTest("returns a sum of several digits in a string", () => {
  check(sumDigitsFromString).whenCalledWith("hello1world5this3is2a2string").returns(13);
});
runTest("treats consecutive digits as individual numbers", () => {
  check(sumDigitsFromString).whenCalledWith("he110world").returns(2);
});
