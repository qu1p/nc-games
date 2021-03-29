const { check, runTest, skipTest } = require("../../../test-api");

console.log("pairDNA");

runTest('returns [] when passed ""', () => {
  check(pairDNA).whenCalledWith("").returns([]);
});
runTest("returns a single pair in an array when passed one", () => {
  check(pairDNA).whenCalledWith("G").returns(["GC"]);
});
runTest("returns multiple pairs when passed multiple chars", () => {
  check(pairDNA).whenCalledWith("GGC").returns(["GC", "GC", "CG"]);
});
runTest("returns correctly when passed lowercase letters", () => {
  check(pairDNA).whenCalledWith("gat").returns(["GC", "AT", "TA"]);
});
runTest("ignores invalid chars but still returns valid ones within the string", () => {
  check(pairDNA).whenCalledWith("PGYYYHVB").returns(["GC"]);
});
