var stream = require('stream');

// Alphabet stream outputs the letters from a-z.
function Alphabet(options) {
    // Inherits from strea.Readable
    stream.Readable.call(this, options);
    this._start = 'a';
    this._end = 'z';
    this._curr = this._start.charCodeAt(0);
};

Alphabet.prototype = Object.create(stream.Readable.prototype);
Alphabet.prototype.constructor = stream.Readable;

// This method is called whenever data is required from the Readable
Alphabet.prototype._read = function () {
    var letter = String.fromCharCode(this._curr);
    var buf = new Buffer(letter, 'utf8');
    this.push(buf);
    this._curr++;
    if (letter === this._end) {
        // This tells the buffer that the data has ended
        this.push(null);
    }
};

module.exports = Alphabet;