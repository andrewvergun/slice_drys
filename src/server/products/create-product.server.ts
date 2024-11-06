'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'
import cloudinary from '@/server/cloudinaryConfig'

export async function createProduct(formData: IProductLocal, image?: any) {
  'use server'
  try {
    await connectToDb()
    let imageUrl = ''

    if (image) {
      const upload = await cloudinary.uploader.upload(image, {
        folder: 'products',
      })
      imageUrl = upload.secure_url
    }

    const productData = { ...formData, img: 'test' }

    const product = new Product(productData)
    // const productSON = product.toObject()
    console.log(product)
    await product.save()

    return { success: true, message: 'Product created' }
  } catch (error) {
    return { success: false, message: "Can't create product" }
  }
}
