
const test = require("tape");
const gitHub = require("./github.js");

const dummyString = "name";
const emptyStr = "";
const dummyURL = "https://api.github.com/users/";


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


test('getUserName() should return a string', function(t) {
    const result = gitHub(dummyString);
    const expected = typeof dummyString == "string";
    t.ok(result, expected);
    t.end();
  });


test("if the string is empty", function(t) {
    const result = gitHub(emptyStr);
    const expected = true;
    t.ok(result, expected);
    t.end();
  });


  test("if the url contains https://api.github.com/users/ and name", function(t) {
    const result = gitHub(dummyURL);
    console.log(result);
    const expected = "https://api.github.com/users/" + dummyString;
    t.equals(result, expected);
    t.end();
  });

  