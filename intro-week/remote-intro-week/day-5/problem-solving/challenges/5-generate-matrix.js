const { check, runTest, skipTest } = require("../../../test-api");

console.log("generateMatrix");

runTest("returns [[null]] when passed 1", () => {
  check(generateMatrix)
    .whenCalledWith(1)
    .returns([[null]]);
});
runTest("returns a 2*2 matrix of null entries when passed 2", () => {
  check(generateMatrix)
    .whenCalledWith(2)
    .returns([
      [null, null],
      [null, null],
    ]);
});
runTest("returns a 3*3 matrix of null entries when passed 3", () => {
  check(generateMatrix)
    .whenCalledWith(3)
    .returns([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
});
