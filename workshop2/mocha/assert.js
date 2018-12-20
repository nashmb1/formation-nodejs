var assert = require('assert');

describe('Basic Mocha test', function(){
    it('shoul return number of characters in a string', function() {
        assert.equal('Hello'.length, 4);
    })
    it('shoul return first character of the string', function() {
        assert.equal('Hello'.charAt(0), 'H');
    })
})