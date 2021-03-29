const { check, runTest } = require("../../../test-api");

const items = [];

// your loop here ...

runTest("check the even numbers 0 to 14 are pushed into items", function () {
  check(items).isEqualTo([0, 2, 4, 6, 8, 10, 12, 14]);
});
