import Image from 'next/image'

export default function Slide() {
  return (
    <div className="max-w-88 relative flex min-h-fit w-full flex-col justify-between gap-[50px]">
      <div className="absolute left-0 top-0 flex flex-col gap-1 font-medium text-[11px] sm:text-xs lg:text-sm xl:text-base text-[white]">
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
        <div className="flex justify-between items-center">
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium uppercase">Курка сушена</h3>
          <div className="icon-arrow-down flex items-center text-base sm:text-md md:text-lg xl:text-xl font-medium">
            30 г
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-semibold text-[#7D7D7D] line-through">
              130 грн
            </p>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">110 грн</p>
          </div>
          <button
            type="button"
            className="h-full w-auto bg-[black] hover:bg-[#555555] px-1.5 sm:px-3 lg:px-5 xl:px-9 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-[white]"
          >
            До кошика
          </button>
        </div>
      </div>
    </div>
  )
}
