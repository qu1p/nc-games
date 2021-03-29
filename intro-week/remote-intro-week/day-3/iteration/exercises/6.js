const { check, runTest } = require("../../../test-api");

const alternatingChars = [];

// your loop here ...

runTest("can push alternating characters into an array", function () {
  check(alternatingChars).isEqualTo(["x", "o", "x", "o", "x", "o", "x", "o"]);
});
