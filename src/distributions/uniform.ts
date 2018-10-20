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

	ow(min, ow.number)
	ow(max, ow.number)

	return (): number =>
	{
		return random.next() * (max - min) + min
	}
}