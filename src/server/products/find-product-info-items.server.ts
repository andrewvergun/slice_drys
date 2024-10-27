'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'

export async function findProductInfoItems() {
  'use server'
  try {
    await connectToDb()
    const uniqueCompositions: any[] = await Product.distinct('composition')
    const uniqueMenus: any[] = await Product.distinct('menu')
    const uniqueCategories: any[] = await Product.distinct('category')

    return {
      success: true,
      composition: uniqueCompositions,
      menu: uniqueMenus,
      category: uniqueCategories,
      message: 'Product created',
    }
  } catch (error) {
    return {
      success: false,
      composition: [],
      menu: [],
      category: [],
      message: "Can't create product",
    }
  }
}
