const { check, runTest, skipTest } = require("../../../test-api");

console.log("findWrongWayFruit");

runTest("returns 0 when passed an array length smaller than 3", () => {
  check(findWrongWayFruit).whenCalledWith(["apple"]).returns(0);
  check(findWrongWayFruit).whenCalledWith(["elppa", "apple"]).returns(0);
});
runTest("returns the correct index when the wrong-way fruit is in the middle of the array", () => {
  check(findWrongWayFruit).whenCalledWith(["apple", "apple", "apple", "apple", "elppa", "apple"]).returns(4);
});
runTest("returns the correct index when the wrong-way fruit is at start", () => {
  check(findWrongWayFruit).whenCalledWith(["elppa", "apple", "apple", "apple", "apple", "apple"]).returns(0);
});
runTest("returns the correct index when the wrong-way fruit is at the end", () => {
  check(findWrongWayFruit).whenCalledWith(["apple", "apple", "apple", "apple", "apple", "elppa"]).returns(5);
});
runTest("returns the correct index when the wrong-way fruit is at any other random position", () => {
  check(findWrongWayFruit).whenCalledWith(["orange", "orange", "orange", "orange", "orange", "egnaro"]).returns(5);
  check(findWrongWayFruit).whenCalledWith(["banana", "ananab", "banana", "banana", "banana", "banana"]).returns(1);
  check(findWrongWayFruit).whenCalledWith(["eparg", "grape", "grape", "grape", "grape", "grape"]).returns(0);
  check(findWrongWayFruit).whenCalledWith(["tomato", "tomato", "tomato", "tomato", "otamot", "tomato"]).returns(4);
  check(findWrongWayFruit)
    .whenCalledWith(["cucumber", "cucumber", "rebmucuc", "cucumber", "cucumber", "cucumber"])
    .returns(2);
});
