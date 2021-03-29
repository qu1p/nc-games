const { check, runTest, skipTest } = require("../../../test-api");

function flipBooleans() {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
}

console.log("flipBooleans()");
runTest("returns an empty array when passed []", function () {
  check(flipBooleans([])).isEqualTo([]);
});

skipTest("inverts all booleans in the array", function () {
  check(flipBooleans([true, true, true])).isEqualTo([false, false, false]);
  check(flipBooleans([false, true, true])).isEqualTo([true, false, false]);
  check(flipBooleans([false, false, false])).isEqualTo([true, true, true]);
});

//// next challenge - findFirstDentist ////

function findFirstDentist() {
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
}

console.log("\n");
console.log("findFirstDentist()");

skipTest("returns null if no dentist is in the array", function () {
  check(findFirstDentist([])).isEqualTo(null);
});

skipTest("returns a person object who is a dentist", function () {
  const dentists = [{ name: "Orin Scrivello", isDentist: true }];

  check(findFirstDentist(dentists).isDentist).isEqualTo(true);
  check(findFirstDentist(dentists).name).isEqualTo("Orin Scrivello");
});

skipTest("returns the first dentist from the array", function () {
  const dentists = [
    { name: "Johnny Karate", isDentist: false },
    { name: "Lucy Hobbs Taylor", isDentist: true },
    { name: "Pierre Fauchard", isDentist: true },
    { name: "Bert Macklin", isDentist: false },
    { name: "Orin Scrivello", isDentist: true },
    { name: "Kip Hackman", isDentist: false },
  ];
  check(findFirstDentist(dentists)).isEqualTo({
    name: "Lucy Hobbs Taylor",
    isDentist: true,
  });
});

function tallyPeopleInManchester() {
  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]
    The function should return the number of people who live in the city of Manchester
  */
}
console.log("\n");
console.log("tallyPeopleInManchester()");

skipTest("returns 0 when nobody is from Manchester", function () {
  check(
    tallyPeopleInManchester([
      {
        name: "Maria",
        lives: { country: "Italy", city: "Valencia" },
        age: 32,
      },
      {
        name: "Sandrella",
        lives: { country: "Spain", city: "Bilbao" },
        age: 32.5,
      },
    ])
  ).isEqualTo(0);
});

skipTest("returns the length of the array when everyone is from Manchester", function () {
  check(
    tallyPeopleInManchester([
      {
        name: "Alexis",
        lives: { country: "England", city: "Manchester" },
        age: 32.5,
      },
      {
        name: "Raheem",
        lives: { country: "England", city: "Manchester" },
        age: 35.55,
      },
    ])
  ).isEqualTo(2);
});

skipTest(
  "returns the number of people who are actually from the proud, yet fairly miserable, city of Manchester",
  function () {
    check(
      tallyPeopleInManchester([
        {
          name: "Melissandra",
          lives: { country: "Spain", city: "Valencia" },
          age: 55.5,
        },
        {
          name: "Melissandrella",
          lives: { country: "Spain", city: "Valencia" },
          age: 55.555,
        },
        {
          name: "Emmeline",
          lives: { country: "England", city: "Manchester" },
          age: 25,
        },
      ])
    ).isEqualTo(1);

    check(
      tallyPeopleInManchester([
        {
          name: "Frank",
          lives: { country: "England", city: "Manchester" },
          age: 15.2,
        },
        {
          name: "Bob",
          lives: { country: "Wales", city: "Abertillery" },
          age: 555555555555.555,
        },
        {
          name: "Terry",
          lives: { country: "England", city: "Newport Pagnell" },
          age: 0.00000002,
        },
      ])
    ).isEqualTo(1);
  }
);

function getPugOwners() {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */
}
console.log("\n");
console.log("getPugOwners()");

skipTest("returns [] when passed []", function () {
  check(getPugOwners([])).isEqualTo([]);
});

skipTest("returns an array of pug names when passed an array of dog objects", function () {
  const dogs = [
    { name: "Beatrice", breed: "Lurcher", owner: "Tom" },
    { name: "Max", breed: "Pug", owner: "Izzi" },
    { name: "Poppy", breed: "Pug", owner: "Anat" },
  ];
  check(getPugOwners(dogs)).isEqualTo(["Izzi", "Anat"]);

  const dogs2 = [
    { name: "Steven", breed: "Lurcher", owner: "Mitch" },
    { name: "Daphne", breed: "Pug", owner: "Paul" },
    { name: "Sandy", breed: "Labrador", owner: "Paul" },
    { name: "Mike", breed: "Pug", owner: "Shaq" },
    { name: "Spike", breed: "Pug", owner: "Alex" },
  ];
  check(getPugOwners(dogs2)).isEqualTo(["Paul", "Shaq", "Alex"]);

  const dogs3 = [
    { name: "Kevin", breed: "Labrador", owner: "Sam" },
    { name: "Patch", breed: "Rottweiler", owner: "Ant" },
    { name: "Miles", breed: "Lurcher", owner: "Nicki" },
    { name: "Sandy", breed: "Pug", owner: "Vel" },
    { name: "Spot", breed: "Pug", owner: "Haz" },
    { name: "Josephine", breed: "Terrier", owner: "Jonny" },
    { name: "Eric", breed: "Pug", owner: "David" },
  ];
  check(getPugOwners(dogs3)).isEqualTo(["Vel", "Haz", "David"]);
});

