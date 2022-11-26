import Link from 'next/link'
import React from 'react'
import SocialLinks from '../social-links'

const footer_contents = {
  shapes: ['footer/team-shape-5.3.png', 'footer/team-shape-5.3.png'],
  title: 'Get an upgrade and accelerate your growth',
  sm_text:
    'We aim to help our clients capitalize on the advantage of digital presence to achieve business goals through an engaging online experiences.',
  btn_text: 'Contact us',
  copy_right: <>Copyright © {new Date().getFullYear()} Techstacks Ph.</>,
  logo: '/assets/img/logo/logo-white.png',
}
const { shapes, title, sm_text, btn_text, copy_right, logo } = footer_contents

const FooterFive = () => {
  return (
    <footer>
      <div className="tp-footer-area pt-120 p-relative black-bg p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`bs-footer-shape-${i + 1} d-none d-lg-block`}>
            <img src={`/assets/img/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="footer-widget-info bp-footer-widget-color text-center">
                <h2 className="tp-footer-title text-white pb-15">{title}</h2>
                <p>{sm_text}</p>
                <a className="tp-btn-sky theme-bg mb-50" href="#">
                  {btn_text}
                </a>
              </div>
            </div>
          </div>
          <div
            className="tp-copyright-bottom pb-90 wow tpfadeUp"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="tp-copyright-logo-box mb-30">
                  <div className="tp-copyright-logo text-center text-lg-start">
                    <Link href="/">
                      <a>
                        <img src={logo} alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="tp-cpoyright-menu  bp-cpoyright-menu text-md-start text-center text-lg-center  mb-30">
                  <p className="right-receved text-white">{copy_right}</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="tp-copyright-social bp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterFive
