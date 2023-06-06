import { FooterTwo, Header, Wrapper } from '../layout'
import CookieConsentComponent from '../components/cookie'
import PrivacyPolicy from '../components/privacy-policy'

export default function PrivacyPolicyPage() {
  return (
    <Wrapper>
      <Header />
      <PrivacyPolicy />
      <FooterTwo />
    </Wrapper>
  )
}
