import Link from 'next/link'
import React from 'react'
import { services_data } from '../../../data'
import SingleServiceFour from '../../common/single-service-4'

const services_items = services_data.filter(ser => ser.home_3)

const Services = () => (
  <div className="tp-service-area pt-125 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="tp-service-section-box text-center pb-35">
            <h5 className="tp-subtitle">Work with us</h5>
            <h2 className="tp-title">
              Start growing&nbsp;with&nbsp;
              <span className="tp-section-highlight">
                <svg
                  width="290"
                  height="11"
                  viewBox="0 0 290 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L290 11H0V0Z" fill="#FFDC60" />
                </svg>
                Techstacks
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row gx-17">
        {services_items.map((ser, i) => {
          return <SingleServiceFour key={i} service={ser} m={true} />
        })}
      </div>
    </div>
  </div>
)

export default Services
