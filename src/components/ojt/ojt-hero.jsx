/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const hero_contents = {
  title:
    'Elevate your web development prospects and unlock a world of opportunities',
  text: (
    <>
      We believe that the OJT Program is not just a learning experience,
      <br />
      it's also a chance for you to
      <span className="text-green"> discover your passion and purpose </span>
    </>
  ),
  btn_text: `Inquire Now `,
  btn_text_2: 'About Us',
  social_links: [
    {
      id: 1,
      icon: 'fab fa-facebook-f social-icon-1',
      title: 'Facebook',
      link: 'https://facebook.com/techstacksph',
    },
    {
      id: 2,
      icon: 'fab fa-instagram social-icon-3',
      title: 'Instagram',
      link: 'https://www.instagram.com/techstacksph',
    },
    {
      id: 3,
      icon: 'fab fa-twitter social-icon-2',
      title: 'Twitter',
      link: 'https://twitter.com/techstacksph',
      class: 'd-none',
    },
    {
      id: 4,
      icon: 'fab fa-youtube social-icon-3',
      title: 'Youtube',
      link: 'https://www.youtube.com/techstacksph',
      class: 'd-none',
    },
  ],
  hero_img: '/assets/img/hero/ojt-hero.png',
}

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents

const OjtHeroArea = () => {
  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
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
                    className="tp-hero-button mb-140 wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <Link href="/services">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                  </div>
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
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OjtHeroArea