function pluraliseKeys() {
  /*
    In this function you will be provided with an object. That object is storing information on keys.
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };
    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals.
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)

    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */
}
console.log("\n");
console.log("pluraliseKeys()");
skipTest("returns a new object", function () {
  const input = {
    name: "Sam's Pet Shop",
    tagLine: "From Aardvarks to Zebras!",
    pet: [
      { name: "mitch", species: "hamster", price: "£9.99" },
      { name: "jonny", species: "canary", price: "£24.99" },
    ],
  };
  const actual = pluraliseKeys(input);

  check(typeof actual).isEqualTo("object");
});

skipTest(
  "returns an object with identical keys to the input when the input's keys do not need pluralising",
  function () {
    const input = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };
    const actual = pluraliseKeys(input);
    const expected = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };

    check(actual).isEqualTo(expected);
  }
);

skipTest("returns an object with with its keys pluralised", function () {
  let input = {
    name: "Paul's Donkey University",
    tagLine: "Too Mule For School",
    student: ["Suneet", "Ant", "Haz"],
  };
  let actual = pluraliseKeys(input);
  let expected = {
    name: "Paul's Donkey University",
    tagLine: "Too Mule For School",
    students: ["Suneet", "Ant", "Haz"],
  };
  check(actual).isEqualTo(expected);

  input = {
    name: "Tom",
    job: ["writing katas", "marking"],
    favouriteShop: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
  };
  actual = pluraliseKeys(input);
  expected = {
    name: "Tom",
    jobs: ["writing katas", "marking"],
    favouriteShops: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
  };
  check(actual).isEqualTo(expected);
});

console.log("\n");

function getWordLengths() {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
}

console.log("getWordLengths()");

skipTest("returns [] when passed an empty string", function () {
  check(getWordLengths("")).isEqualTo([]);
});

skipTest("returns an array containing the length of a single word", function () {
  check(getWordLengths("woooo")).isEqualTo([5]);
});

skipTest("returns the lengths when passed multiple words", function () {
  check(getWordLengths("hello world")).isEqualTo([5, 5]);
});

skipTest("returns lengths for longer sentences", function () {
  check(getWordLengths("like a bridge over troubled water")).isEqualTo([4, 1, 6, 4, 8, 5]);
});

function getPalindromes() {
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */
}
console.log("\n");
console.log("getPalindromes()");

skipTest("returns [] when passed []", function () {
  check(getPalindromes([])).isEqualTo([]);
});

skipTest("identifies palindromes", function () {
  check(getPalindromes(["racecar"])).isEqualTo(["racecar"]);
  check(getPalindromes(["racecar", "racecar"])).isEqualTo(["racecar", "racecar"]);
});

skipTest("ignores non-palindromes", function () {
  check(getPalindromes(["racecar", "kayak", "tacocat"])).isEqualTo(["racecar", "kayak", "tacocat"]);
  check(getPalindromes(["pineapple", "pony", "racecar"])).isEqualTo(["racecar"]);
});

skipTest("returns [] when passed no palindromes", function () {
  check(getPalindromes(["pineapple", "watermelon", "pony"])).isEqualTo([]);
});

function tallyLetters() {
  /*
    This function takes a string and returns an object tallying the occurrences of each letter in the string
  */
}
console.log("\n");
console.log("tallyLetters()");

skipTest("returns {} when passed empty string", function () {
  check(tallyLetters("")).isEqualTo({});
});

skipTest("can tally a single character string", function () {
  check(tallyLetters("a")).isEqualTo({ a: 1 });
  check(tallyLetters("c")).isEqualTo({ c: 1 });
  check(tallyLetters("z")).isEqualTo({ z: 1 });
});

skipTest("can tally a duplicated character string", function () {
  check(tallyLetters("aaa")).isEqualTo({ a: 3 });
  check(tallyLetters("cc")).isEqualTo({ c: 2 });
  check(tallyLetters("zzzzzz")).isEqualTo({ z: 6 });
});

skipTest("can tally a multiple distinct character string", function () {
  check(tallyLetters("abc")).isEqualTo({ a: 1, b: 1, c: 1 });
  check(tallyLetters("acc")).isEqualTo({ a: 1, c: 2 });
  check(tallyLetters("zzzzzzdde")).isEqualTo({ z: 6, d: 2, e: 1 });
});
