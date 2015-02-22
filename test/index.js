// Dependencies
var Limiter = require("../lib");

// Create the limiter
var l = new Limiter(10);

// Add 20 functions, running them in parallel but not more than 10 same time
new Array(20).join("1").split("").forEach(function (_, i) {
    l.add(function (callback) {
        var random = Math.random() * 1000;
        setTimeout(function() {
            callback(random);
        }, random);
    }, function (rand) {
        console.log("> Function %s done. Random number is: %s", i, rand);
    });
});
