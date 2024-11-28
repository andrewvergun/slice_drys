import Image from 'next/image'
import { IProduct } from '@/types/IProduct'
import Button from '@/components/client/ui/button'

type ProductProps = {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="max-w-88 group relative flex h-full w-full flex-col justify-between gap-[50px] p-2 transition-all duration-300 hover:-translate-y-4 hover:rounded-2xl hover:shadow-2xl hover:shadow-[#A90909]">
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
      <div className="max-w-58 grid place-content-center px-2 py-8 transition-all duration-300 group-hover:translate-y-16 group-hover:scale-110 lg:group-hover:scale-125">
        <Image
          src={product.img}
          alt={product.name}
          width={229}
          height={229}
          className="w-58 object-cover"
        />
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-medium uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {product.name}
          </h3>
          <div className="icon-arrow-down sm:text-md flex items-center text-nowrap text-base font-medium md:text-lg xl:text-xl">
            {product.weight}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            {product.price && (
              <p className="text-xs font-semibold text-[#7D7D7D] line-through sm:text-sm md:text-base lg:text-lg xl:text-lg">
                {product.price} грн
              </p>
            )}
            <p className="text-sm font-semibold sm:text-base lg:text-lg xl:text-xl">
              {product.newPrice} грн
            </p>
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
