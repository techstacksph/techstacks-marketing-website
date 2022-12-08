import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const uniqueItems = [
  {
    id: 1,
    title: 'Javascript Developer',
    time: 'Full Time',
  },
]

const JobArea = () => {
  const [jobItems] = useState(uniqueItems)

  return (
    <div className="job-area pt-130 pb-130 grey-bg">
      <div className="container">
        <h3 className="tp-subtitle text-center text-black pb-20">
          Open Positions
        </h3>
        <div className="row d-flex justify-content-center">
          {jobItems.map(item => {
            const { id, time, title } = item

            return (
              <div key={id} className="col-xl-3 grid-item cat2">
                <div className="jobitem mb-30 bg-white">
                  <div className="jobitem__title">
                    <h4 className="job-title-sm">
                      <a>{title}</a>
                    </h4>
                  </div>
                  <div className="jobitem__details">
                    <p className="mb-0">
                      <i className="fal fa-map-marker-alt" />
                      Cabanatuan City, NE
                    </p>
                    <p className="mb-0">
                      <i className="fal fa-clock" />
                      {time}
                    </p>
                  </div>
                  <div className="jobitem__button">
                    <Link href="mailto:techstacks.2022@gmail.com">
                      <button className="tp-btn-border-sm w-100">
                        Apply now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default JobArea
