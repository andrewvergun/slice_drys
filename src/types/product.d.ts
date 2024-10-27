interface IProduct {
  _id?: string
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
  _id?: number
  weight: number
  price: number
  newPrice: number
  currency: string
  count: number
  sold?: number
}

interface IRecommendations {
  success: boolean
  category: string[]
  composition: string[]
  squirrels: string[]
  fats: string[]
  carbohydrates: string[]
  energyValue: string[]
  menu: string[]
  message: string
}
