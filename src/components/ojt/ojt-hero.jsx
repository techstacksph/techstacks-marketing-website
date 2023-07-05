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
  hero_img: '/assets/img/hero/ojt-hero.png',
}

const { title, text, btn_text, hero_img } = hero_contents

const OjtHeroArea = () => {
  return (
    <div className="tp-hero-area tp-ojt-hero-space p-relative z-index-1 fix bg-color-hero-ojt">
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
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div
                className="tp-ojt-hero-big-img wow fadeInRight"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                <img src={hero_img} alt="" className="img-ojt-hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OjtHeroArea
