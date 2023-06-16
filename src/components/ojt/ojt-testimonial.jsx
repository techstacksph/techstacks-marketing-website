/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';

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
        '“My time at Techstacks has been a transformative experience, particularly in the area of web development. Throughout my 500 hours at the company, I have gained a wealth of knowledge and expertise that has allowed me to grow both personally and professionally.”',
      author: 'John Rinand Sta. Ines',
      position: 'Former Intern | NEUST',
      avatar: '/assets/img/ojt/testimonials/Rinand.jpg',
    },
    {
      quote:
        '“The OJT program at Techstacks was an incredible opportunity for me to learn and develop my skills. The hands-on experience and mentorship I received were invaluable. I\'m grateful for the chance to be a part of such a supportive and innovative organization.”',
      author: 'Jane Doe',
      position: 'Former Intern | ABC University',
      avatar: '/assets/img/ojt/testimonials/avatar.png',
    },
    {
      quote:
        '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.”',
      author: 'Lorem Ipe',
      position: 'Former Intern | ABC University',
      avatar: '/assets/img/ojt/testimonials/avatar.png',
    },
  ],
  hero_img: '/assets/img/hero/testimonial.png',
};

const OjtTestimonialArea = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      autoplay: false, // Disable autoplay
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

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
              <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s"></div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="tp-hero-big-img wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
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
                            <div className="sub-name">{testimonial.position}</div>
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
  );
};

export default OjtTestimonialArea;
