import Link from 'next/link'
import React from 'react'
import SingleServiceTwo from '../common/single-service-2'

const services_data = [
  {
    id: 1,
    duration: '.4s',
    delay: '.6s',
    img: '/assets/img/service/ojt-services/training.png',
    title: 'Customized Learning',
    text_1: 'Ensuring our trainees receive the training and development opportunities that align with their career goals and aspirations',
    home: true,
    service_p_2: true,
  },
  {
    id: 2,
    duration: '.4s',
    delay: '1s',
    img: '/assets/img/service/ojt-services/mentoring.png',
    title: 'Mentoring and  Support',
    text_1: 'Providing a dedicated mentor who will guide throughout the program, provide with constructive feedback on your work.',
    home: true,
    service_p_2: true,
  },
  {
    id: 3,
    duration: '.4s',
    delay: '1.2s',
    img: '/assets/img/service/ojt-services/project.png',
    title: 'Project-based Learning',
    text_1: 'Get hands-on experience with real-world web development projects. You work on projects that challenge you and your skills.',
    home: true,
    service_p_2: true,
  },
  {
    id: 4,
    duration: '.4s',
    delay: '1.3s',
    img: '/assets/img/service/ojt-services/positive2.png',
    title: 'Positive Work Environment',
    text_1: 'Providing a positive work environment inspires creativity and drives innovation. Trainees thrive in a cooperative setting.',
    home: true,
    service_p_2: true,
  },
  {
    id: 44,
    duration: '.6s',
    delay: '1.3s',
    img: '/assets/img/service/ojt-services/exposure-2.png',
    title: 'Exposure to Industry Best Practices',
    text_1: 'Work alongside experienced developers and get a first-hand look at how websites and applications are built.',
    home: true,
    service_p_2: true,
  },
  {
    id: 45,
    duration: '.6s',
    delay: '1.3s',
    img: '/assets/img/service/ojt-services/career.png',
    title: 'Exciting Career Pathways',
    text_1: 'We are always on the lookout for talented developers to join our team to build skill and expand your proficient networks.',
    home: true,
    service_p_2: true,
  },
  // home two
]

const services_contents = {
  subtitle: 'Our Methodology',
  title: 'Systematic flow in the website lifecycle',
  btn_text: 'View all services',
}

const { shape_img, title, subtitle, btn_text } = services_contents
const services_items = services_data.filter(ser => ser.home)



const ServiceAreaOjt = () => (
  <div className="tp-service-area pt-120 pb-120 p-relative fix bg-img-benefits" >
    <div className="tp-sv-shape-img z-index-1">
      <img src={shape_img} alt="" />
    </div>

    <div className="container">
      <div className="container-wrapper" >
        <div  className="container-content ">
          <h2 className="heading-ojt-service-area" >
            Trainees can enjoy numerous benefits and perks that help support their
            learning and development.
          </h2>
          <div className="paragraph-ojt-service-wrapper">
            <p className="paragraph-ojt-service-area">
              From customized learning plans and project-based learning to access to
              industry experts and career growth opportunities, we give our trainees
              the tools and resources they need to succeed.
            </p>
          </div>
     
        </div>
        <div className="row">
          {services_items.map((s, i) => (
            <SingleServiceTwo key={i} service={s} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ServiceAreaOjt
