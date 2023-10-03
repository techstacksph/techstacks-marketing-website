import Head from 'next/head'
import React from 'react'
import AboutMain from '../components/about'
import SEO from '../components/seo'
import { Wrapper } from '../layout'

const index = () => (
  <>
    <Head>
      <script
        type="text/javascript"
        async=""
        src="https://www.googletagmanager.com/gtag/js?id=G-9K7DRGWDDH&l=dataLayer&cx=c"
      ></script>
    </Head>
    <Wrapper>
      <SEO noindex={false} pageTitle="About" />
      <AboutMain />
    </Wrapper>
  </>
)

export default index
