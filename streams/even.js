var stream = require('stream');
var Writable = stream.Writable;
var util = require('util');
util.inherits(Even, Writable);

function Even(options) {
    Writable.call(this, options);
};

Even.result = '';

Even.prototype._write = function(chunk, encoding, callback) {
    if(chunk % 2 == 0) {
        Even.result = Even.result + ' ' + chunk.toString();
    }
    callback();
};

module.exports = Even;