'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'

export async function editProduct(
  id: string,
  formData: IProductLocal,
  image?: any,
) {
  'use server'
  try {
    await connectToDb()
    let imageUrl = ''

    const existingProduct = await Product.findById(id)
    if (!existingProduct)
      return { success: false, message: 'Product not found' }

    const updatedData = {
      ...formData,
    }

    await Product.findByIdAndUpdate(id, updatedData, { new: true })

    return { success: true, message: 'Product updated successfully' }
  } catch (error) {
    return { success: false, message: "Can't update product" }
  }
}
