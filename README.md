<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


[![limit-it](http://i.imgur.com/4UoX6DL.png)](#)

# limit-it

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/node-limit-it.svg)](https://travis-ci.org/IonicaBizau/node-limit-it/) [![Version](https://img.shields.io/npm/v/limit-it.svg)](https://www.npmjs.com/package/limit-it) [![Downloads](https://img.shields.io/npm/dt/limit-it.svg)](https://www.npmjs.com/package/limit-it)

> Run in parallel as many functions you want, but not more than <x> functions at the time.

## :cloud: Installation

```sh
$ npm i --save limit-it
```


## :clipboard: Example



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



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`exec-limiter`](https://github.com/IonicaBizau/exec-limiter)—Limit the shell execution commands to <x> calls same time.
 - [`same-time-limit`](https://github.com/IonicaBizau/same-time-limit#readme)—Run tasks in parallel with a limit.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
