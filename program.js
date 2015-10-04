var fs = require('fs');
var concat = require('concat-stream');

var stream = concat(write);

// The write function is called for every buffer of available input
function write(data) {
    process.stdout.write(data.toString().split('').reverse().join(''));

};

// We cannot pipe the results of the concat stream to stdout because concat is asynchronous
// Instead we write to standard out inside the concat callback function
process.stdin.pipe(stream);

