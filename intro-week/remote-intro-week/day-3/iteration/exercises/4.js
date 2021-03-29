const { check, runTest, skipTest } = require("../../../test-api");

const sounds = ["fizz", "buzz", "bang", "crash", "wallop"];
const exclaimedSounds = [];

// your loop here...

runTest("check strings with added ! are pushed into exclaimedSounds", function () {
  check(exclaimedSounds).isEqualTo(["fizz!", "buzz!", "bang!", "crash!", "wallop!"]);
});
