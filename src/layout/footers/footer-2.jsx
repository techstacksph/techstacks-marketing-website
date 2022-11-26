import Link from 'next/link'
import React from 'react'

const footer_contents = {
  shapes: [
    { num: 'one', img: '/assets/img/creative/creative-hand.png' },
    { num: 'two', img: '/assets/img/service/service-1.png' },
  ],
  title: 'Let’s build something together',
  text: 'Let’s talk about your ideas and how Techstacks can help bring it to life.',
  btn_text: 'Contact us',
  copy_right_text: <>Copyright © {new Date().getFullYear()} Techstacks Ph.</>,
  copy_right_menu: [],
  // copy_right_menu: [{ label: 'Pricing Plan', link: '/pricing' }],
  social_links: [
    {
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/techstacksph/',
    },
    { icon: 'fab fa-facebook-f', link: 'https://facebook.com/techstacksph/' },
  ],
}
const {
  shapes,
  btn_text,
  copy_right_menu,
  copy_right_text,
  social_links,
  text,
  title,
} = footer_contents

const FooterTwo = () => (
  <footer className="p-relative black-bg">
    <div className="tp-footer-area pt-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-widget-info text-center">
              <h2 className="tp-footer-title pb-15 text-white">{title}</h2>
              <p>{text}</p>
              <Link href="mailto:techstacks.2022@gmail.com">
                <a className="tp-btn mb-50">{btn_text}</a>
              </Link>
              <p className="right-receved text-white-50">{copy_right_text}</p>
            </div>
          </div>
        </div>
        <div className="tp-copyright-bottom">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="tp-copyright-logo-box text-md-center text-center text-lg-start mb-30">
                <div className="tp-copyright-logo">
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/logo-green.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="tp-cpoyright-menu text-md-start text-center text-lg-center mb-30">
                {copy_right_menu.map((m, i) => (
                  <a key={i} href={m.link} className="text-white-50">
                    {m.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
                {social_links.map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noreferrer">
                    <i className={`${s.icon} text-white`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
export default FooterTwo
