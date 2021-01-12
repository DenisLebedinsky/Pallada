export const priceSeparate = (price) => {
  if (!price) {
    return '0'
  }
  const priceReverse = `${price}`.split('')
  const res: string[] = []

  priceReverse.forEach((num, i) => {
    if (i % 3) {
      res.push(num)
    } else {
      res.push(num)
      res.push(' ')
    }
  })

  return res.join('')
}
