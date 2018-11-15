const hptest = require('tape');

// functions to test

const converter = (name) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    let code = name.charCodeAt(i);
    sum += code;
  }
  let index = sum % 25;
  return index;
};

const tolowercase = (name) => {
  return name.toLowerCase();
};

// testing for a single letter

hptest('input "a" should return 22', (t) => {
  const actual = converter('a');
  const expected = 22;
  t.equals(actual, expected);
  t.end();
});

// testing for real usernames

hptest('input "lucyewright" should return 7', (t) => {
  const actual = converter('lucyewright');
  const expected = 7;
  t.equals(actual, expected);
  t.end();
});

hptest('input "susanx" should return 24', (t) => {
  const actual = converter('susanx');
  const expected = 24;
  t.equals(actual, expected);
  t.end();
});

hptest('input "tantsandras" should return 12', (t) => {
  const actual = converter('tantsandras');
  const expected = 12;
  t.equals(actual, expected);
  t.end();
});

hptest('input "wright1" should return 10', (t) => {
  const actual = converter('wright1');
  const expected = 10;
  t.equals(actual, expected);
  t.end();
});

// testing that names are converted to lowercase

hptest('input "SusanX" should "susanx"', (t) => {
  const actual = tolowercase('SusanX');
  const expected = 'susanx';
  t.equals(actual, expected);
  t.end();
});

// Testing for numbers should be handled in same way as letters.

hptest('input "4" should return 2', (t) => {
  const actual = converter('4');
  const expected = 2;
  t.equals(actual, expected);
  t.end();
});

hptest('input "3" should return 1', (t) => {
  const actual = converter('3');
  const expected = 1;
  t.equals(actual, expected);
  t.end();
});

hptest('input "2" should return 0', (t) => {
  const actual = converter('2');
  const expected = 0;
  t.equals(actual, expected);
  t.end();
});

hptest('input "1" should return 24', (t) => {
  const actual = converter('1');
  const expected = 24;
  t.equals(actual, expected);
  t.end();
});

hptest("input '5' should return 3", (t) => {
  const actual = converter('5');
  const expected = 3;
  t.equals(actual, expected);
  t.end();
});

hptest("input '6' should return 4", (t) => {
  const actual = converter('6');
  const expected = 4;
  t.equals(actual, expected);
  t.end();
});

hptest("input '7' should return 5", (t) => {
  const actual = converter('7');
  const expected = 5;
  t.equals(actual, expected);
  t.end();
});

hptest("input '8' should return 6", (t) => {
  const actual = converter('8');
  const expected = 6;
  t.equals(actual, expected);
  t.end();
});

hptest("input '9' should return 7", (t) => {
  const actual = converter('9');
  const expected = 7;
  t.equals(actual, expected);
  t.end();
});

hptest("input '10' should return 22", (t) => {
  const actual = converter('10');
  const expected = 22;
  t.equals(actual, expected);
  t.end();
});

hptest("input '11' should return 23", (t) => {
  const actual = converter('11');
  const expected = 23;
  t.equals(actual, expected);
  t.end();
});

hptest("input '12' should return 24", (t) => {
  const actual = converter('12');
  const expected = 24;
  t.equals(actual, expected);
  t.end();
});

hptest("input '13' should return 0", (t) => {
  const actual = converter('13');
  const expected = 0;
  t.equals(actual, expected);
  t.end();
});

hptest("input '14' should return 1", (t) => {
  const actual = converter('14');
  const expected = 1;
  t.equals(actual, expected);
  t.end();
});

// ascii char for '-' is 45 but through testing returned 20

hptest('input "-" should return 20', (t) => {
  const actual = converter('-');
  const expected = 20;
  t.equals(actual, expected);
  t.end();
});

// max edge case

hptest("input 39 z's should return 8", (t) => {
  const actual = converter('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
  const expected = 8;
  t.equals(actual, expected);
  t.end();
});

hptest("input 'c' should return 24", (t) => {
  const actual = converter('c');
  const expected = 24;
  t.equals(actual, expected);
  t.end();
});

hptest("input 'd' should return 0", (t) => {
  const actual = converter('d');
  const expected = 0;
  t.equals(actual, expected);
  t.end();
});

// hptest('should return a string', function(t) {
//   const result = hp.hpfunctions(dummyStr);
//   const expected = typeof dummyStr == 'string';
//   t.ok(result, expected);
//   t.end();
// });

// hptest('if string == ""', function(t) {
//   const result = hp.hpfunctions(emptyStr);
//   const expected = true;

//   t.ok(result, expected);
//   t.end();
// });

// hptest('if the url contains "https://api.github.com/users/" ', function(t) {
//   const result = hp.hpfunctions(dummyStr);
//   const expected = 'https://api.github.com/users/' + dummyStr;
//   t.equals(result, expected);
//   t.end();
// });
