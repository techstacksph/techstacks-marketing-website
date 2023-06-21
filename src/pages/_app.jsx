import { GoogleAnalytics } from 'nextjs-google-analytics'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Messenger from '../components/messenger'
import { store } from '../redux/store'
import CookieConsentComponent from '../components/cookie'

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => (
  <>
    <GoogleAnalytics trackPageViews />
    <Provider store={store}>
      <Messenger />
      <Component {...pageProps} />
      <ToastContainer />
      <CookieConsentComponent />
    </Provider>
  </>
)

export default MyApp
