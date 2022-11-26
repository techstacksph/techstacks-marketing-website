import React, { useEffect } from 'react'
import { Footer, Header, Wrapper } from '../../../layout'
import { animationCreate } from '../../../utils/utils'

import BrandArea from './brand-area'
import HeroArea from './hero-area'
import ServicesArea from './services-area'
import TestimonialArea from './testimonial-new'
import FeatureArea from './feature-area'

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500)
  }, [])

  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <BrandArea />
      <ServicesArea />
      <FeatureArea />
      <TestimonialArea />
      <Footer />
    </Wrapper>
  )
}

export default Home
