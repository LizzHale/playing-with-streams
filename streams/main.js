var Even = require('./even.js');
var even = new Even();
var Numbers = require('./numbers.js');
var number = new Numbers();

number.pipe(even);

even.on('finish', function() {
    console.log(Even.result);
})

//even.on('data', function(chunk) {
//    console.log(chunk.toString());
//});

// Numbers:
//var Numbers = require('./numbers.js');
//var num = new Numbers();
//
//num.on('data', function(chunk) {
//    console.log(chunk.toString());
//});

// Cache:

//var Alphabet = require('./alphabet.js');
//var Cache = require('./cache.js');
//var alpha = new Alphabet();
//var cache = new Cache({ key: 'alpha1' });
//
//alpha.pipe(cache);
//
//cache.on('finish', function() {
//    console.log('cache store: ', Cache.store)
//});

// Alphabet:

//var Alphabet = require('./alphabet');
//var alpha = new Alphabet();
//alpha.on('data', function(chunk) {
//    console.log(chunk.toString());
//});


