import ow from 'ow-lite'

export default (random, min, max) => {
  if (max === undefined) {
    max = (min === undefined ? 1 : min)
    min = 0
  }

  ow(min, ow.number)
  ow(max, ow.number)

  return () => {
    return random.next() * (max - min) + min
  }
}
