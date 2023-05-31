import Link from 'next/link'
import React from 'react'
import SingleServiceTwo from '../common/single-service-2'

const services_data = [
  {
    id: 1,
    duration: '.4s',
    delay: '.6s',
    img: '/assets/img/service/service-1.png',
    title: 'Planning & Ideation',
    text_1: 'Discussion about scope of work, deliverables and project cost',
    text_2: '',
    home: true,
    service_p_2: true,
  },
  {
    id: 2,
    duration: '.4s',
    delay: '1s',
    img: '/assets/img/service/service-2.png',
    title: 'Design Process',
    text_1:
      'Design system, blueprints, wireframes, prototypes, and hi-fidelity designs',
    text_2: '',
    home: true,
    service_p_2: true,
  },
  {
    id: 3,
    duration: '.4s',
    delay: '1.2s',
    img: '/assets/img/service/service-3.png',
    title: 'Development',
    text_1:
      'Incremental builds, integrations, code reviews, and quality assurance',
    text_2: '',
    home: true,
    service_p_2: true,
  },
  {
    id: 4,
    duration: '.4s',
    delay: '1.3s',
    img: '/assets/img/service/service-7.png',
    title: 'Optimize & Scale',
    text_1:
      'Evaluate post-deploy performance and SEO score, optimize, and scale.',
    text_2: '',
    home: true,
    service_p_2: true,
  },
  {
    id: 44,
    duration: '.6s',
    delay: '1.3s',
    img: '/assets/img/service/service-icon-9.1.png',
    title: 'Support',
    text_1: 'Extensive technical support free for a year.',
    text_2: '',
    home: true,
    service_p_2: true,
  },
  {
    id: 45,
    duration: '.6s',
    delay: '1.3s',
    img: '/assets/img/service/service-icon-9.1.png',
    title: 'Support',
    text_1: 'Extensive technical support free for a year.',
    text_2: '',
    home: true,
    service_p_2: true,
  },
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

const ServiceAreaOjt = () => (
  <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
    <div className="tp-sv-shape-img z-index-1">
      <img src={shape_img} alt="" />
    </div>
    <div className="circle-animation service">
      <span className="tp-circle-1" />
      <span className="tp-circle-2" />
    </div>
    <div className="circle-animation service-two">
      <span className="tp-circle-skye" />
    </div>

    <div className="container">
      <h2 className="heading-ojt-service-area">
        Trainees can enjoy numerous benefits and perks that help support their
        learning and development.
      </h2>
      <p className="paragraph-ojt-service-area">
        From customized learning plans and project-based learning to access to
        industry experts and career growth opportunities, we give our trainees
        the tools and resources they need to succeed.
      </p>
      <div className="row">
        {services_items.map((s, i) => (
          <SingleServiceTwo key={i} service={s} />
        ))}
      </div>
    </div>
  </div>
)

export default ServiceAreaOjt
