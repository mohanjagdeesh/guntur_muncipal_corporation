import React from 'react'

const PageTitleBanner = ({title}:{title:string}) => {
  return (
    <div className='bg-violet h-[150px] flex items-center justify-center opacity-80'>
        <div className='container'>
            <h1 className=' text-orange-peel text-[3rem] font-bold text-center'>{title}</h1>
        </div>
    </div>
  )
}

export default PageTitleBanner;