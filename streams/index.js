var fs = require('fs');
var zlib = require('zlib');

// Four types of streams: Readable, Writable, Duplex, and Transform
// fs.createReadStream is a readable stream. It returns a fs.ReadStream object which inherits from Readable
// Writable is a writable stream
// Duplex is a stream that is both Readable and Writable
// Transform is a Duplex that modifies the output in some way. zlib.createGzip() is an example of Transform stream

// A stream for reading a file
var inFile = fs.createReadStream(process.argv[2]);

// A stream for writing to a file
var outFile = fs.createWriteStream(process.argv[3]);

// Read the requested file and then pipe the data from the file into the gzip stream
// The gzip stream takes in the data from the file and the uses a Transform stream to transform it into a gzip'ed version
// The output of the gzip stream is then piped into the response
inFile.pipe(zlib.createGzip()).pipe(outFile);
