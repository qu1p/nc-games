const { check, runTest, skipTest } = require("../../../test-api");

console.log("getFactorials");

runTest("returns [] when passed []", () => {
  check(getFactorials).whenCalledWith([]).returns([]);
});
runTest("returns one factorial", () => {
  check(getFactorials).whenCalledWith([3]).returns([6]);
});
runTest("returns multiple factorials", () => {
  check(getFactorials).whenCalledWith([3, 4, 5]).returns([6, 24, 120]);
});
runTest("returns largest factorials", () => {
  check(getFactorials).whenCalledWith([3, 8, 9, 10]).returns([6, 40320, 362880, 3628800]);
});
