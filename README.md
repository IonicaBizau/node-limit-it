<img src="http://i.imgur.com/AhRjvi5.png" width="300">

# Limit-it
Run in parallel how many functions you want, but not more than *<x>* functions at the time.

## Installation
Run the following commands to download and install the application:

```sh
$ npm install limit-it
```

## Example

```js
// Dependencies
var LimitIt = require("limit-it");

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
```

## Documentation
### `LimitIt(limit)`
Creates a new instance of `LimitIt`.

#### Params
- **Number** `limit`: The limit value representing the number of functions that are run in parallel at a moment of time.

#### Return
- **LimitIt** The `LimitIt` instance.

### `add(func, args, callback)`
Adds a new function in the buffer.

#### Params
- **Function** `func`: The function to be run.
- **Array** `args`: The arguments passed to the function.
- **Function** `callback`: The callback function.

#### Return
- **LimitIt** The `LimitIt` instance.

### `exceeded()`
Checks if the limit was exceeded.

#### Return
- **Boolean** `true` if the limit was exceeded, otherwise `false`.

### `check()`
Checks and runs the functions from the buffer.

#### Return
- **LimitIt** The `LimitIt` instance.

### `run(c)`
Runs the function from the buffer element.

#### Params
- **BuffElm** `c`: The buffer element to run.

#### Return
- **LimitIt** The `LimitIt` instance.


## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
