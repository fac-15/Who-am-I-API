const test = require('tape');
const github = require( './github.js');


test('should return an object', function(){
    const result = fetchingFunction();
    const expected = typeof null === 'object';
    t.deepEqual(result, expected);
    t.end();
})