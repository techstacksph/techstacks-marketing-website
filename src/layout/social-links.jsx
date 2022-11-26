import React from 'react'

const social_links = [
  {
    link: 'https://facebook.com/techstacksph',
    target: '_blank',
    icon: 'fab fa-facebook-f',
  },
  {
    link: 'https://instagram.com/techstacksph',
    target: '_blank',
    icon: 'fab fa-instagram',
  },
]

const hero_socials = [
  {
    num: 1,
    link: 'https://facebook.com',
    target: '_blank',
    icon: 'fab fa-facebook-f social-icon-1',
    title: 'Facebook',
  },
  {
    num: 3,
    link: 'https://www.youtube.com/',
    target: '_blank',
    icon: 'fab fa-youtube social-icon-3',
    title: 'Youtube',
  },
  {
    num: 2,
    link: 'https://twitter.com',
    target: '_blank',
    icon: 'fab fa-twitter social-icon-2',
    title: 'Twitter',
  },
]

export const HeroSocials = ({ hide_title = false }) =>
  hero_socials.map((l, i) => (
    <a
      key={i}
      href={l.link}
      className={`social-icon-${l.num}`}
      target={l.target ? l.target : ''}
    >
      <i className={l.icon} />
      {hide_title ? '' : l.title}
    </a>
  ))

const SocialLinks = () =>
  social_links.map((l, i) => (
    <a key={i} href={l.link} target={l.target ? l.target : ''}>
      <i className={l.icon} />
    </a>
  ))

export default SocialLinks
