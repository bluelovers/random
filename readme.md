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
-   Supports node >= 6 and browser

## Install

```bash
npm install --save random-extra
```

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
    -   [rand](#rand)
    -   [rand](#rand-1)
    -   [seed](#seed)
    -   [srand](#srand)
    -   [srand](#srand-1)
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
    -   [reset](#reset)

### [Random](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L18-L411)

Seedable random number generator supporting many common distributions.

Defaults to Math.random as its underlying pseudorandom number generator.

Type: `function (rng)`

-   `rng` **(Rng | [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** Underlying pseudorandom number generator. (optional, default `Math.random`)

* * *

#### [rng](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L28-L30)

Type: `function ()`

* * *

#### [rand](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L34-L36)

Type: `function ()`

* * *

#### [rand](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L40-L42)

create random numbers like Math.random()

Type: `function ()`

* * *

#### [seed](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L46-L49)

initialize new seeds

Type: `function (argv)`

-   `argv` **...any** 

* * *

#### [srand](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L53-L55)

Type: `function ()`

* * *

#### [srand](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L59-L62)

initialize seeds for rand() to create random numbers

Type: `function (argv)`

-   `argv` **...any** 

* * *

#### [clone](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L73-L84)

-   **See: Rng.clone**

Creates a new `Random` instance, optionally specifying parameters to
set a new seed.

Type: `function (seed, args, opts): Random`

-   `seed` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Optional seed for new RNG.
-   `args` **...any** 
-   `opts` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Optional config for new RNG options.

* * *

#### [use](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L103-L106)

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

#### [newUse](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L110-L113)

create new Random and use

Type: `function (arg0, args)`

-   `arg0`  
-   `args` **...any** 

* * *

#### [patch](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L123-L130)

Patches `Math.random` with this Random instance's PRNG.

Type: `function ()`

**Meta**

-   **deprecated**: unsafe method


* * *

#### [unpatch](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L136-L141)

Restores a previously patched `Math.random` to its original value.

Type: `function ()`

**Meta**

-   **deprecated**: unsafe method


* * *

#### [next](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L152-L154)

Convenience wrapper around `this.rng.next()`

Returns a floating point number in \[0, 1).

Type: `function (): number`

* * *

#### [float](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L165-L167)

Samples a uniform random floating point number, optionally specifying
lower and upper bounds.

Convence wrapper around `random.uniform()`

Type: `function (min, max): number`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (float, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (float, exclusive) (optional, default `1`)

* * *

#### [int](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L178-L180)

Samples a uniform random integer, optionally specifying lower and upper
bounds.

Convence wrapper around `random.uniformInt()`

Type: `function (min, max): number`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (integer, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (integer, inclusive) (optional, default `1`)

* * *

#### [integer](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L193-L195)

Samples a uniform random integer, optionally specifying lower and upper
bounds.

Convence wrapper around `random.uniformInt()`

Type: `function (min, max): number`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (integer, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (integer, inclusive) (optional, default `1`)

* * *

#### [bool](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L205-L207)

Samples a uniform random boolean value.

Convence wrapper around `random.uniformBoolean()`

Type: `function (): boolean`

* * *

#### [boolean](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L215-L217)

Samples a uniform random boolean value.

Convence wrapper around `random.uniformBoolean()`

Type: `function (): boolean`

* * *

#### [byte](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L221-L223)

random byte

Type: `function ()`

* * *

#### [bytes](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L231-L233)

random bytes, with size

Type: `function (size, min)`

-   `size`   (optional, default `1`)
-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** size (optional, default `1`)

Example:

```javascript
Buffer.from(random.bytes(10)) // => <Buffer 5d 4b 06 94 08 e2 85 5b 79 4f>
```

* * *

#### [uniform](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L244-L246)

Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).

Type: `function (min, max): function`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (float, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (float, exclusive) (optional, default `1`)

* * *

#### [uniformInt](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L254-L256)

Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution).

Type: `function (min, max): function`

-   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Lower bound (integer, inclusive) (optional, default `0`)
-   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Upper bound (integer, inclusive) (optional, default `1`)

* * *

#### [uniformBoolean](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L265-L267)

Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution),
with two possible outcomes, `true` or \`false.

This method is analogous to flipping a coin.

Type: `function (): function`

* * *

#### [normal](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L278-L280)

Generates a [Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution).

Type: `function (mu, sigma): function`

-   `mu` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Mean (optional, default `0`)
-   `sigma` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Standard deviation (optional, default `1`)

* * *

#### [logNormal](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L288-L290)

Generates a [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).

Type: `function (mu, sigma): function`

-   `mu` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Mean of underlying normal distribution (optional, default `0`)
-   `sigma` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Standard deviation of underlying normal distribution (optional, default `1`)

* * *

#### [bernoulli](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L300-L302)

Generates a [Bernoulli distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution).

Type: `function (p): function`

-   `p` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Success probability of each trial. (optional, default `0.5`)

* * *

#### [binomial](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L310-L312)

Generates a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution).

Type: `function (n, p): function`

-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of trials. (optional, default `1`)
-   `p` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Success probability of each trial. (optional, default `0.5`)

* * *

#### [geometric](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L319-L321)

Generates a [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution).

Type: `function (p): function`

-   `p` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Success probability of each trial. (optional, default `0.5`)

* * *

#### [poisson](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L331-L333)

Generates a [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution).

Type: `function (lambda): function`

-   `lambda` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Mean (lambda > 0) (optional, default `1`)

* * *

#### [exponential](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L340-L342)

Generates an [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution).

Type: `function (lambda): function`

-   `lambda` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Inverse mean (lambda > 0) (optional, default `1`)

* * *

#### [irwinHall](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L352-L354)

Generates an [Irwin Hall distribution](https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution).

Type: `function (n): function`

-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of uniform samples to sum (n >= 0) (optional, default `1`)

* * *

#### [bates](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L361-L363)

Generates a [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution).

Type: `function (n): function`

-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of uniform samples to average (n >= 1) (optional, default `1`)

* * *

#### [pareto](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L370-L372)

Generates a [Pareto distribution](https://en.wikipedia.org/wiki/Pareto_distribution).

Type: `function (alpha): function`

-   `alpha` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha (optional, default `1`)

* * *

#### [reset](https://github.com/bluelovers/random/blob/5aebd0d8458f02c8717308f09c238aaea633ddab/src/random.js#L404-L407)

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
