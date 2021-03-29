function whenCalledWith(...args) {
  this.args = args;
  return this;
}

function isEqualTo(expected) {
  const { actual } = this;

  if (!checkDeeplyEqual(actual, expected))
    throw new Error(`${JSON.stringify(actual)}\n is not equal to the expected value of \n${JSON.stringify(expected)}`);
}

function returns(expected) {
  const actual = this.func(...this.args);
  if (!checkDeeplyEqual(actual, expected)) throw new Error(createFeedback(this.func.name, actual, expected));
}

function check(value) {
  const methods = { whenCalledWith, isEqualTo, returns };
  const obj = Object.create(methods);
  if (typeof value === "function") obj.func = value;
  else obj.actual = value;
  return obj;
}

function checkDeeplyEqual(coll1, coll2) {
  if (typeof coll1 !== "object" || typeof coll2 !== "object" || coll1 === null || coll2 === null)
    return coll1 === coll2;

  if (Object.keys(coll1).length !== Object.keys(coll2).length) return false;

  if (Array.isArray(coll1) !== Array.isArray(coll2)) return false;

  for (let key1 in coll1) {
    if (!(key1 in coll2)) return false;
    if (!checkDeeplyEqual(coll1[key1], coll2[key1])) return false;
  }
  return true;
}

function createFeedBackString(item) {
  const lookup = {
    string: (item) => `"${item}"`,
    object: (item) => JSON.stringify(item),
    undefined: (x) => x,
    boolean: (x) => x,
    number: (x) => x,
  };
  return lookup[typeof item](item);
}

function createFeedback(name, actual, expected) {
  const actualString = createFeedBackString(actual);
  const expectedString = createFeedBackString(expected);

  const feedback = `${name}'s output was ${actualString}, but it should be ${expectedString}`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}

function printYellowMessage(message) {
  console.log("\x1b[33m", message, "\x1b[0m");
}

function runTest(title, func) {
  try {
    func();
    printGreenMessage("Pass ✔" + " " + title);
  } catch (error) {
    console.log(title);
    printRedMessage(error);
  }
}

function skipTest(title) {
  printYellowMessage(`skipping... ${title}`);
}

module.exports = { check, runTest, skipTest, printGreenMessage, printRedMessage };
