import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

const CookieConsentComponent = () => {
  return (
    <>
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
          borderRadius: '4px',
          fontWeight: 400,
          height: '34px',
          width: '120px',
          alignSelf: 'center',
        }}
        expires={150}
      >
        <p style={{ fontSize: '16px', lineHeight: '16px', color: '#fff' }}>
          Techstacks uses cookies!
        </p>
        <p style={{ fontSize: '16px', lineHeight: '16px', color: '#fff' }}>
          This website uses cookies to enhance the user experience. By using
          this website, you agree to our{' '}
          <span style={{ color: '#21cd9c' }}>
            <Link href="/privacy-policy">Privacy Policy.</Link>
          </span>
        </p>
      </CookieConsent>
    </>
  )
}

export default CookieConsentComponent
