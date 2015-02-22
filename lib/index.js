var Ul = require("ul");

const DEFAULT_LIMIT = 50;

function BuffElm(func, callback) {
    this._ = func;
    this.callback = callback;
}

// 0: initial state
// 1: running
// 2: done
BuffElm.prototype.state = 0;

function Limiter(options) {

    if (this.constructor !== Limiter) {
        return new Limiter(options);
    }

    options = options || DEFAULT_LIMIT;

    if (typeof options === "number") {
        options = { limit: options };
    }

    options = Ul.merge({
        limit: DEFAULT_LIMIT
    }, options);

    this.limit = options.limit;
    this.buffer = [];
}

Limiter.prototype.add = function (func, callback) {
    this.buffer.push(new BuffElm(func, callback));
    return this.check();
};

Limiter.prototype.check = function () {
    var self = this;

    self.buffer.forEach(function (c) {
        if (c.state !== 0) { return; }
        c.state = 1;
        c._.call(self, function () {
            c.state = 2;
            c.callback.apply(self, arguments);
        });
    });

    return self;
};

module.exports = Limiter;
