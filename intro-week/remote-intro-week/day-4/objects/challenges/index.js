const { check, runTest, skipTest } = require("../../../test-api");

// accessObject() should take an object and a key and return the object's property value
function accessObject(object, key) {
  return object[key];
}

runTest("accessObject() can access a property value using a key", function () {
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "name").returns("jonny");
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(32);
});

// checkIfPropertyExists() should take an object and a key and return a boolean that indicates whether or not the object has the given keys
function checkIfPropertyExists(object, key) {
  if (key in object) {
    return true;
  } else {
    return false;
  }
}

runTest("checkIfPropertyExists() checks if a property exists inside an object", function () {
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "name").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "pets").returns(false);
});

// createObject() should take a key-value pair (stored in an array) and use it to create an object with a key and a value
function createObject([key, value]) {
  const item = {};
  item[key] = value;

  return item;
}

runTest("createObject() creates a new object from a key value pair", function () {
  check(createObject).whenCalledWith(["name", "shaq"]).returns({ name: "shaq" });
  check(createObject).whenCalledWith(["fruit", "apple"]).returns({ fruit: "apple" });
  check(createObject).whenCalledWith(["language", "haskell"]).returns({ language: "haskell" });
});

// countProperties() should take an object and count the number of properties it has
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    ++count;
  }
  return count;
}

runTest("countProperties() counts the number of key-value pairs for a given object", function () {
  check(countProperties).whenCalledWith({}).returns(0);
  check(countProperties).whenCalledWith({ name: "shaq" }).returns(1);
  check(countProperties).whenCalledWith({ name: "shaq", job: "tutor", city: "Manchester" }).returns(3);
});

// createArrow() will take a direction string: "left", "right", "up" and "down" and return a corresponding arrow
// Think of how you can use an object to solve this problem
function createArrow(dirString) {
  const dir = {
    left: "←",
    right: "→",
    up: "↑",
    down: "↓",
  };
  return dir[dirString];
}

runTest("createArrow() will return an arrow pointing in the right direction", function () {
  check(createArrow).whenCalledWith("right").returns("→");
  check(createArrow).whenCalledWith("left").returns("←");
  check(createArrow).whenCalledWith("up").returns("↑");
  check(createArrow).whenCalledWith("down").returns("↓");
});

// Uh-Oh! We've got some silly voters who've registered their addresses incorrectly.
//   Lets help them fix those typos by changing their houseNumber to the correctHouseNumber.
//   The user object looks like this:
//    {
//      name: "Alex",
//      age: 39,
//      address: {
//        houseNumber: 2,
//        street: "Old St",
//        city: "Chester"
//      }
//    };
//    Note - The function does NOT need to return anything.
function updateVoterAddress(voter, houseNum) {
  voter.address.houseNumber = houseNum;
}

runTest("updateVoterAddress() updates the voter's houseNumber", function () {
  const voter = {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester",
    },
  };

  updateVoterAddress(voter, 10);

  check(voter).isEqualTo({
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 10,
      street: "Old St",
      city: "Chester",
    },
  });
});

// createUserString() should take as an argument an object with the format from createNorthcoder
// returns a string with the user's details in the form:
// "name: Mitch, age: 27, language: Javascript";

// Note - this is a good use case of template literals:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function createUserString(input) {
  return `name: ${input.name}, age: ${input.age}, language: ${input.language}`
}

runTest("createUserString() will create a message from an details object", function () {
  check(createUserString)
    .whenCalledWith({ name: "Mitch", age: 30, language: "Javascript" })
    .returns("name: Mitch, age: 30, language: Javascript");

  check(createUserString)
    .whenCalledWith({ name: "Anat", age: 24, language: "Ruby" })
    .returns("name: Anat, age: 24, language: Ruby");
});

// updateCoinMachine() should take a coinMachine object with the following form:
//  {
//    '1p': 0,
//    '2p': 0,
//    '5p': 0,
//    '10p: 0
//  }
// and should update the coinMachine to reflect any change that is added into the machine
function updateCoinMachine(addition) {
  console.log(addition)
  coin {
    
  }

}
runTest("updateCoinMachine() will create a message from an details object", function () {
  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "1p")
    .returns({ "1p": 1, "2p": 0, "5p": 0, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "2p")
    .returns({ "1p": 0, "2p": 1, "5p": 0, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 3, "5p": 0, "10p": 0 }, "2p")
    .returns({ "1p": 0, "2p": 4, "5p": 0, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "5p")
    .returns({ "1p": 0, "2p": 3, "5p": 11, "10p": 0 });

  check(updateCoinMachine)
    .whenCalledWith({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "10p")
    .returns({ "1p": 0, "2p": 3, "5p": 10, "10p": 1 }, "5p");
});
