import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Messenger from '../components/messenger'
import { store } from '../redux/store'

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Messenger />
    <Component {...pageProps} />
    <ToastContainer />
  </Provider>
)

export default MyApp
