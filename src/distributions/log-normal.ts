import { Random } from '../random';
import RNG from '../rng'

export default (random: Random, ...args) =>
{
	const normal = random.normal(...args)

	return () =>
	{
		return Math.exp(normal())
	}
}