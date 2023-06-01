/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const hero_contents = {
  title: 'Setting you up for Success',
  text: (
    <>
      With our training cycle, you'll have access to top-notch resources
      <br />
      and guidance from experienced professionals to support
      <br />
      your growth and development.
    </>
  ),

  hero_img: '/assets/img/hero/discover-pic.png',
}

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents

const OjtDiscoveryArea = () => {
  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 bg-color-hero-ojt-discovery ">
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
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OjtDiscoveryArea
