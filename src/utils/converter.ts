import { BASE_URL } from 'src/utils/secrets'

export const priceSeparate = (price) => {
  return `${price}`.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}

export const makeImagePath = (src: string) => `${BASE_URL}/${src}`
