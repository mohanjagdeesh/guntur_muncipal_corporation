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
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=u8U5cy4YdcomxtfA7"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
</>
  )
}

export default MapView;