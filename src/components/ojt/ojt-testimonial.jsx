/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

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

  hero_img: '/assets/img/hero/testimonial.png',
  user_avatar: '/assets/img/ojt/testimonials/Rinand.jpg',
}

const {
  title,
  text,
  btn_text,
  btn_text_2,
  social_links,
  hero_img,
  user_avatar,
} = hero_contents

const OjtTestimonialArea = () => {
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
                    {title}
                  </h6>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    {text}
                  </p>

                  <div
                    className="tp-hero-social pb-30 wow tpfadeIn"
                    data-wow-duration=".7s"
                    data-wow-delay="1.2s"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div
                className="tp-hero-big-img wow fadeInRight"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                {/* <img src={hero_img} alt="" /> */}
              </div>
              <div class="chat-bubble user-bubble">
                <div>
                  <div>
                    <p class="p">
                      “My time at Techstacks has been a transformative
                      experience, particularly in the area of web development.
                      Throughout my 500 hours at the company, I have gained a
                      wealth of knowledge and expertise that has allowed me to
                      grow both personally and professionally.”
                    </p>
                    <div class="user-name">
                      <div className="user-avatar">
                        <img src={user_avatar} alt="asdasd" />
                      </div>
                      <div>
                        <div>John Rinand Sta. Ines</div>
                        <div class="sub-name">Former Intern | NEUST</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OjtTestimonialArea
