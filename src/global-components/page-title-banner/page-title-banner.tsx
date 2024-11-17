import React from 'react'

const PageTitleBanner = ({title}:{title:string}) => {
  return (
    <div className='bg-violet h-[150px] flex items-center justify-center opacity-80'>
        <div className='container'>
            <h1 className=' text-orange-peel text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold text-center leading-none'>{title}</h1>
        </div>
    </div>
  )
}

export default PageTitleBanner;