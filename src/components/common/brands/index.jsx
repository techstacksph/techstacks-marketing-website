import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const brand_images = [
  '/assets/img/brand/dediabetes.png',
  '/assets/img/brand/ssw.png',
  '/assets/img/brand/pi.png',
  '/assets/img/brand/unpuzzle.png',
  '/assets/img/brand/costaku.png',
  '/assets/img/brand/ww.png',
  '/assets/img/brand/prime-light.png',
  '/assets/img/brand/win.png',
  '/assets/img/brand/release.png',
  '/assets/img/brand/nextpay.png',
  '/assets/img/brand/mnm.png',
  '/assets/img/brand/agassiz.png',
  '/assets/img/brand/thunder.png',
]

const Index = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false)
  React.useEffect(() => setSliderLoop(true), [])

  return (
    <Swiper
      loop={sliderLoop}
      spaceBetween={30}
      slidesPerView={2}
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      className="swiper-wrapper d-flex align-items-center"
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 6,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 5,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 3,
        },
      }}
    >
      {brand_images.map((brand, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-center">
            <img src={brand} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Index
