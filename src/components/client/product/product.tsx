import React, { useState } from 'react'
import Image from 'next/image'
import { IProductCard } from '@/types/product'
import Button from '@/components/client/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ProductProps = {
  product: IProductCard
}

const Product = ({ product }: ProductProps) => {
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0)

  const selectedPrice = product.price[selectedWeightIndex]
  const selectedNewPrice = product.newPrice?.[selectedWeightIndex] ?? 0

  return (
    <div className="max-w-88 group relative mb-[20px] flex h-full w-full flex-col items-center justify-between border border-[1px] border-white p-2 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#A90909]">
      <div className="absolute left-2 top-2 flex flex-col gap-1 text-[11px] font-medium text-white sm:text-xs lg:text-sm xl:text-base">
        {product.badges.map((badge) => (
          <div
            key={badge.type}
            className={`icon-${badge.type} flex w-fit items-center rounded-sm px-2 py-[2px] uppercase ${
              badge.type === 'top'
                ? 'bg-[#EC9006]'
                : badge.type === 'new'
                  ? 'bg-[#07C70D]'
                  : 'bg-[#A90909]'
            }`}
          >
            {badge.label}
          </div>
        ))}
      </div>
      <div className="max-w-58 grid place-content-center px-2 py-8 transition-all duration-1000 group-hover:translate-y-4 group-hover:scale-105">
        <Image
          src={product.img}
          alt={product.name}
          width={229}
          height={229}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="relative mb-6 text-[11px] font-medium text-white sm:absolute sm:right-2 sm:top-2 sm:mb-0 sm:text-xs lg:text-sm xl:text-base">
        {product.available ? (
          <div className="icon-available flex w-fit items-center rounded-sm bg-[#0c0c0c] px-2 pb-[2px]">
            В наявності
          </div>
        ) : (
          <div className="icon-non-available flex w-fit items-center rounded-sm bg-[#7D7D7D] px-2 pb-[2px]">
            Немає в наявності
          </div>
        )}
      </div>
      <div className="flex w-full grow flex-col gap-[40px]">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xs font-medium uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {product.name}
          </h3>
          <div className="sm:text-md flex w-[80px] shrink-0 items-center text-nowrap text-base font-medium sm:w-[90px] md:w-[100px] md:text-lg xl:text-xl">
            <Select
              onValueChange={(value) => setSelectedWeightIndex(Number(value))}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={product.weight[selectedWeightIndex]}
                />
              </SelectTrigger>
              <SelectContent>
                {product.weight.map((weight, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {weight}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex grow items-end justify-between">
          <div>
            {selectedNewPrice ? (
              <>
                {selectedPrice && (
                  <p className="text-xs font-semibold text-[#7D7D7D] line-through sm:text-sm md:text-base lg:text-lg xl:text-lg">
                    {selectedPrice} грн
                  </p>
                )}
                <p className="text-sm font-semibold sm:text-base lg:text-lg xl:text-xl">
                  {selectedNewPrice} грн
                </p>
              </>
            ) : (
              selectedPrice && (
                <p className="text-sm font-semibold sm:text-base lg:text-lg xl:text-xl">
                  {selectedPrice} грн
                </p>
              )
            )}
          </div>
          <Button type="button" variant="button">
            До кошика
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Product
