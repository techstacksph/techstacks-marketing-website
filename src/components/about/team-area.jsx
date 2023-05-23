import React from 'react'
import SingleTeam from '../common/single-team'

const teams = [
  {
    id: 8,
    duration: '.3s',
    delay: '.5s',
    img: '/assets/img/team/kai.png',
    name: 'Frances Kaye "Kai" Albis',
    title: 'Admin Officer',
  },
  {
    id: 9,
    duration: '.5s',
    delay: '.7s',
    img: '/assets/img/team/jv.png',
    name: 'Jayvee Ramos',
    title: 'IT Engineering Manager',
  },
  {
    id: 10,
    duration: '.7s',
    delay: '.9s',
    img: '/assets/img/team/franz.png',
    name: 'Francis "Franz" Bernardino',
    title: 'Frontend Developer',
  },
  {
    id: 11,
    duration: '1.4s',
    delay: '1.6s',
    img: '/assets/img/team/sam.png',
    name: 'Sammuel "Sam" Espiritu',
    title: 'Frontend Developer',
  },
  {
    id: 12,
    duration: '.5s',
    delay: '.7s',
    img: '/assets/img/team/marcus2.png',
    name: 'Marcus Leviticus Dela Cruz',
    title: 'Frontend Developer',
  },
  {
    id: 13,
    duration: '.3s',
    delay: '.5s',
    img: '/assets/img/team/toni.png',
    name: 'Toni Padua',
    title: 'Head UI/UX',
  },
  {
    id: 15,
    duration: '.7s',
    delay: '.9s',
    img: '/assets/img/team/aira.png',
    name: 'John Aira Feleo',
    title: 'Backend Developer',
  },
  {
    id: 16,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/ara.png',
    name: 'Ara Belle Agarem',
    title: 'Marketing and SEO Specialist',
  },
  {
    id: 17,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/kenneth.png',
    name: 'Kenneth Gunabe',
    title: 'Sr. Frontend Developer',
  },
  {
    id: 18,
    duration: '.5s',
    delay: '.7s',
    img: '/assets/img/team/neil.png',
    name: 'Neil Monzales',
    title: 'Sr. Fullstack Developer/DevOps',
  },
  {
    id: 19,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/jayson.png',
    name: 'Jayson Timkang',
    title: 'Sales Executive',
  },
  {
    id: 20,
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/team/third.png',
    name: 'Third Sugian',
    title: 'Owner/CTO',
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
