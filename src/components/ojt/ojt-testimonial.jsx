/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react'
import Swiper from 'swiper'
import { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import Link from 'next/link'

const hero_contents = {
  title: 'Inspiring Testimonials from our Interns',
  text: (
    <>
      Hear directly from our former OJT trainees as
      <br />
      they share their remarkable experiences and the
      <br />
      invaluable impact of our program on their careers.
    </>
  ),
  testimonials: [
    {
      quote:
        '“My time at Techstacks has been a transformative experience, particularly in the area of web development. Throughout my 500 hours at the company, I have gained a wealth of knowledge and expertise that has allowed me to grow both personally and professionally. Techstacks provides a nurturing environment where employees are encouraged to take their time and delve deep into the intricacies of web development.”',
      author: 'John Rinand Sta. Ines',
      position: 'Former Intern | N.E.U.S.T',
      avatar: '/assets/img/ojt/testimonials/Rinand.jpg',
    },
    {
      quote:
        '“At Techstacks, I had the opportunity to learn HTML, CSS, JavaScript, React, and many more. I can say that it was a great experience. From the moment I started at Techstacks, I felt welcomed and supported by my fellow OJT trainees and the company team. I was also given the opportunity to take on responsibilities and develop new skills, which helped me grow professionally and personally.”',
      author: 'Ivan Mauricio',
      position: 'Former Intern | Wesleyan University of the Philippines',
      avatar: '/assets/img/ojt/testimonials/avatar.png',
    },
    {
      quote:
        '“I gained a wealth of information and practical expertise in web development during my internship at Techstacks. In fact, I can certainly declare that my internship taught me more than school. The teams assistance and mentorship were fantastic they were always accessible to answer any questions I had. I appreciated the unrestricted learning atmosphere, allowing me to experiment and explore new technologies.”',
      author: 'John Ezeriel Pineda',
      position: 'Former Intern | N.E.U.S.T',
      avatar: '/assets/img/ojt/testimonials/Ezeriel.jpg',
    },
    {
      quote:
        '“People here at Techstacks were incredibly supportive, awesome, cool, and will surely treat you like a family. All in all, I had a fantastic experience as an intern at Techstacks Company. Definitely learned a lot, and worked on some awesome projects, and for me, one of the most memorable is that I had the opportunity to work with NEUST finest students, and truly talented individuals.”',
      author: 'Jedediah Romano',
      position: 'Former Intern | N.E.U.S.T',
      avatar: '/assets/img/ojt/testimonials/Jedediah.jpg',
    },
    {
      quote:
        '“I am genuinely grateful for the opportunity to have completed my OJT at Techstacks. The experience has been life-changing and has opened doors to a whole new world of possibilities for me. The supportive and collaborative environment made me feel like a valued team member, and I could learn and grow in ways I never imagined. I highly recommend it to anyone considering an internship at Techstacks.”',
      author: 'Jhonas Lalo',
      position: 'Former Intern | N.E.U.S.T',
      avatar: '/assets/img/ojt/testimonials/Jhonas.png',
    },
    {
      quote:
        '“Through my internship program with TECHSTACKS, I learned how to appreciate their effort to teach us. How to faced the real world and talk to different people. To realized the importance of time management in this practicum. Learned to follow instructions what the superiors has given to me. I am grateful for the experience and the skills I acquired, and I believe they will be valuable to my future career in IT/ Computer Science.”',
      author: 'Hannah Mangulabnan',
      position: 'Former Intern | A.M.A',
      avatar: '/assets/img/ojt/testimonials/Hannah.jpg',
    },
    {
      quote:
        '“I really learned a lot and because of this internship, it gave me confidence to go out and explore more opportunities in the web dev industry. The management was really responsible, friendly and very professional in handling us interns. Even though this is the first time on handling interns, They have handled us with care and professionalism. The management was very patient with us. Very very patient.”',
      author: 'Daniel Arvi Paragas',
      position: 'Former Intern | N.E.U.S.T',
      avatar: '/assets/img/ojt/testimonials/Daniel Arvi.jpg',
    },
  ],
  hero_img: '/assets/img/hero/testimonial.png',
}

const OjtTestimonialArea = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000, // Autoplay delay in milliseconds
      },
      modules: [Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 bg-img-hero-ojt-testimonials">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none" />
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h6
                    className="tp-hero-title-ojt wow tpfadeUp"
                    data-wow-duration=".3s"
                    data-wow-delay=".6s"
                  >
                    {hero_contents.title}
                  </h6>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    {hero_contents.text}
                  </p>
                </div>
              </div>
              <div
                className="tp-hero-social pb-30 wow tpfadeIn"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              ></div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div
                className="tp-hero-big-img wow fadeInRight"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                {/* <img src={hero_contents.hero_img} alt="" /> */}
              </div>
              <div className="chat-bubble user-bubble">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {hero_contents.testimonials.map((testimonial, index) => (
                      <div key={index} className="swiper-slide">
                        <p className="p">{testimonial.quote}</p>
                        <div className="user-name">
                          <div className="user-avatar">
                            <img src={testimonial.avatar} alt="Avatar" />
                          </div>
                          <div>
                            <div>{testimonial.author}</div>
                            <div className="sub-name">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .swiper-container {
          overflow: hidden; /* Hide the overflowing content */
        }

        .swiper-slide {
          width: 100%; /* Set the width to match the container's width */
        }
      `}</style>
    </div>
  )
}

export default OjtTestimonialArea
