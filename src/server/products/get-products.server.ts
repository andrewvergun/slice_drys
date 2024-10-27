'use server'
import { unstable_noStore as noStore } from 'next/cache'
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
    const product: IProduct[] = await Product.find().lean<IProduct[]>()

    return { success: true, product: product, message: 'Product created' }
  } catch (error) {
    return { success: false, product: [], message: "Can't create product" }
  }
}
