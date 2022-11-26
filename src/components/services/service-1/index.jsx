import { useEffect } from 'react'
import { FooterFive, HeaderSix, Wrapper } from '../../../layout'
import { animationCreate } from '../../../utils/utils'
import Breadcrumb from '../../common/breadcrumb/breadcrumb'
import ClientFeedback from '../../homes/home/client-feedback'
import ServiceArea from './service-area'
import Services from '../../homes/home/services'
import PortfolioItems from './portfolio-items'

const Service = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500)
  }, [])

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title="Services" />
      <Services />
      <ServiceArea />
      <PortfolioItems />
      <ClientFeedback />
      <FooterFive />
    </Wrapper>
  )
}

export default Service
