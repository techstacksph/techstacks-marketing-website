import Link from 'next/link'
import React from 'react'
import { ClipPath, UpArrow } from '../../svg'

const footer_contents = {
  title: <>Ready to upgrade your website?</>,
  subtitle: <>give us a try.🤝</>,
  btn_text: 'Contact Us',
  copyRight_text: <>Copyright © {new Date().getFullYear()} Techstacks Ph.</>,
  conditions: ['Privacy policy', 'Terms and conditions'],
  logo: '/assets/img/copyright/copyright-logo.png',
  social_links: [
    {
      link: 'https://linkedin.com/',
      icon: 'fab fa-linkedin-in',
      linkClass: 'd-none',
    },
    {
      link: 'https://www.facebook.com/techstacksph',
      icon: 'fab fa-facebook-f',
    },
    {
      link: 'https://instagram.com/techstacksph',
      icon: 'fab fa-instagram',
    },
    {
      link: 'https://youtube.com/',
      icon: 'fab fa-youtube',
      linkClass: 'd-none',
    },
  ],
}

const {
  btn_text,
  conditions,
  copyRight_text,
  logo,
  social_links,
  title,
  subtitle,
} = footer_contents

const Footer = () => (
  <footer className="p-relative">
    <button className="scrollTop d-none d-md-block" data-target="html">
      <Link href={'/'}>
        <div className="tp-backto-top">
          <UpArrow />
        </div>
      </Link>
    </button>
    <div className="footer-clip-shape">
      <ClipPath />
    </div>
    <div className="tp-clip-height-one" />
    <div className="tp-clip-height-two" />
    <div className="tp-footer-area tp-footer-space black-bg p-relative fix pt-0">
      <div className="tp-footer-border-shape d-none" />
      <div className="tp-footer-border-shape-two" />
      <div className="circle-animation footer-animation d-none d-md-block">
        <span className="tp-circle-3" />
      </div>
      <div className="container">
        <div
          className="tp-footer-widget wow tpfadeUp"
          data-wow-duration=".5s"
          data-wow-delay=".5s"
        >
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7 col-md-7 col-12">
              <div className="tp-footer-top">
                <h5 className="tp-footer-title">
                  <span className="d-block">{title}</span>
                  <span>{subtitle}</span>
                </h5>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-12">
              <div className="tp-footer-button text-start text-md-end">
                <Link href="mailto:techstacks.2022@gmail.com">
                  <a className="tp-btn">
                    {btn_text}
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tp-copyright-area pb-90 wow tpfadeUp"
        data-wow-duration=".5s"
        data-wow-delay=".7s"
      >
        <div className="container">
          <div className="tp-copyright-box align-items-center">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                <div className="tp-copyright-text z-index-1">
                  <p className="m-0">{copyRight_text}</p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                <div className="tp-copyright-right text-md-end text-start">
                  {conditions.map((c, i) => (
                    <a key={i} href="#">
                      {c}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright-logo-box">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                <div className="tp-copyright-logo mt-35">
                  <Link href="/">
                    <a>
                      <img src={logo} alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                <div className="tp-copyright-social text-md-end mt-25">
                  {social_links.map((s, i) => (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                      className={s.linkClass}
                    >
                      <i className={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
