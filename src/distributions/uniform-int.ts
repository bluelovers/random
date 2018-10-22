import ow from 'ow-lite'
import { Random } from '../random';
import RNG from '../rng'

export default (random: Random, min?: number, max?: number) =>
{
	if (max === undefined)
	{
		max = (min === undefined ? 1 : min)
		min = 0
	}

	ow(min, ow.number.integer)
	ow(max, ow.number.integer.gte(min))

	return () =>
	{
		return Math.floor(random.next() * (max - min + 1) + min)
	}
}
// @ts-ignore
Object.freeze(exports)
