import { Wrapper } from '../layout'
import SEO from '../components/seo'
import OjtCorner from '../components/ojt'

export default function index() {
  return (
    <Wrapper>
      <SEO noindex={false} pageTitle="OJT Corner" />
      <OjtCorner />
    </Wrapper>
  )
}
