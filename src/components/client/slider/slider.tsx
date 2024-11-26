import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Slide from './slide'
const Slider: React.FC = () => {
  return (
    <>
      <div className="mx-auto mb-12 mt-10 max-w-6xl">
        <div className="pb-[51px] sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[147px]">
          <h2 className="rubik-doodle-shadow-regular mb-2 text-[32px] sm:mb-4 sm:text-5xl md:mb-6 md:text-6xl lg:mb-8 lg:text-7xl xl:mb-12 xl:text-8xl">
            ТОПОВІ СУШЕНИКИ
          </h2>
          <div className="swiper-label relative grid place-content-start text-base sm:place-content-end md:text-lg lg:text-xl xl:text-2xl">
            найсмачніші кусь-топчики
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: '.custom-prev, .swiper-button-prev',
            nextEl: '.custom-next, .swiper-button-next',
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination, .swiper-pagination',
            bulletClass: 'custom-bullet swiper-pagination-bullet',
          }}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          id="swiper"
          className="custom-swiper mb-24 pb-16"
        >
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Swiper>
        <div className="mx-auto flex max-w-fit items-center justify-center gap-8">
          <div className="custom-prev swiper-button-prev">
            <Image
              src="/icons/slide-prev.svg"
              width={50}
              height={60}
              alt="prev"
            />
          </div>
          <div className="custom-pagination swiper-pagination flex items-center justify-center gap-1"></div>
          <div className="custom-next swiper-button-next">
            <Image
              src="/icons/slide-next.svg"
              width={50}
              height={60}
              alt="next"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
