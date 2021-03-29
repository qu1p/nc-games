const { check, runTest } = require("../../../test-api");

let total = 0;

// use iteration to get the total of all the numbers from 1 to 50

runTest("calculate the sum of several numbers using a loop", function () {
  check(total).isEqualTo(1275);
});
