# random

> Seedable random number generator supporting many common distributions.

[![NPM](https://img.shields.io/npm/v/random-extra.svg)](https://www.npmjs.com/package/random-extra)

> this module fork from [transitive-bullshit/random](https://github.com/transitive-bullshit/random), with typescript support and some other change (include breaking change)

Welcome to the most **random** module on npm! 😜

## Highlights

-   Simple API (_make easy things easy and hard things possible_)
-   Seedable based on entropy or user input
-   Plugin support for different pseudo random number generators (PRNGs)
-   Sample from many common distributions
    -   uniform, normal, poisson, bernoulli, etc
-   Validates all user input via [ow](https://github.com/sindresorhus/ow)
-   Integrates with [seedrandom](https://github.com/davidbau/seedrandom)
-   Supports node >= 7 and browser

## Install

```bash
npm install --save random-extra
```

[benchmark](benchmark.md)

## Usage (new)

```ts
import random from 'random-extra';
import random = require('random-extra');
```

### `.use` vs `.newUse`

-   `.use` will change current random object
-   `.newUse` will create new random object

### preset

#### seedrandom

use [seedrandom](https://github.com/davidbau/seedrandom) for make seed-able

```ts
import seedrandom from 'random-extra/preset/seedrandom';
import { seedrandom } from 'random-extra/preset/seedrandom';
```

> when use seedrandom, srand will able use

```ts
seedrandom.rand() // use current seed
seedrandom.srand() // every time call srand will make new seed
seedrandom.rand() // use new seed
```

> other way make seedrandom

```ts
import random from 'random-extra';
const seedrandom = random.newUse('seedrandom')

import _seedrandom = require('seedrandom')

random.newUse(_seedrandom('hello.', { entropy: true }))

random.newUse(_seedrandom('hello.'))
```

## Usage (original)

```js
const random = require('random-extra')

// quick uniform shortcuts
random.float(min = 0, max = 1) // uniform float in [ min, max )
random.int(min = 0, max = 1) // uniform integer in [ min, max ]
random.boolean() // true or false

// uniform
random.uniform(min = 0, max = 1) // () => [ min, max )
random.uniformInt(min = 0, max = 1) // () => [ min, max ]
random.uniformBoolean() // () => [ false, true ]

// normal
random.normal(mu = 0, sigma = 1)
random.logNormal(mu = 0, sigma = 1)

// bernoulli
random.bernoulli(p = 0.5)
random.binomial(n = 1, p = 0.5)
random.geometric(p = 0.5)

// poisson
random.poisson(lambda = 1)
random.exponential(lambda = 1)

// misc
random.irwinHall(n)
random.bates(n)
random.pareto(alpha)
```

For convenience, several common uniform samplers are exposed directly:

```js
random.float()     // 0.2149383367670885
random.int(0, 100) // 72
random.boolean()   // true
```

**All distribution methods return a thunk** (function with no params), which will return
a series of independent, identically distributed random variables from the specified distribution.

```js
// create a normal distribution with default params (mu=1 and sigma=0)
const normal = random.normal()
normal() // 0.4855465422678824
normal() // -0.06696771815439678
normal() // 0.7350852689834705

// create a poisson distribution with default params (lambda=1)
const poisson = random.poisson()
poisson() // 0
poisson() // 4
poisson() // 1
```

Note that returning a thunk here is more efficient when generating multiple
samples from the same distribution.

You can change the underlying PRNG or its seed as follows:

```js
const seedrandom = require('seedrandom')

// change the underlying pseudo random number generator
// by default, Math.random is used as the underlying PRNG
random.use(seedrandom('foobar'))

// create a new independent random number generator
const rng = random.clone('my-new-seed')

// create a second independent random number generator and use a seeded PRNG
const rng2 = random.clone(seedrandom('kittyfoo'))

// replace Math.random with rng.uniform
rng.patch()

// restore original Math.random
rng.unpatch()
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [Random](#random)
    -   [rng](#rng)
    -   [random](#random-1)
    -   [rand](#rand)
    -   [seed](#seed)
    -   [srandom](#srandom)
    -   [srand](#srand)
    -   [clone](#clone)
    -   [use](#use)
    -   [newUse](#newuse)
    -   [patch](#patch)
    -   [unpatch](#unpatch)
    -   [next](#next)
    -   [float](#float)
    -   [int](#int)
    -   [integer](#integer)
    -   [bool](#bool)
    -   [boolean](#boolean)
    -   [byte](#byte)
    -   [bytes](#bytes)
    -   [randomBytes](#randombytes)
    -   [arrayIndex](#arrayindex)
    -   [arrayItem](#arrayitem)
    -   [arrayShuffle](#arrayshuffle)
    -   [uniform](#uniform)
    -   [uniformInt](#uniformint)
    -   [uniformBoolean](#uniformboolean)
    -   [normal](#normal)
    -   [logNormal](#lognormal)
    -   [bernoulli](#bernoulli)
    -   [binomial](#binomial)
    -   [geometric](#geometric)
    -   [poisson](#poisson)
    -   [exponential](#exponential)
    -   [irwinHall](#irwinhall)
    -   [bates](#bates)
    -   [pareto](#pareto)
    -   [itemByWeight](#itembyweight)
    -   [reset](#reset)

### [Random](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L18-L483)

Seedable random number generator supporting many common distributions.

Defaults to Math.random as its underlying pseudorandom number generator.

Type: `function (rng)`

-   `rng` **(Rng | [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** Underlying pseudorandom number generator. (optional, default `Math.random`)

* * *

#### [rng](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L28-L30)

Type: `function ()`

* * *

#### [random](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L34-L36)

-   **See: random.next**

Type: `function ()`

* * *

#### [rand](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L42-L44)

-   **See: random.next**

create random numbers like Math.random()

Type: `function ()`

* * *

#### [seed](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L48-L51)

initialize new seeds

Type: `function (argv)`

-   `argv` **...any**

* * *

#### [srandom](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L55-L57)

-   **See: random.srand**

Type: `function ()`

* * *

#### [srand](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L61-L64)

initialize seeds for rand() to create random numbers

Type: `function (argv)`

-   `argv` **...any**

* * *

#### [clone](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L75-L86)

-   **See: Rng.clone**

Creates a new `Random` instance, optionally specifying parameters to
set a new seed.

Type: `function (seed, args, opts): Random`

-   `seed` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Optional seed for new RNG.
-   `args` **...any**
-   `opts` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Optional config for new RNG options.

* * *

#### [use](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L105-L108)

Sets the underlying pseudorandom number generator used via
either an instance of `seedrandom`, a custom instance of RNG
(for PRNG plugins), or a string specifying the PRNG to use
along with an optional `seed` and `opts` to initialize the
RNG.

Type: `function (arg0, args)`

-   `arg0`
-   `args` **...any**

Example:

```javascript
const random = require('random')

random.use('xor128', 'foobar')
// or
random.use(seedrandom('kittens'))
// or
random.use(Math.random)
```

* * *

#### [newUse](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L112-L115)

create new Random and use

Type: `function (arg0, args)`

-   `arg0`
-   `args` **...any**

* * *

#### [patch](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L125-L132)

Patches `Math.random` with this Random instance's PRNG.

Type: `function ()`

**Meta**

-   **deprecated**: unsafe method


* * *

#### [unpatch](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L138-L143)

Restores a previously patched `Math.random` to its original value.

Type: `function ()`

**Meta**

-   **deprecated**: unsafe method


* * *

#### [next](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L154-L156)

Convenience wrapper around `this.rng.next()`

Returns a floating point number in \[0, 1).

Type: `function (): number`

* * *

#### [float](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L167-L169)

Samples a uniform random floating point number, optionally specifying
lower and upper bounds.

Convence wrapper around `random.uniform()`

Type: `function (min, max): number`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (float, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (float, exclusive) (optional, default `1`)

* * *

#### [int](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L180-L182)

Samples a uniform random integer, optionally specifying lower and upper
bounds.

Convence wrapper around `random.uniformInt()`

Type: `function (min, max): number`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (integer, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (integer, inclusive) (optional, default `1`)

* * *

#### [integer](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L186-L188)

-   **See: `random.int`**

Type: `function (min, max)`

-   `min`
-   `max`

* * *

#### [bool](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L192-L194)

-   **See: `random.boolean`**

Type: `function (likelihood)`

-   `likelihood`

* * *

#### [boolean](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L202-L204)

Samples a uniform random boolean value.

Convence wrapper around `random.uniformBoolean()`

Type: `function (likelihood): boolean`

-   `likelihood`

* * *

#### [byte](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L208-L210)

random byte

Type: `function ()`

* * *

#### [bytes](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L216-L218)

random bytes, with size

Type: `function (size)`

-   `size`   (optional, default `1`)

Example:

```javascript
Buffer.from(random.bytes(10)) // => <Buffer 5d 4b 06 94 08 e2 85 5b 79 4f>
```

* * *

#### [randomBytes](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L224-L226)

same as crypto.randomBytes(size)

Type: `function (size)`

-   `size`

* * *

#### [arrayIndex](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L232-L235)

get random index in array

Type: `function (arr, size, start, end)`

-   `arr`
-   `size`   (optional, default `1`)
-   `start`   (optional, default `0`)
-   `end`

Example:

```javascript
console.log(random.arrayIndex([11, 22, 33], 1, 0));
```

* * *

#### [arrayItem](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L241-L247)

get random item in array

Type: `function (arr, size, start, end)`

-   `arr`
-   `size`   (optional, default `1`)
-   `start`   (optional, default `0`)
-   `end`

Example:

```javascript
console.log(random.arrayItem([11, 22, 33], 2));
```

* * *

#### [arrayShuffle](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L257-L260)

Shuffle an array

Type: `function (arr, overwrite, randIndex)`

-   `arr`
-   `overwrite` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** if true, will change current array
-   `randIndex` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** return index by give length

Example:

```javascript
random.arrayShuffle([11, 22, 33])
```

* * *

#### [uniform](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L271-L273)

Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).

Type: `function (min, max): function`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (float, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (float, exclusive) (optional, default `1`)

* * *

#### [uniformInt](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L281-L283)

Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution).

Type: `function (min, max): function`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (integer, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (integer, inclusive) (optional, default `1`)

* * *

#### [uniformBoolean](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L292-L294)

Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution),
with two possible outcomes, `true` or \`false.

This method is analogous to flipping a coin.

Type: `function (likelihood): function`

-   `likelihood`

* * *

#### [normal](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L305-L307)

Generates a [Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution).

Type: `function (mu, sigma): function`

-   `mu` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Mean (optional, default `0`)
-   `sigma` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Standard deviation (optional, default `1`)

* * *

#### [logNormal](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L315-L317)

Generates a [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).

Type: `function (mu, sigma): function`

-   `mu` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Mean of underlying normal distribution (optional, default `0`)
-   `sigma` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Standard deviation of underlying normal distribution (optional, default `1`)

* * *

#### [bernoulli](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L327-L329)

Generates a [Bernoulli distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution).

Type: `function (p): function`

-   `p` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Success probability of each trial. (optional, default `0.5`)

* * *

#### [binomial](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L337-L339)

Generates a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution).

Type: `function (n, p): function`

-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of trials. (optional, default `1`)
-   `p` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Success probability of each trial. (optional, default `0.5`)

* * *

#### [geometric](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L346-L348)

Generates a [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution).

Type: `function (p): function`

-   `p` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Success probability of each trial. (optional, default `0.5`)

* * *

#### [poisson](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L358-L360)

Generates a [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution).

Type: `function (lambda): function`

-   `lambda` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Mean (lambda > 0) (optional, default `1`)

* * *

#### [exponential](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L367-L369)

Generates an [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution).

Type: `function (lambda): function`

-   `lambda` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Inverse mean (lambda > 0) (optional, default `1`)

* * *

#### [irwinHall](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L379-L381)

Generates an [Irwin Hall distribution](https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution).

Type: `function (n): function`

-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of uniform samples to sum (n >= 0) (optional, default `1`)

* * *

#### [bates](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L388-L390)

Generates a [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution).

Type: `function (n): function`

-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of uniform samples to average (n >= 1) (optional, default `1`)

* * *

#### [pareto](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L397-L399)

Generates a [Pareto distribution](https://en.wikipedia.org/wiki/Pareto_distribution).

Type: `function (alpha): function`

-   `alpha` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha (optional, default `1`)

* * *

#### [itemByWeight](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L434-L436)

returns random weighted item by give array/object

Type: `function (arr, getWeight)`

-   `arr`
-   `getWeight`

Examples:

```javascript
const obj = {
a: {
w: 5,
},
b: {
w: 5,
},
c: {
w: 1,
},
}
const getWeight = (value, index) => value.w
const fn = random.itemByWeight(obj, getWeight)

console.log(fn())
```

```javascript
const array = [3, 7, 1, 4, 2]
const fn = random.itemByWeight(array)

console.log(fn())
```

```javascript
const array = [3, 7, 1, 4, 2]
const getWeight = (value, index) => +index + 1
const fn = random.itemByWeight(array, getWeight)

console.log(fn())
```

* * *

#### [reset](https://github.com/bluelovers/random/blob/437276de3bb197e00d4e62ddda7623aa5e566530/src/random.js#L476-L479)

reset Memoizes distributions

Type: `function ()`

* * *

## Todo

-   Distributions

    -   [x] uniform
    -   [x] uniformInt
    -   [x] uniformBoolean
    -   [x] normal
    -   [x] logNormal
    -   [ ] chiSquared
    -   [ ] cauchy
    -   [ ] fischerF
    -   [ ] studentT
    -   [x] bernoulli
    -   [x] binomial
    -   [ ] negativeBinomial
    -   [x] geometric
    -   [x] poisson
    -   [x] exponential
    -   [ ] gamma
    -   [ ] hyperExponential
    -   [ ] weibull
    -   [ ] beta
    -   [ ] laplace
    -   [x] irwinHall
    -   [x] bates
    -   [x] pareto

-   Generators

    -   [x] pluggable prng
    -   [ ] port more prng from boost
    -   [ ] custom entropy

-   Misc
    -   [x] browser support via rollup
    -   [x] basic docs
    -   [x] basic tests
    -   [ ] full test suite
    -   [x] initial release!

## Related

-   [d3-random](https://github.com/d3/d3-random) - D3's excellent random number generation library.
-   [seedrandom](https://github.com/davidbau/seedrandom) - Seedable pseudo random number generator.
-   [random-int](https://github.com/sindresorhus/random-int) - For the common use case of generating uniform random ints.
-   [random-float](https://github.com/sindresorhus/random-float) - For the common use case of generating uniform random floats.
-   [randombytes](https://github.com/crypto-browserify/randombytes) - Random crypto bytes for Node.js and the browser.

## Credit

Huge shoutout to [Roger Combs](https://github.com/rcombs) for donating the `random` npm package for this project!

Lots of inspiration from [d3-random](https://github.com/d3/d3-random) ([@mbostock](https://github.com/mbostock) and [@svanschooten](https://github.com/svanschooten)).

Some distributions and PRNGs are ported from C++ [boost::random](https://www.boost.org/doc/libs/1_66_0/doc/html/boost_random/reference.html#boost_random.reference.distributions).

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
