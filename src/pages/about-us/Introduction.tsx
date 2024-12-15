import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';


const Introduction = () => {
  return (
    <div>
      <PageTitleBanner title='History/Introduction'/>
      <div className=' container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
          <div>
            <img className='rounded-xl' src='/assets/Jinnah_tower.jpg' alt='Jinnah_Tower'/>
          </div>
          <div className='bg-white h-screen flex-col items-center justify-center gap-4'>
            <p>Gurntur municipality was constituted in the year 1866 and the first eleted body was formed in 1881. The municipality was upgraded to II-Grade in 1891, I-Grade in 1917, Special Grade in 1952 and then to Selection Grade in 1960. In 1994, the Municipal Corporation was formed.</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Introduction;