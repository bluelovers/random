/**
 * Created by user on 2018/11/9/009.
 */

import random from '../../src/random';
import seedrandom from '../../preset/seedrandom';
import nanoid = require('nanoid')
import shortid = require('shortid');
import tests, { Benchmark, formatBenchmarkResult, sortBenchmarkResult, getMethods } from './'

import console from 'debug-color2'
import { defaultArgv } from '../../src/simple-wrap';

const suite = (new Benchmark.Suite);

shortid();
nanoid();
const random_charID = tests.random.charID();
const seedrandom_charID = tests.seedrandom.charID();
const math_random2_charID = tests['math-random2'].charID();
const xor128_charID = tests.xor128.charID();

suite
	.add(`shortid`, shortid)
	.add(`nanoid`, nanoid)
	.add(`random.charID`, random_charID)
	.add(`seedrandom.charID`, seedrandom_charID)
	.add(`math-random2.charID`, math_random2_charID)
	.add(`xor128.charID`, xor128_charID)
	.on('cycle', function (event)
	{
		//console.info(String(event.target));
	})
	.on('complete', function (this)
	{
		let ls = sortBenchmarkResult(this)

		console.ok('Fastest is ' + this.filter('fastest').map('name'), '  ')
		console.ok('Slowest is ' + this.filter('slowest').map('name'), '  ')

		console.grey(`\n-----------------------`);

		ls.forEach(function (v)
		{
			console.log(formatBenchmarkResult(v), '  ')
		})
	})
	.run()
;