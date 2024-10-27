import EditorProduct from '@/components/admin/editor-product/editor-product'
import React from 'react'
import { getProducts } from '@/server/products/get-products.server'
import { ProductList } from '@/components/admin/product-list/product-list'
import { findProductInfoItems } from '@/server/products/find-product-info-items.server'

interface IGetProduct {
  product: IProduct[]
  success: boolean
  message: string
}

export default async function Home() {
  const products: IGetProduct = await getProducts(1, 10, [], [], [])
  const recommendations: IRecommendations = await findProductInfoItems()

  return (
    <div className="px-5">
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-bold">Товари</h1>
        <EditorProduct
          buttonTitle="створити"
          recommendations={recommendations}
        />
      </div>
      <ProductList data={products.product} recommendations={recommendations} />
    </div>
  )
}
