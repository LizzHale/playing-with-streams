var fs = require('fs');
var through = require('through2');
var split = require('split');

var count = 1;

// write and end are both optional
// If write is not specified, the default implementation passes the input data to the ouput unmodified
// If end is not specified, the default implementation calls 'this.push(null)' to close the output side when the input side ends
var stream = through(write, end);

// The write function is called for every buffer of available input
function write (buffer, encoding, next) {
    if (count % 2) {
        this.push('\n' + buffer.toString().toLowerCase());
        count++;
        next();
    } else{
        this.push('\n' + buffer.toString().toUpperCase(0));
        count++;
        next();
    }
};

// This is the function called when there is no more data
function end (done) {
    done();
}

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout);

// pipes the contents of stdin to stdout
//process.stdin.pipe(stream).pipe(process.stdout);
