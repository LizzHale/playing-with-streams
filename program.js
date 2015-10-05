var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res) {
    if (req.method != 'POST') return res.end('send me a POST\n');

    var tr = through(function(chunk, encoding, next){
        this.push(chunk.toString().toUpperCase());
        next();
    });

    req.pipe(tr).pipe(res)
});

server.listen(process.argv[2]);

//var concat = require('concat-stream');
//
//var stream = concat(write);
//
//// The write function is called for every buffer of available input
//function write(data) {
//    process.stdout.write(data.toString().split('').reverse().join(''));
//
//};
//
//// We cannot pipe the results of the concat stream to stdout because concat is asynchronous
//// Instead we write to standard out inside the concat callback function
//process.stdin.pipe(stream);

