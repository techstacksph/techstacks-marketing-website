import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Link from 'next/link'
import { testimonial_contents } from '../home/testimonial-new'

const { highlight_text, subtitle, testimonial_data, title } =
  testimonial_contents

const TestimonialArea = ({ home_6, style_2 = false }) => {
  const [sliderLoop, setSliderLoop] = React.useState(false)
  React.useEffect(() => setSliderLoop(true), [])

  return (
    <div
      className={`tp-testimonial-area ${
        style_2 ? 'pb-130' : 'pt-130 pb-130'
      } p-relative`}
    >
      <div
        className={`${
          home_6 ? 'bs-testi-shape-1' : 'ce-testi-shape'
        } d-none d-lg-block`}
      >
        <img
          src={
            home_6
              ? '/assets/img/testimonial/testimonial-shape-5.3.png'
              : '/assets/img/hero/hero-shape-4.png'
          }
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end">
              <div className="tp-testimonial-title-box ">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-sm">
                  {title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg
                      width="212"
                      height="11"
                      viewBox="0 0 212 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-testimonial-slider-section-four">
          <Swiper
            loop={sliderLoop}
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className="swiper-container testi-slider-active-five"
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonial_data.map(item => {
              const { id, desc, img, name, ratings, title } = item
              return (
                <SwiperSlide key={id}>
                  <div className="tp-testimonial-item-four">
                    <div
                      className="tp-testimonial-item-four__meta d-flex justify-content-between
                    align-items-center mb-60"
                    >
                      <div className="tp-testimonial-item-four__rating">
                        {ratings.map(r => (
                          <span key={r}>
                            <i className="fas fa-star" />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="tp-testi-paragraph pb-40">
                      <p>{desc}</p>
                    </div>
                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                      <div className="mr-20">
                        <img src={img} alt="" />
                      </div>
                      <div className="tp-testimonial-item-four__position">
                        <h4 className="m-0">{name}</h4>
                        <span>{title}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TestimonialArea
