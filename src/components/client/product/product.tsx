import React, { useState } from 'react'
import Image from 'next/image'
import { IProduct } from '@/types/product'
import Button from '@/components/client/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

type ProductProps = {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0)
  const selectedPrice = product.price[selectedWeightIndex]
  const selectedNewPrice = product.newPrice?.[selectedWeightIndex] ?? 0

  return (
    <CardContainer className="inter-var h-full w-full rounded-sm">
      <CardBody className="group/card relative mb-[20px] flex h-full w-full flex-col items-center justify-between gap-4 p-2">
        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1 text-[11px] font-medium text-white sm:text-xs lg:text-sm xl:text-base">
          {product.badges.map((badge) => (
            <CardItem
              translateZ={30}
              key={badge.type}
              className={`icon-${badge.type} relative z-10 flex w-fit items-center rounded-sm px-2 py-[2px] uppercase ${
                badge.type === 'top'
                  ? 'bg-[#EC9006]'
                  : badge.type === 'new'
                    ? 'bg-[#07C70D]'
                    : 'bg-[#A90909]'
              }`}
            >
              {badge.label}
            </CardItem>
          ))}
        </div>
        <CardItem
          translateZ={70}
          className="z-2 relative grid max-w-[229px] grow-0 place-content-center px-2 py-8"
        >
          <Image
            src={product.img ?? ''}
            alt={product.name}
            width={229}
            height={229}
            className="relative aspect-square h-full w-full object-contain"
          />
        </CardItem>
        <div className="relative mb-6 text-[11px] font-medium text-white sm:absolute sm:right-2 sm:top-2 sm:mb-0 sm:text-xs lg:text-sm xl:text-base">
          {product.available ? (
            <CardItem
              translateZ={30}
              className="icon-available flex w-fit items-center rounded-sm bg-[#0c0c0c] px-2 pb-[2px]"
            >
              В наявності
            </CardItem>
          ) : (
            <CardItem
              translateZ={30}
              className="icon-non-available flex w-fit items-center rounded-sm bg-[#7D7D7D] px-2 pb-[2px]"
            >
              Немає в наявності
            </CardItem>
          )}
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <CardItem translateZ={50}>
            <h3 className="text-xs font-medium uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {product.name}
            </h3>
          </CardItem>
          <CardItem
            translateZ={20}
            className="sm:text-md flex w-[80px] shrink-0 items-center text-nowrap text-base font-medium sm:w-[90px] md:w-[100px] md:text-lg xl:text-xl"
          >
            <Select
              onValueChange={(value) => setSelectedWeightIndex(Number(value))}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={`${product.weight[selectedWeightIndex]} г`}
                />
              </SelectTrigger>
              <SelectContent>
                {product.weight.map((weight, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {weight} г
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardItem>
        </div>
        <div className="flex w-full items-end justify-between gap-2">
          <CardItem translateZ={20}>
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
          </CardItem>
          <CardItem translateZ={40}>
            <Button type="button" variant="button">
              До кошика
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default Product
