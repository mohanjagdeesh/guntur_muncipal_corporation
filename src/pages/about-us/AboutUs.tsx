import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';

const About = () => {
  return (
    <div>
      <PageTitleBanner title='About Us'/>
      <div className='bg-white h-screen flex items-center justify-center'>
        <h1 className='text-violet text-center text-[3rem] font-bold'>About Us Content Will Go Here...</h1>
      </div>
    </div>
  )
}

export default About;