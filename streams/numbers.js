var stream = require('stream');
var Readable = stream.Readable;
var util = require('util');
util.inherits(Numbers, Readable);

function Numbers(options) {
    Readable.call(this, options);
    this._max = 100;
    this._index = 1;
};

Numbers.prototype._read = function() {
    var i = this._index++;
    if (i > this._max) {
        this.push(null);
    }
    else {
        var str = '' + i;
        var buf = new Buffer(str, 'ascii');
        this.push(str);
    }
};

module.exports = Numbers;