const { check, runTest, skipTest } = require("../../../test-api");

console.log("largestNumber");

runTest("if passed a single-digit number then returns that number", () => {
  check(largestNumber).whenCalledWith(9).returns(9);
  check(largestNumber).whenCalledWith(0).returns(0);
  check(largestNumber).whenCalledWith(1).returns(1);
});
runTest("if passed a 2-digit number then does nothing if they are in descending order", () => {
  check(largestNumber).whenCalledWith(43).returns(43);
  check(largestNumber).whenCalledWith(81).returns(81);
  check(largestNumber).whenCalledWith(21).returns(21);
  check(largestNumber).whenCalledWith(20).returns(20);
});
runTest("if passed a 2-digit number then swaps the numbers if they are are in ascending order", () => {
  check(largestNumber).whenCalledWith(19).returns(91);
  check(largestNumber).whenCalledWith(23).returns(32);
  check(largestNumber).whenCalledWith(35).returns(53);
});
runTest("if passed a 3-digit number then returns the correctly ordered number", () => {
  check(largestNumber).whenCalledWith(473).returns(743);
  check(largestNumber).whenCalledWith(850).returns(850);
  check(largestNumber).whenCalledWith(801).returns(810);
  check(largestNumber).whenCalledWith(100).returns(100);
  check(largestNumber).whenCalledWith(219).returns(921);
  check(largestNumber).whenCalledWith(581).returns(851);
});
runTest("returns correctly ordered number for large numbers including those with many trailiing zeros", () => {
  check(largestNumber).whenCalledWith(12345).returns(54321);
  check(largestNumber).whenCalledWith(12345000).returns(54321000);
  check(largestNumber).whenCalledWith(1010100).returns(1110000);
  check(largestNumber).whenCalledWith(89382291).returns(99883221);
  check(largestNumber).whenCalledWith(8001009100).returns(9811000000);
});
