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
    text_1: 'Ensuring our trainees receive the training',
    text_2: 'and development opportunities that align',
    text_3: 'with their career goals and aspirations.',
    home: true,
    service_p_2: true,
  },
  {
    id: 2,
    duration: '.4s',
    delay: '1s',
    img: '/assets/img/service/ojt-services/mentoring.png',
    title: 'Mentoring and  Support',
    text_1: 'Providing a dedicated mentor who will',
    text_2: 'guide throughout the program, provide',
    text_3: 'with constructive feedback on your work.',
    home: true,
    service_p_2: true,
  },
  {
    id: 3,
    duration: '.4s',
    delay: '1.2s',
    img: '/assets/img/service/ojt-services/project.png',
    title: 'Project-based Learning',
    text_1: 'Get hands-on experience with real-world',
    text_2: 'web development projects. You work on',
    text_3: 'projects that challenge you and your skills.',
    home: true,
    service_p_2: true,
  },
  {
    id: 4,
    duration: '.4s',
    delay: '1.3s',
    img: '/assets/img/service/ojt-services/positive2.png',
    title: 'Positive Work Environment',
    text_1: 'Providing a positive work environment',
    text_2: 'inspires creativity and drives innovation.',
    text_3: 'Trainees thrive in team-centric environment.',
    home: true,
    service_p_2: true,
  },
  {
    id: 44,
    duration: '.6s',
    delay: '1.3s',
    img: '/assets/img/service/ojt-services/exposure-2.png',
    title: 'Exposure to Industry Best Practices',
    text_1: 'Work alongside experienced developers ',
    text_2: 'and get a first-hand look at how websites',
    text_3: 'and applications are built.',
    home: true,
    service_p_2: true,
  },
  {
    id: 45,
    duration: '.6s',
    delay: '1.3s',
    img: '/assets/img/service/ojt-services/career.png',
    title: 'Exciting Career Pathways',
    text_1: 'We are always on the lookout for talented',
    text_2: 'developers to join our team to build',
    text_3: 'skill and expand your proficient networks.',
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
