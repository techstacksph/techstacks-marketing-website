import { useEffect } from 'react'
import { FooterTwo, HeaderSix, Wrapper } from '../../layout'
import { animationCreate } from '../../utils/utils'
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import CtaTwo from '../common/cta/cta-2'
import FeatureArea from './feature-area'
import TeamArea from './team-area'

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500)
  }, [])

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title="About Us" />
      <FeatureArea />
      <TeamArea />
      <CtaTwo />
      <FooterTwo />
    </Wrapper>
  )
}

export default About
