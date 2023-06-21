import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

const CookieConsentComponent = () => (
  <CookieConsent
    location="bottom"
    buttonText="I understand!"
    cookieName="techstacks-cookie"
    style={{
      background: '#292930',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    buttonStyle={{
      background: '#21cd9c',
      color: '#000',
      fontSize: '14px',
      borderRadius: '8px',
      fontWeight: 400,
      height: '34px',
      alignSelf: 'center',
    }}
    expires={150}
  >
    <p className="text-white m-0" style={{ fontSize: 16 }}>
      We use cookies to enhance the user experience. By using our website, you
      agree to our{' '}
      <span style={{ color: '#21cd9c', fontWeight: 'bold' }}>
        <Link href="/privacy-policy">Privacy Policy.</Link>
      </span>
    </p>
  </CookieConsent>
)

export default CookieConsentComponent
