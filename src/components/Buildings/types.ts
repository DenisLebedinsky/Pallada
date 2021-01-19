export interface Buildins {
  images: string[]
  categoryId: string
  name: string
  email: string
  tel: string
  description: string
  price: number
  status: boolean
  locationId: string | Doc
  districtId: string | Doc
  realtObjectId: string | Doc
  area: number
  floor: number
  sale: boolean
  priority: boolean
  created?: string
  _id?: string
  id?: number
}

type Doc = {
  id: string
  name: string
  _v?: any
  _id?: any
}
