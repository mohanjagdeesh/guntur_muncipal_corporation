import React from 'react'

const MapView = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
      <img
        src='https://guntur-site-assets.s3.us-east-1.amazonaws.com/CONSTITUENCY_MAP_TOTAL.jpg'
        alt='GMC_MAP'
        className='border-2 border-violet object-contain h-[250px] md:h-[350px] lg:h-[500px] w-full'
      />
      <img
        src='https://guntur-site-assets.s3.us-east-1.amazonaws.com/GUNTUR_SECRETARIAT_MAP.jpg'
        alt='GMC_WARDS_MAP'
        className='border-2 border-violet object-contain h-[250px] md:h-[350px] lg:h-[500px] w-full'
      />
    </div>
    <div className=' h-[250px] md:h-[300px] lg:h-[350px] flex-1 mb-4'>
      <iframe className='mb-4' title='GMC_Wards' src="https://www.google.com/maps/d/embed?mid=119a-sP2p4IOY9x4cqTg1wjMQi1pXaSY&ehbc=2E312F" width="100%" height="480"/>
    </div>
</>
  )
}

export default MapView;