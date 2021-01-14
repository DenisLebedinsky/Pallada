export type FiltersFields = {
  search: string
  location: string
  district: string
  realtObject: string
  floor: string
  activeDeal: string
  price: Price
}

type Price = {
  min: number
  max: number
}
