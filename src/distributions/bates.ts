import ow from 'ow-lite'

export default (random, n) =>
{
  ow(n, ow.number.integer.positive)
  const irwinHall = random.irwinHall(n)

  return () =>
  {
    return irwinHall() / n
  }
}
