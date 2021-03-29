const { check, runTest, skipTest } = require("../../../test-api");

console.log("tallyHashtagsAndMentions");

runTest("returns an object", () => {
  check(typeof tallyHashtagsAndMentions()).isEqualTo("object");
});
runTest("returns {hashtags: 0, mentions: 0} if it finds none", () => {
  check(tallyHashtagsAndMentions)
    .whenCalledWith("hello this is a tweet guaranteed to get very little engagement")
    .returns({
      hashtags: 0,
      mentions: 0,
    });
});
runTest("recognises no mentions", () => {
  check(tallyHashtagsAndMentions).whenCalledWith("#yolo").returns({
    hashtags: 1,
    mentions: 0,
  });
});
runTest("recognises no hashtags", () => {
  check(tallyHashtagsAndMentions).whenCalledWith("@yobo").returns({
    hashtags: 0,
    mentions: 1,
  });
});
runTest("finds multiple hashtags and mentions and returns that number", () => {
  check(tallyHashtagsAndMentions).whenCalledWith("#yolo @bolo #golo").returns({
    hashtags: 2,
    mentions: 1,
  });
  check(tallyHashtagsAndMentions).whenCalledWith("@boyo #goyo @loyo #zoyo").returns({
    hashtags: 2,
    mentions: 2,
  });
  check(tallyHashtagsAndMentions)
    .whenCalledWith('"So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"')
    .returns({ hashtags: 2, mentions: 1 });
});
