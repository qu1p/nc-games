const { check, printGreenMessage, printRedMessage, runTest, skipTest } = require("../../../test-api");
function makeAllUpperCase(arr) {
  let upper = arr.map(function (str) {
    return str.toUpperCase()
    
  });
  return upper;
}



runTest("makeAllUpperCase() can get all the strings from an array", () => {
  check(makeAllUpperCase).whenCalledWith(["a", "b", "c"]).returns(["A", "B", "C"]);
  check(makeAllUpperCase).whenCalledWith(["I", "love", "coding"]).returns(["I", "LOVE", "CODING"]);
});

function collectStrings(arr) {
  let arrOfStr arr.map(function (item) {
    if (typeof item === "string") {
      return item
    }
  })
  return arrOfStr
}

skipTest("collectStrings() can get all the strings from an array", () => {
  check(collectStrings).whenCalledWith(["a", "b", "c"]).returns(["a", "b", "c"]);
  check(collectStrings).whenCalledWith(["a", 10, "b", 1000, "c"]).returns(["a", "b", "c"]);
});

skipTest("getEvenNumbers() can get all the even numbers from an array of numbers", () => {
  check(getEvenNumbers).whenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).returns([2, 4, 6, 8, 10]);
  check(getEvenNumbers).whenCalledWith([9, 100, 13, 20]).returns([100, 20]);
});

skipTest("collectPlurals() can collect all the strings ending in an s", () => {
  check(collectPlurals)
    .whenCalledWith(["dogs", "cat", "apples", "kittens", "kiwi"])
    .returns(["dogs", "apples", "kittens"]);

  check(collectPlurals)
    .whenCalledWith(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])
    .returns(["abcs", "humans", "thoughts", "cups"]);
});

skipTest("createArray() creates an array of the specified length using a specified character", () => {
  check(createArray).whenCalledWith(3, "!").returns(["!", "!", "!"]);
  check(createArray).whenCalledWith(5, "a").returns(["a", "a", "a", "a", "a"]);
});

skipTest("deleteManyPasswords() deletes the password property for each user", () => {
  check(deleteManyPasswords)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);
});

skipTest("countTheObjects() counts all the objects in an array of multi-type items", () => {
  check(countTheObjects)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns(3);
  check(countTheObjects).whenCalledWith([{}, {}, {}, {}, {}]).returns(5);
  check(countTheObjects).whenCalledWith([1, {}, true, {}, {}, false, {}, {}]).returns(5);
  check(countTheObjects)
    .whenCalledWith([1, { cat: "Schnitzel" }, true, {}, {}, false, 42, {}, {}])
    .returns(5);
});

skipTest("getEmptyTills() gets all the tills that are empty", () => {
  const tills = [
    {
      name: "John",
      checkout: ["bread", "eggs", "milk", "sauagaes"],
    },
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "Anat",
      checkout: ["chocolate"],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ];
  check(getEmptyTills(tills)).isEqualTo([
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ]);
});
