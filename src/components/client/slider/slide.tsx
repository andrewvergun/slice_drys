import Image from 'next/image'

export default function Slide() {
  return (
    <div className="max-w-88 relative flex min-h-fit w-full flex-col justify-between gap-[50px]">
      <div className="absolute left-0 top-0 flex flex-col gap-1 text-[11px] font-medium text-[white] sm:text-xs lg:text-sm xl:text-base">
        <div className="icon-top flex w-fit items-center rounded-sm bg-[#EC9006] px-2 py-[2px] uppercase">
          Топ
        </div>
        <div className="icon-badge flex w-fit items-center rounded-sm bg-[#07C70D] px-2 py-[2px]">
          Новинка
        </div>
        <div className="icon-action flex w-fit items-center rounded-sm bg-[#A90909] px-2 py-[2px]">
          Акція
        </div>
      </div>
      <div className="max-w-58 grid place-content-center px-2 py-8">
        <Image
          src="/images/meat.png"
          alt="Slide 1"
          width={229}
          height={229}
          className="w-58 object-cover"
        />
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-medium uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Курка сушена
          </h3>
          <div className="icon-arrow-down sm:text-md flex items-center text-base font-medium md:text-lg xl:text-xl">
            30 г
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold text-[#7D7D7D] line-through sm:text-sm md:text-base lg:text-lg xl:text-lg">
              130 грн
            </p>
            <p className="text-sm font-semibold sm:text-base lg:text-lg xl:text-xl">
              110 грн
            </p>
          </div>
          <button
            type="button"
            className="h-full w-auto bg-[black] px-1.5 py-1 text-sm font-medium text-[white] hover:bg-[#555555] sm:px-3 sm:py-1.5 sm:text-base lg:px-5 lg:py-2 lg:text-lg xl:px-9 xl:py-2.5 xl:text-xl"
          >
            До кошика
          </button>
        </div>
      </div>
    </div>
  )
}
