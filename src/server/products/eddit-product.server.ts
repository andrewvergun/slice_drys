'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'
import cloudinary from '@/server/cloudinaryConfig'

export async function editProduct(id: string, formData: IProduct, image?: any) {
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

    /*
     const productData = { ...formData, img: imageUrl }
     */
    const product = new Product(formData)
    await product.save()

    return { success: true, product: product, message: 'Product created' }
  } catch (error) {
    return { success: false, message: "Can't create product" }
  }
}
