const test = require('tape');
const github = require( './github.js');

const dummyStr = "claire";
const emptyStr = "";
const dummyUrl = "https://api.github.com/users/";


test('should return a string', function(t){
    const result = github(dummyStr);
    const expected = typeof dummyStr == 'string';
    t.ok(result, expected);
    t.end();
})

test('if string == ""', function(t){
    
    const result = github(emptyStr);
    const expected = true;

    t.ok(result, expected);
    t.end();
})

test('if the url contains "https://api.github.com/users/" ', function(t){

    const result = github(dummyStr);
    const expected = 'https://api.github.com/users/'+ dummyStr;
    t.equals(result, expected);
    t.end();


})