import React from 'react'

const PageTitleBanner = ({title}:{title:string}) => {
  return (
    <div className='bg-violet h-[70px] md:h-[90px] lg:h-[100px] flex items-center justify-center opacity-80'>
        <div className='container'>
            <h1 className=' text-orange-peel text-[1.5rem] lg:text-[2.2rem] font-bold text-center lg:text-left leading-none'>{title}</h1>
        </div>
    </div>
  )
}

export default PageTitleBanner;