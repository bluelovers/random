import ow from 'ow'

export default (random, n) => {
  ow(n, ow.number.integer.positive.label('n'))

  return () => {
    let sum = 0
    for (let i = 0; i < n; ++i) {
      sum += random.next()
    }

    return sum
  }
}