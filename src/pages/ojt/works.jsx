import SEO from '../../components/seo'
import Wrapper from '../../layout/wrapper'
import OJTPortfolio from '../../components/ojt/ojt-portfolio'

const WorksPage = () => {
  return (
    <Wrapper>
      <SEO noindex={false} pageTitle="OJT Works" />

      <OJTPortfolio></OJTPortfolio>
    </Wrapper>
  )
}

export default WorksPage
