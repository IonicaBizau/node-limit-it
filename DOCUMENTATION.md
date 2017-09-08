## Documentation

You can see below the API reference of this module.

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

