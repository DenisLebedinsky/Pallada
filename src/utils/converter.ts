export const priceSeparate = (price) => {
  return `${price}`.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}
