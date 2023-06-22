import SEO from '../../components/seo'
import Wrapper from '../../layout/wrapper'
import HeaderWithSlider from '../../components/ojt/ojt.header'
import OJTWorks from '../../components/ojt/ojt-works'
import { FooterTwo, HeaderSix } from '../../layout'

const WorksPage = () => {
  return (
    <Wrapper>
      <SEO noindex={false} pageTitle="OJT Works" />
      <HeaderSix />
      <HeaderWithSlider></HeaderWithSlider>
      <OJTWorks />
      <FooterTwo />
    </Wrapper>
  )
}

export default WorksPage
