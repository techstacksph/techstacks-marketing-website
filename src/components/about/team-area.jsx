import React from 'react'
import { team_data } from '../../data'
import SingleTeam from '../common/single-team'

const teams = [
  {
    id: 8,
    duration: '.3s',
    delay: '.5s',
    img: '/assets/img/team/kai.png',
    name: 'Frances Kaye "Kai" Albis',
    title: 'Admin Officer',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    home_5: true,
    about_p: true,
  },
  {
    id: 9,
    duration: '.5s',
    delay: '.7s',
    img: '/assets/img/team/jv.png',
    name: 'Jayvee Ramos',
    title: 'IT Engineering Lead',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    home_5: true,
    about_p: true,
  },
  {
    id: 10,
    duration: '.7s',
    delay: '.9s',
    img: '/assets/img/team/franz.png',
    name: 'Francis "Franz" Bernardino',
    title: 'Frontend Developer',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    home_5: true,
    about_p: true,
  },
  {
    id: 11,
    duration: '1.4s',
    delay: '1.6s',
    img: '/assets/img/team/sam.png',
    name: 'Sammuel "Sam" Espiritu',
    title: 'Frontend Developer',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    home_5: true,
    about_p: true,
  },
  {
    id: 12,
    duration: '.3s',
    delay: '.5s',
    img: '/assets/img/team/toni.png',
    name: 'Toni Padua',
    title: 'Head UI/UX',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    about_p: true,
  },
  {
    id: 13,
    duration: '.5s',
    delay: '.7s',
    img: '/assets/img/team/nico.png',
    name: 'Mark Nicolai "Nico" Santiago',
    title: 'WordPress / UI/UX Designer',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    about_p: true,
  },
  {
    id: 14,
    duration: '.7s',
    delay: '.9s',
    img: '/assets/img/team/aira.png',
    name: 'John Aira Feleo',
    title: 'Backend Developer',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    about_p: true,
  },
  {
    id: 15,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/andrey.png',
    name: 'Anrhey "Andrey" Ramos',
    title: 'Frontend Developer',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    about_p: true,
  },
  {
    id: 15,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/john.png',
    name: 'John Cabangon',
    title: 'UI/UX Designer',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    about_p: true,
  },

  {
    id: 15,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/jayson.png',
    name: 'Jayson Timkang',
    title: 'Sales Executive',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    about_p: true,
  },
  {
    id: 15,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/third.png',
    name: 'Third Sugian',
    title: 'Owner/CTO',
    social_links: [
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: 'fab fa-facebook-f',
        name: 'Facebook',
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        link: 'https://www.youtube.com/',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'Youtube',
      },
      {
        link: 'https://www.skype.com/en/',
        target: '_blank',
        icon: 'fab fa-skype',
        name: 'Skype',
      },
    ],
    about_p: true,
  },
]

const TeamArea = () => (
  <div className="ac-team-area pt-60 pb-80">
    <div className="container">
      <div className="row">
        <div className="team-section-box text-center pb-25">
          <h5 className="tp-subtitle">Our Team</h5>
          <h2 className="tp-title">
            Meet our&nbsp;
            <span className="tp-section-highlight">
              team
              <svg
                width="141"
                height="11"
                viewBox="0 0 141 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L141 11H0V0Z" fill="#FFDC60" />
              </svg>
            </span>
          </h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {teams.map(team => (
          <SingleTeam key={team.id} team={team} />
        ))}
      </div>
    </div>
  </div>
)

export default TeamArea
