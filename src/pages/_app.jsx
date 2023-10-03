import Script from 'next/script'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import CookieConsentComponent from '../components/cookie'
import Messenger from '../components/messenger'
import { store } from '../redux/store'

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => (
  <>
    <GoogleAnalytics trackPageViews />
    <Provider store={store}>
      <Messenger />
      <Script id="gtm-tech">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTNRQ3KQ');
        `}
      </Script>
      <Component {...pageProps} />
      <ToastContainer />
      <CookieConsentComponent />
    </Provider>
  </>
)

export default MyApp
