import SEO from '../../components/seo'
import Wrapper from '../../layout/wrapper'
import OJTPortfolio from '../../components/ojt/ojt-portfolio'
import HeaderWithSlider from '../../components/ojt/ojt.header'

const WorksPage = () => {
  return (
    <Wrapper>
      <SEO noindex={false} pageTitle="OJT Works" />
      <HeaderWithSlider></HeaderWithSlider>
      <OJTPortfolio></OJTPortfolio>

    </Wrapper>
  )
}

export default WorksPage
