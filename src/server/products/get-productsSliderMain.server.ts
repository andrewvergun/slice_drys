'use server'
import { connectToDb } from '@/server/connectToDb'
import { Product } from '@/server/products/productSchema'
import { IProductLocal, IVariableProduct } from '@/types/product'

export async function getProductsSliderMain(products: IProductLocal[]) {
  try {
    await connectToDb()
    const query: Record<string, any> = {}
    const products = await Product.find(query)
      .sort({ visited: -1 })
      .limit(7)
      .lean<IProductLocal[]>()

    return products.map((product) => ({
      ...product,
      name: product.name,
      description: product.description,
      statusLabel: product.statusLabel,
      visited: product.visited,
      variables: Array.isArray(product.variables)
        ? product.variables.map((variant: IVariableProduct) => ({
            ...variant,
            weight: variant.weight ? Number(variant.weight) : 0,
            price: variant.price ? Number(variant.price) : 0,
            newPrice: variant.newPrice ? Number(variant.newPrice) : 0,
            count: variant.count ? Number(variant.count) : 0,
          }))
        : [],
    }))
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw new Error(
      'Oops! Something went wrong while loading the top products. Please try refreshing the page or come back later.',
    )
  }
}
