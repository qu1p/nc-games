const { check, runTest, skipTest } = require("../../../test-api");

console.log("getWilliams");

runTest("returns [] when passed []", () => {
  check(getWilliams).whenCalledWith([]).returns([]);
});
runTest("returns a Williams from a mixed array", () => {
  check(getWilliams).whenCalledWith(["Harry Williams", "Charlotte Bank"]).returns(["Harry Williams"]);
});
runTest("returns multiple Williams from a mixed array", () => {
  check(getWilliams)
    .whenCalledWith(["Harry Williams", "Charlotte Williams"])
    .returns(["Harry Williams", "Charlotte Williams"]);
});
runTest("ignores Williams found in first names", () => {
  check(getWilliams).whenCalledWith(["William Jones", "Harry Williams"]).returns(["Harry Williams"]);
});
runTest("ignores Williams found in extended last names", () => {
  check(getWilliams).whenCalledWith(["John Williams", "Chris Williamson"]).returns(["John Williams"]);
});
