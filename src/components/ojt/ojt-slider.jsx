import Link from 'next/link'
import React from 'react'
import SingleServiceTwo from '../common/single-service-2'

const services_data = [
 
  // home two
]

const services_contents = {
  shape_img: '/assets/img/service/service-shape.png',
  subtitle: 'Our Methodology',
  title: 'Systematic flow in the website lifecycle',
  btn_text: 'View all services',
}

const { shape_img, title, subtitle, btn_text } = services_contents
const services_items = services_data.filter(ser => ser.home)

const SliderAreaOjt = () => (
  <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
    <div className="tp-sv-shape-img z-index-1">
      <img src={shape_img} alt="" />
    </div>

    <div className="container">
      <h2 className="heading-ojt-service-area">
      Explore the journey of our OJT trainees, including their achievements, projects, and valuable learnings.
      </h2>
      <p className="paragraph-ojt-service-area">
      Learn from the real-world experiences of our OJT trainees and how they have leveraged their training to excel in the industry
      </p>
      <div className="row">
        {services_items.map((s, i) => (
          <SingleServiceTwo key={i} service={s} />
        ))}
      </div>
    </div>
  </div>
)

export default SliderAreaOjt
