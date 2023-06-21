import HomeMain from '../components/homes/home'
import SEO from '../components/seo'
import { Wrapper } from '../layout'

export default function index() {
  return (
    <Wrapper>
      <SEO noindex={false} pageTitle="Home" />

      <HomeMain />
    </Wrapper>
  )
}
