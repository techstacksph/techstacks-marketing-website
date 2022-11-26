import Link from 'next/link'
import React from 'react'

const services_items = [
  {
    id: 12,
    duration: '.5s',
    delay: '.7s',
    img: '/assets/img/service/service4.1.png',
    title: 'Web Development',
    border_effect: 'sv-border-effect-1',
  },
  {
    id: 15,
    duration: '.9s',
    delay: '1.1s',
    img: '/assets/img/service/service4.4.png',
    title: 'UI/UX Development',
    border_effect: 'sv-border-effect-4',
  },
  {
    id: 16,
    duration: '1s',
    delay: '1.1s',
    img: '/assets/img/service/service4.5.png',
    title: 'Marketing, Data, & SEO',
    border_effect: 'sv-border-effect-5',
  },
  {
    id: 18,
    duration: '1.2s',
    delay: '1.3s',
    img: '/assets/img/service/service4.2.png',
    title: 'IT Dev team for hire',
    border_effect: '',
  },
]

const ServiceArea = () => (
  <div className="tp-service-area pt-110 pb-120 grey-bg">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h5 className="text-center tp-subtitle pb-60">Core services</h5>
        {services_items.map((service, i) => {
          const { delay, duration, id, img, title, border_effect } = service

          return (
            <div
              key={id}
              className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration={duration}
              data-wow-delay={delay}
            >
              <div className={`tp-sv-border-effect ${border_effect}`}>
                <div
                  className={`tp-service-item-four sv-1-border
                  ${i + 1 === 8 ? 'sv-color-1' : `sv-color-${i + 1}`} mb-30`}
                >
                  <div className="tp-service-item-four__img  mb-40">
                    <img src={img} alt="" />
                  </div>
                  <div className="tp-service-item-four__title">
                    <h3 className="tp-sv-sm-title">
                      <Link href={`/service-details/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default ServiceArea
