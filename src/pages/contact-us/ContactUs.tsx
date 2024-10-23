import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';

const ContactUs = () => {
  return (
    <div>
      <PageTitleBanner title='Contact Us'/>
      <div className='bg-white h-screen flex items-center justify-center'>
        <h1 className='text-violet text-center text-[3rem] font-bold'>Contact Us Content Will Go Here...</h1>
      </div>
    </div>
  )
}

export default ContactUs;