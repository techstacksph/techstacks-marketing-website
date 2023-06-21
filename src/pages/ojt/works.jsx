import SEO from '../../components/seo'
import Wrapper from '../../layout/wrapper'
import HeaderWithSlider from '../../components/ojt/ojt.header'
import OJTWorks from '../../components/ojt/ojt-works'

const WorksPage = () => {
  return (
    <Wrapper>
      <SEO noindex={false} pageTitle="OJT Works" />
      <HeaderWithSlider></HeaderWithSlider>
      <OJTWorks />
    </Wrapper>
  )
}

export default WorksPage
