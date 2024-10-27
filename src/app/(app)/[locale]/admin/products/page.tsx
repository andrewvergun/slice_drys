import CrateProduct from '@/components/admin/crate-product/crate-product'
import React from 'react'
import { getProducts } from '@/server/products/get-products.server'

export default async function Home() {
  const products = await getProducts(1, 10, [], [], [])

  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-bold">Товари</h1>
        <CrateProduct />
      </div>
    </>
  )
}
