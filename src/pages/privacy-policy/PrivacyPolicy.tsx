import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';

const PrivacyPolicy = () => {
  return (
    <div>
      <PageTitleBanner title='Privacy Policy'/>
      <div className='bg-white h-screen flex items-center justify-center'>
        <h1 className='text-violet text-center text-[3rem] font-bold'>Privacy Policy Content Will Go Here...</h1>
      </div>
    </div>
  )
}

export default PrivacyPolicy;