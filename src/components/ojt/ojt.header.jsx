import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

const HeaderWithSlider = () => {
  const sliderRef = useRef()

  useEffect(() => {
    const swiper = new Swiper(sliderRef.current, {
      slidesPerView: 1,
      loop: true,
      navigation: false, // Disable navigation buttons
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      modules: [Autoplay, Pagination],
    })

    return () => {
      swiper.destroy()
    }
  }, [])

  return (
    <div className="root-header-wrapper">
      <div className="header-container">
        <div className="header-content-wrapper">
          <h1 id="item1-text">Their Awesome Projects</h1>
          <div className="item item2">
            <p id="item2-text">Website Portfolio</p>
            <div className="slider" ref={sliderRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="slider-image"
                    src="/assets/img/ojt/works-slider/Rectangle 751.png"
                    alt="Slide 1"
                  />
                </div>
                {/* <div className="swiper-slide">
                  <img
                    className="slider-image"
                    src="/assets/img/ojt/works/Rectangle 771.png"
                    alt="Slide 1"
                  />
                </div> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderWithSlider
