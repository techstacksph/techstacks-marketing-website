import Link from 'next/link'
import React from 'react'

const services_contents = {
  shapes: ['bp-chose-6.1.png', 'hero-shape-5.1.png'],
  subtitle: 'Who we are',
  title:
    'We’re a team of developers and designers committed to help our clients stand out and take advantage of the web by creating beautiful, user-friendly, fast, secure, high converting, engaging websites.',
}

const FeatureItem = ({ title, subtitle, color }) => (
  <div className="col-xl-3 col-lg-3 col-md-6">
    <div className="acfeature mb-50">
      <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`} />
      <div className="acfeature__item">
        <h3 className="ac-feature-sm-title">
          <Link href="/about-me">
            <a>{title}</a>
          </Link>
        </h3>
        <p>{subtitle}</p>
      </div>
    </div>
  </div>
)

const FeatureArea = () => (
  <div className="pt-60 ac-feature-area">
    <div className="tp-service-area pb-90 p-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle">{services_contents.subtitle}</h5>
              <h3 className="tp-title-md text-black">
                {services_contents.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="text-center pb-10">
        <h5 className="tp-subtitle">Our Process</h5>
      </div>
      <div className="mt-60 ac-feature-border-top">
        <div className="row">
          <FeatureItem
            title="Planning & Ideation"
            subtitle="Start with UI/UX. Wireframes and high-fidelity design"
          />
          <FeatureItem
            title="Design Process"
            color={'2'}
            subtitle="Design system, blueprints, wireframes, prototypes, and hi-fidelity designs"
          />
          <FeatureItem
            title="Development"
            color={'3'}
            subtitle="Dedicated full-stack dev team. Incremental builds, CI/CD"
          />
          <FeatureItem
            title="Optimize & Scale"
            color={'4'}
            subtitle="Evaluate post-deploy performance and SEO score, optimize, and scale."
          />
        </div>
      </div>
    </div>
  </div>
)

export default FeatureArea
