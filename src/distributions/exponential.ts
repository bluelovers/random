import ow from 'ow-lite'
import { Random } from '../random';
import RNG from '../rng'

export default (random: Random, lambda = 1) =>
{
	ow(lambda, ow.number.positive)

	return () =>
	{
		return -Math.log(1 - random.next()) / lambda
	}
}
