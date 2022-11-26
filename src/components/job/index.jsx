import React, { useEffect } from 'react'
import { FooterTwo, HeaderSix, Wrapper } from '../../layout'
import { animationCreate } from '../../utils/utils'
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import JobArea from './job-area'
import FeatureArea from './feature-area'

const Job = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500)
  }, [])

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title="Join us" />
      <FeatureArea />
      <JobArea />
      <FooterTwo />
    </Wrapper>
  )
}

export default Job
