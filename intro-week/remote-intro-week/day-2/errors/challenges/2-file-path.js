const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const filePath = "/Users/mitch/northcoders/remote_precourse/day_1/1_intro_strings";

// Use .indexOf() to find the index position of the last / forward slash in the filePath string
let lastFowardSlashIndex = filePath.indexOf(filePath[filePath.length-1]);

// Use .slice() to access the directory at the end of filePath
let currentDirectory = filePath.split('/').splice(-1).join('');

console.log("currentDirectory is initialised with the name of the directory and the end of the filePath");
try {
  check(currentDirectory).isEqualTo("1_intro_strings");
  printGreenMessage("Success :)");
} catch (e) {
  printRedMessage(e);
}

// Don't change anything below this line :)
var EXPRESSION_HERE;
