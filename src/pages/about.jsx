import React from 'react'
import SEO from '../components/seo'
import { Wrapper } from '../layout'
import AboutMain from '../components/about'

const index = () => (
  <Wrapper>
    <SEO noindex={false} pageTitle="About" />
    <AboutMain />
  </Wrapper>
)

export default index
