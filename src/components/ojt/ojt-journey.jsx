import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'
import 'swiper/css/bundle'
import Link from 'next/link'

const Sliders = [
  'slider-1/img-1.png',
  'slider-1/img-2.png',
  'slider-1/img-3.png',
  'slider-2/img-11.png',
  'slider-2/img-12.png',
  'slider-2/img-13.png',
]

const OjtJourney = () => {
  return (
    <div className="ojt-journey-root">
      <div className="pt-190">
        <h2 className="ojt-journey-header">
          Explore the journey of our OJT trainees, including their achievements,
          projects, and valuable learnings.
        </h2>
        <p className="ojt-journey-subheader">
          Learn from the real-world experiences of our OJT trainees and how they
          have leveraged their training to excel in the industry
        </p>
      </div>

      <div className="ojt-journey-slider-container">
        <Swiper
          initialSlide={12} // Go to start
          spaceBetween={16}
          centeredSlides
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          loop
          slidesPerView="auto"
          loopedSlides={6}
          freeMode
        >
          {Sliders.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={`/assets/img/ojt/${img}`} />
            </SwiperSlide>
          ))}
          {Sliders.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={`/assets/img/ojt/${img}`} />
            </SwiperSlide>
          ))}
          {Sliders.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={`/assets/img/ojt/${img}`} />
            </SwiperSlide>
          ))}
          {Sliders.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={`/assets/img/ojt/${img}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <img
        src="/assets/img/ojt/ojt-portfolio.png"
        className="ojt-journey-portfolio-img"
      />

      <div className="ojt-journey-portfolio-container container">
        <div className="ojt-journey-discover-card">
          <h3>Discover the Outstanding Works of our OJT Interns</h3>
          <p>
            We believe in nurturing and empowering young talent. Explore their
            remarkable works and witness firsthand the passion, creativity, and
            innovation they bring to our projects.
          </p>
          <Link href="/ojt/works">
            <a>
              EXPLORE THEIR WORKS <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OjtJourney
