interface IProduct {
  id?: string
  name: string
  description: string
  img?: string
  variables: IVariableProduct[]
  category: string[]
  menu: string[]
  composition: string[]
  statusLabel: string[]
  visited?: number
  nutritionalValue: INutritionalValue
}

interface INutritionalValue {
  squirrels: string
  fats: string
  carbohydrates: string
  energyValue: string
}

interface IVariableProduct {
  id?: number
  weight: number
  price: number
  newPrice: number
  currency: string
  count: number
  sold?: number
}
