// Dependencies
var LimitIt = require("../lib");

// Create the limiter
var l = new LimitIt(10)
  , c = 1
  ;

// Add 20 functions, running them in parallel but not more than 10 same time
new Array(30).join("1").split("").forEach(function (_, i) {
    l.add(function (count, callback) {
        var random = Math.random() * 1000;
        setTimeout(function() {
            callback(random, i);
        }, random);
    }, [i], function (rand, i) {
        console.log("> %s: Function %s done. Random number is: %s", ++c, i, rand);
    });
});
