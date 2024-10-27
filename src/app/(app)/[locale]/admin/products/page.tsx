import CrateProduct from '@/components/admin/crate-product/crate-product'
import React from 'react'
import { getProducts } from '@/server/products/get-products.server'
import { ProductList } from '@/components/admin/product-list/product-list'

interface IGetProduct {
  product: IProduct[]
  success: boolean
  message: string
}

export default async function Home() {
  const products: IGetProduct = await getProducts(1, 10, [], [], [])

  return (
    <div className="px-5">
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-bold">Товари</h1>
        <CrateProduct />
      </div>
      <ProductList data={products.product} />
    </div>
  )
}
