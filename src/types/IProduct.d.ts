export interface IProduct {
  _id?: string
  name: string
  img: string
  newPrice: number
  price?: number
  weight: string[]
  badges: { type: 'top' | 'new' | 'sale'; label: string }[]
}
