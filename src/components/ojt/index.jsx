import { useEffect } from 'react'
import { FooterTwo, HeaderSix, Wrapper } from '../../layout'

import { animationCreate } from '../../utils/utils'
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import OjtHeroArea from './ojt-hero'
import ServiceAreaOjt from './ojt-benefits'
import OjtCycleArea from './ojt-cycle'

const OjtCorner = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500)
  }, [])

  return (
    <Wrapper>
      <HeaderSix />
      {/* <Breadcrumb title="Kickstart your journey and build your career in Web Development with Techstacks OJT Program" /> */}
      <OjtHeroArea />
      <ServiceAreaOjt />
      <OjtCycleArea />
      <FooterTwo />
    </Wrapper>
  )
}

export default OjtCorner
