'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'

export async function getProducts(
  page: number = 1,
  limit: number = 10,
  composition: string[] = [],
  menu: string[] = [],
  category: string[] = [],
) {
  'use server'
  try {
    await connectToDb()
    const product = await Product.find().lean()

    return { success: true, product: product, message: 'Product created' }
  } catch (error) {
    return { success: false, message: "Can't create product" }
  }
}
