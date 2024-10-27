'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'

export async function findProductInfoItems() {
  'use server'
  try {
    await connectToDb()
    const uniqueCompositions: string[] = await Product.distinct('composition')
    const uniqueMenus: string[] = await Product.distinct('menu')
    const uniqueCategories: string[] = await Product.distinct('category')
    const squirrels: string[] = await Product.distinct(
      'nutritionalValue.squirrels',
    )
    const fats: string[] = await Product.distinct('nutritionalValue.fats')
    const carbohydrates: string[] = await Product.distinct(
      'nutritionalValue.carbohydrates',
    )
    const energyValue: string[] = await Product.distinct(
      'nutritionalValue.energyValue',
    )

    return {
      success: true,
      composition: uniqueCompositions,
      menu: uniqueMenus,
      category: uniqueCategories,
      squirrels,
      fats,
      carbohydrates,
      energyValue,
      message: 'Product created',
    }
  } catch (error) {
    return {
      success: false,
      composition: [],
      menu: [],
      category: [],
      squirrels: [],
      fats: [],
      carbohydrates: [],
      energyValue: [],
      message: "Can't create product",
    }
  }
}
