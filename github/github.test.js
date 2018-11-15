
const test = require("tape");
const gitHub = require("./github.js");


// test("Example test", function(t) {
//     t.pass();
//     t.end();
// });

// test('fetchingFunction() should return an object', function(t) {
//     const result = fetchingFunction();
//     const expected = {};
//     t.deepEqual(result, expected);
//     t.end();
//   });


test('getUserName() should return a user name', function(t) {
    const result = gitHub();
    const expected = "name";
    t.deepEqual(result, expected);
    t.end();
  });