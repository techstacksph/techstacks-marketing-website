import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'
import 'swiper/css/bundle'
import Link from 'next/link'

const Sliders = [
  ['img-1.png', 'img-2.png', 'img-3.png'],
  ['img-1.png', 'img-2.png', 'img-3.png'],
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
        {Sliders.map((slider, sliderI) => (
          <div key={sliderI}>
            <Swiper
              spaceBetween={16}
              centeredSlides
              speed={6000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
                reverseDirection: sliderI % 2,
              }}
              modules={[Autoplay, FreeMode]}
              loop
              slidesPerView="auto"
              loopedSlides={6}
              freeMode
            >
              {slider.map((img, imgI) => (
                <SwiperSlide key={imgI}>
                  <img src={`/assets/img/ojt/slider-1/${img}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      <img
        src="/assets/img/ojt/ojt-portfolio.png"
        className="ojt-journey-portfolio-img"
      />

      <div className="ojt-journey-portfolio-container">
        <div className="ojt-journey-discover-card">
          <h3>Discover the Outstanding Works of Our OJT Interns</h3>
          <p>
            We believe in nurturing and empowering young talent. Explore their
            remarkable works and witness firsthand the passion, creativity, and
            innovation they bring to our projects.
          </p>
          <Link href="#">EXPLORE THEIR WORKS</Link>
        </div>
      </div>
    </div>
  )
}

export default OjtJourney
