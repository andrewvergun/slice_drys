'use client'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import Button from '@/components/client/ui/button'

interface ProductProps {
  product: IProduct
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const [selectedVariable, setSelectedVariable] = useState(product.variables[0])

  const handleAddToCart = () => {
    const productInfo = {
      id: product._id,
      name: product.name,
      count: 0,
      price: 0,
    }
    console.log('Продукт додано до кошика:', productInfo)
  }

  const handleVariableChange = (value: string) => {
    const selected = product.variables.find(
      (variable) => variable._id === value,
    )
    if (selected) {
      setSelectedVariable(selected)
    }
  }

  return (
    <Link href={`${product.name}${selectedVariable.weight}`}>
      <CardContainer className="inter-var relative h-full w-full rounded-sm">
        <CardBody className="group/card relative mb-[20px] flex h-full w-full flex-col items-center justify-between gap-4">
          <div className="flex w-full justify-between text-white">
            <div className="flex flex-col gap-1">
              <CardItem
                translateZ={30}
                className="z-10 rounded-sm bg-[#07C70D] px-2 py-1"
              >
                Новинка
              </CardItem>
              <CardItem translateZ={30} className="z-10 bg-[#A90909] px-2 py-1">
                Акція
              </CardItem>
              <CardItem
                translateZ={30}
                className="rounded-sm bg-[#EC9006] px-2 py-1"
              >
                ТОП
              </CardItem>
            </div>
            <div>
              <CardItem
                translateZ={30}
                className="rounded-sm bg-[#7D7D7D] px-2 py-1"
              >
                Очікуйте скоро будк!
              </CardItem>
            </div>
          </div>
          <CardItem
            translateZ={70}
            className="z-2 relative grid max-w-[229px] grow-0 place-content-center px-2 py-8"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={229}
              height={229}
              className="relative aspect-square h-full w-full object-contain"
            />
          </CardItem>
          <div className="flex w-full items-center justify-between gap-2">
            <CardItem translateZ={50}>
              <span className="text-xs font-medium uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {product.name}${selectedVariable.weight}
              </span>
            </CardItem>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <CardItem translateZ={30}>
              <Select
                onValueChange={handleVariableChange}
                defaultValue={product.variables[0]._id}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder={selectedVariable.weight.toString()}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {product.variables.map((variable) => (
                      <SelectItem key={variable._id} value={variable._id}>
                        {variable.weight} {variable.currency}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardItem>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <Button
              className="!z-50"
              type="button"
              variant="button"
              onClick={handleAddToCart}
            >
              До кошика
            </Button>
          </div>
          <div className="flex w-full items-end justify-between gap-2">
            <CardItem translateZ={30}>
              <span className="text-xs font-semibold text-[#7D7D7D] line-through sm:text-sm md:text-base lg:text-lg xl:text-lg">
                {selectedVariable.newPrice} {selectedVariable.currency}
              </span>
              <span className="text-sm font-semibold sm:text-base lg:text-lg xl:text-xl">
                {selectedVariable.price} {selectedVariable.currency}
              </span>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  )
}

export default Product
