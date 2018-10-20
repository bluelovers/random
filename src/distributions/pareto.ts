import ow from 'ow-lite'
import { Random } from '../random';
import RNG from '../rng'

export default (random: Random, alpha) =>
{
	ow(alpha, ow.number.gt(0))
	const invAlpha = 1.0 / alpha

	return () =>
	{
		return 1.0 / Math.pow(1.0 - random.next(), invAlpha)
	}
}