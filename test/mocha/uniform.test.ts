/**
 * Created by user on 2018/11/16/016.
 */

/// <reference types="mocha" />
/// <reference types="benchmark" />
/// <reference types="chai" />
/// <reference types="node" />

import { chai, relative, expect, path, assert, util, mochaAsync } from '../_local-dev';

// @ts-ignore
import { ITest } from 'mocha';
import random from '../..'
import seedrandom = require('seedrandom');

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest: ITest;

	const r = random.clone(seedrandom('ZDJjM2IyNmFlNmVjNWQwMGZkMmY1Y2Nk'));

	beforeEach(function ()
	{
		currentTest = this.currentTest as ITest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`random.uniform()`, () =>
	{
		const d = r.dfUniform();

		const delta = 0.05;

		let min = 1;
		let max = 0;
		let sum = 0;

		const count = 10000;

		for (let i = 0; i < count; ++i)
		{
			const v = d();

			min = Math.min(min, v);
			max = Math.max(max, v);

			sum += v;
		}

		// @ts-ignore
		it(`random.uniform() is in [0, 1)`, function ()
		{
			expect(min).is.float.gt(0);
			expect(max).is.float.lt(1);
		});

		it(`random.uniform() has mean 0.5 \u00B1 ${delta}`, function ()
		{
			const mean = sum / count;
			const expected = 0.5;

			expect(mean).is.float.closeTo(expected, delta);
		});

	});

	describe(`random.uniform(max)`, () =>
	{
		const input_max = 42;
		const d = r.dfUniform(input_max);

		const delta = 0.5;

		let min = input_max;
		let max = 0;
		let sum = 0;

		const count = 10000;

		for (let i = 0; i < count; ++i)
		{
			const v = d();

			min = Math.min(min, v);
			max = Math.max(max, v);

			sum += v;
		}

		// @ts-ignore
		it(`random.uniform(max) returns numbers in [0, max)`, function ()
		{
			expect(min).is.float.gt(0);
			expect(max).is.float.lt(input_max);
		});

		it(`random.uniform(max) has mean max / 2 \u00B1 ${delta}`, function ()
		{
			const mean = sum / count;
			const expected = input_max / 2;


			expect(mean).is.float.closeTo(expected, delta);
		});

	});

	describe(`random.uniform(min, max)`, () =>
	{
		const input_min = 10;
		const input_max = 42;
		const d = r.dfUniform(input_min, input_max);

		const delta = 0.5;

		let min = input_max;
		let max = 0;
		let sum = 0;

		const count = 10000;

		for (let i = 0; i < count; ++i)
		{
			const v = d();

			min = Math.min(min, v);
			max = Math.max(max, v);

			sum += v;
		}

		// @ts-ignore
		it(`random.uniform(min, max) returns numbers in [min, max]`, function ()
		{
			expect(min).is.float.gt(input_min);
			expect(max).is.float.lt(input_max);
		});

		it(`random.uniform(min, max) has mean max / 2 \u00B1 ${delta}`, function ()
		{
			const mean = sum / count;
			const expected = (input_min + input_max) / 2;


			expect(mean).is.float.closeTo(expected, delta);
		});

	});

});
