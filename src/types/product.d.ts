interface IProduct {
  id: number
  name: string
  img: string
  variables: IVariableProduct[]
  category: string
  visited: number
  menu: string
  composition: string[]
  description: number
}

interface IVariableProduct {
  id: number
  weight: number
  price: number
  newPrice: number
  currency: string
  count: number
  statusLabel: string
  sold: number
}
