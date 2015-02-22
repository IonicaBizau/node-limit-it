// Constants
const DEFAULT_LIMIT = 50;

/**
 * BuffElm
 * Creates a `BuffElm` instance.
 *
 * @name BuffElm
 * @function
 * @param {Function} func The function to be called.
 * @param {Array} args The arguments passed to the function.
 * @param {Function} callback The callback function.
 * @return {BuffElm} The `BuffElm` instance.
 */
function BuffElm(func, args, callback) {
    this._ = func;
    this.callback = callback;
    this.args = args || [];
}

// 0: initial state
// 1: running
// 2: done
BuffElm.prototype.state = 0;

/**
 * Limiter
 * Creates a new instance of `Limiter`.
 *
 * @name Limiter
 * @function
 * @param {Number} limit The limit value representing the number of functions
 * that are run in parallel at a moment of time.
 * @return {Limiter} The `Limiter` instance.
 */
function Limiter(limit) {

    if (this.constructor !== Limiter) {
        return new Limiter(limit);
    }

    limit = limit || DEFAULT_LIMIT;

    this.limit = limit;
    this.buffer = [];
    this.running = 0;
}

/**
 * add
 * Adds a new function in the buffer.
 *
 * @name add
 * @function
 * @param {Function} func The function to be run.
 * @param {Function} callback The callback function.
 * @return {Limiter} The `Limiter` instance.
 */
Limiter.prototype.add = function (func, args, callback) {

    if (typeof args === "function") {
        callback = args;
        args = [];
    }

    this.buffer.push(new BuffElm(func, args, callback));
    return this.check();
};

/**
 * exceeded
 * Checks if the limit was exceeded.
 *
 * @name exceeded
 * @function
 * @return {Boolean} `true` if the limit was exceeded, otherwise `false`.
 */
Limiter.prototype.exceeded = function () {
    return this.running >= this.limit;
};

/**
 * check
 * Checks and runs the functions from the buffer.
 *
 * @name check
 * @function
 * @return {Limiter} The `Limiter` instance.
 */
Limiter.prototype.check = function () {

    var self = this
      , i = 0
      , c = null
      ;

    if (self.exceeded()) {
        return self;
    }

    for (; i < self.buffer.length; ++i) {
        c = self.buffer[i];
        if (c.state !== 0) { continue; }
        ++self.running;
        self.run(c);
        if (self.exceeded()) { break; }
    }

    return self;
};

/**
 * run
 * Runs the function from the buffer element.
 *
 * @name run
 * @function
 * @param {BuffElm} c The buffer element to run.
 * @return {Limiter} The `Limiter` instance.
 */
Limiter.prototype.run = function (c) {
    var self = this;
    if (c.state !== 0) debugger

    // Push the callback function
    c.args.push(function () {
        c.state = 2;
        --self.running;
        c.callback.apply(self, arguments);
        self.check();
    });

    c.state = 1;
    c._.apply(self, c.args);

    return self;
};

module.exports = Limiter;
