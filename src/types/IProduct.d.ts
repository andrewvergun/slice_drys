export interface IProduct {
  id: number
  title: string
  image: string
  price: number
  oldPrice?: number
  weight: string
  badges: { type: 'top' | 'new' | 'sale'; label: string }[]
}
