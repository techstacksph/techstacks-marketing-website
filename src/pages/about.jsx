import React from 'react'
import AboutMain from '../components/about'
import SEO from '../components/seo'
import { Wrapper } from '../layout'

const index = () => (
  <Wrapper>
    <SEO noindex={false} pageTitle="About" />
    <AboutMain />
  </Wrapper>
)

export default index
