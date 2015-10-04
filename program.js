var fs = require('fs');

// pipes the contents of the first argument to this programs to stdout
fs.createReadStream(process.argv[2]).pipe(process.stdout);