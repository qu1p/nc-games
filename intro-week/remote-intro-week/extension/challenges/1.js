const { check, runTest, skipTest } = require("../../test-api");

/*
convertToBinary()


Implement a function which takes any decimal number and converts it into binary format.
The return value of the function should always be a string of "O"s and "1"s representing the binary number

Do not use .toString(2) for this problem - as this is the functionality you're trying to replicate :)
*/

function convertToBinary() {}

runTest("can convert a single digit decimal number to binary", function () {
  check(convertToBinary).whenCalledWith(0).returns("0");
  check(convertToBinary).whenCalledWith(1).returns("1");
  check(convertToBinary).whenCalledWith(2).returns("10");
  check(convertToBinary).whenCalledWith(3).returns("11");
  check(convertToBinary).whenCalledWith(4).returns("100");
  check(convertToBinary).whenCalledWith(5).returns("101");
  check(convertToBinary).whenCalledWith(6).returns("110");
  check(convertToBinary).whenCalledWith(7).returns("111");
});

skipTest("can convert a multiple digit decimal number to binary", function () {
  check(convertToBinary).whenCalledWith(10).returns("1010");
  check(convertToBinary).whenCalledWith(23).returns("10111");
  check(convertToBinary).whenCalledWith(55).returns("110111");
});
