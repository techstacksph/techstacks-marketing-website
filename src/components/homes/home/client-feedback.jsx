import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

const testimonial_data = [
  {
    id: 1,
    ratings: [1, 2, 3, 4, 5],
    desc: "One of the best agencies we've ever worked with. Solid work that is very responsive to our needs. Techstacks, thank you so much for everything you've done.",
    img: '/assets/img/testimonial/testi-4.jpg',
    name: 'Peter',
    title: 'CTO | Release Media Inc.',
    brand_img: '/assets/img/testimonial/testi-brands-2.png',
  },
  {
    id: 2,
    ratings: [1, 2, 3, 4, 5],
    desc:
      'I had a coding problem with a website I was developing for a client that Techstacks helped me to resolve. Their expertise made the difference! They communicated clearly and efficiently, which greatly impressed me. \n' +
      'Their work for me showed their keen attention to detail and thorough understanding of technical challenges.',
    img: '/assets/img/testimonial/testi-4.7.png',
    name: 'Rheanna',
    title: 'Owner | Fancypants Design Co.',
    brand_img: '/assets/img/testimonial/testi-brands.png',
  },
  {
    id: 3,
    ratings: [1, 2, 3, 4, 5],
    desc: 'Techstacks completed the task in great detail. They were very proactive and took the initiative in many different areas, including informing us of a potential security vulnerability in our existing software.',
    img: '/assets/img/testimonial/testi-7.png',
    name: 'Don',
    title: 'CEO | NextPay Ph',
    brand_img: '/assets/img/testimonial/testi-brands-2.png',
  },
]

const ClientFeedback = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false)
  React.useEffect(() => setSliderLoop(true), [])

  return (
    <>
      <div className="testimonial-area grey-bg pt-125 pb-120 fix p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-xl-8 col-lg-8 col-md-10 col-12 ">
              <div className="tp-testimonial-section-box-two text-center pb-20">
                <h5 className="tp-subtitle">Testimonials</h5>
                <h2 className="tp-title">Words to validate our work</h2>
              </div>
              <div className="tp-testimonial-slider-two mb-50">
                <Swiper
                  loop={sliderLoop}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: '.testimonial-slider-dots',
                    clickable: true,
                  }}
                  className="swiper-container testimonial-slider-two"
                >
                  {testimonial_data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="tp-testimonial-item-two text-center">
                        <div className="tp-testimonial-info">
                          <img src={item.img} alt="" />
                          <h4>{item.name}</h4>
                          <span>
                            {item.title}
                            {item.ratings.map((r, i) => (
                              <i
                                key={i}
                                className={`fas fa-star ${
                                  r === 1 ? 'fa-stars-1' : ''
                                }`}
                              />
                            ))}
                          </span>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="testimonial-slider-dots text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientFeedback
