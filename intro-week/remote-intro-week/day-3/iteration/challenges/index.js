const { check, runTest, skipTest } = require("../../../test-api");

runTest("makeAllUpperCase() can convert all strings to upper case", function () {
  check(makeAllUpperCase).whenCalledWith(["a", "b", "c"]).returns(["A", "B", "C"]);
  check(makeAllUpperCase).whenCalledWith(["I", "love", "coding"]).returns(["I", "LOVE", "CODING"]);
});

skipTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings).whenCalledWith(["a", "b", "c"]).returns(["a", "b", "c"]);
  check(collectStrings).whenCalledWith(["a", 10, "b", 1000, "c"]).returns(["a", "b", "c"]);
});

skipTest("getEvenNumbers() can get all the even numbers from an array of numbers", function () {
  check(getEvenNumbers).whenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).returns([2, 4, 6, 8, 10]);
  check(getEvenNumbers).whenCalledWith([9, 100, 13, 20]).returns([100, 20]);
  check(getEvenNumbers).whenCalledWith([78, 5, 9, 11, 24]).returns([78, 24]);
});

skipTest("collectPlurals() can collect all the strings ending in an s", function () {
  check(collectPlurals)
    .whenCalledWith(["dogs", "cat", "apples", "kittens", "kiwi"])
    .returns(["dogs", "apples", "kittens"]);

  check(collectPlurals)
    .whenCalledWith(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])
    .returns(["abcs", "humans", "thoughts", "cups"]);
});

// creates an array of the given length populated with the given char

skipTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray).whenCalledWith(3, "!").returns(["!", "!", "!"]);
  check(createArray).whenCalledWith(5, "a").returns(["a", "a", "a", "a", "a"]);
});

skipTest("deleteManyPasswords() deletes the password property for each user", function () {
  check(deleteManyPasswords)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);
});

skipTest(
  "collectTheVowels() takes a string of many letters and returns a string containing those vowels in correct order",
  function () {
    check(collectTheVowels).whenCalledWith("a").returns("a");
    check(collectTheVowels).whenCalledWith("bcd").returns("");
    check(collectTheVowels).whenCalledWith("bcdepiaouk").returns("eiaou");
    check(collectTheVowels).whenCalledWith("hello world").returns("eoo");
  }
);

skipTest(
  "containsNoRepeats() takes a string and returns true if each character only appears once in the string",
  function () {
    check(containsNoRepeats).whenCalledWith("dog").returns(true);
    check(containsNoRepeats).whenCalledWith("oo").returns(false);
    check(containsNoRepeats).whenCalledWith("dooog").returns(false);
    check(containsNoRepeats).whenCalledWith("iHaveRepeats").returns(false);
    check(containsNoRepeats).whenCalledWith("anat").returns(false);
    check(containsNoRepeats).whenCalledWith("cat").returns(true);
    check(containsNoRepeats).whenCalledWith("abcde").returns(true);
    check(containsNoRepeats).whenCalledWith("abcdea").returns(false);
  }
);
