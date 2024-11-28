'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'

export async function deleteProduct(id?: string) {
  'use server'
  try {
    await connectToDb()

    const deletedProduct = await Product.findByIdAndDelete(id)
    if (!deletedProduct) {
      return { success: false, message: "Product wasn't found" }
    }

    return { success: true, message: 'Product was deleted' }
  } catch (error) {
    return { success: false, message: "Can't delete product" }
  }
}
