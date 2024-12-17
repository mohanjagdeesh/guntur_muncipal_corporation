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
            <p>The name originated from the term "Garthaputi" the city of craters. Having very ancient history with Indian epics, the place gave birth to many noted personalities of india. It is one of the oldest municipalities having been constituted in AD 1866. Guntur is ofcourse called as the educational capital of A.P. The region is also identified as a transportation and textile hub in india.</p>
            <p>Guntur is located in the northeastern part of Andhra Pradesh state, in the Krishna River delta. The Krishna River forms the northeastern and eastern boundary of the district,separating Guntur district from Krishna District. The district is bounded on the southeast by the bay of Bengal,on the south by Prakasam District,on the west by Mahbubnagar District , and on the northwest by Nalgonda District.</p>
            <p>Paddy , tobacco , cotton , chillies  and turmeric are the main agricultural products cultivated in the district.</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Introduction;