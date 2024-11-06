import React from 'react'
import { ILatestNews } from '../../interfaces/ILatestNews';

const RenderLatestNews = (content:ILatestNews) => {
    const {newsDate,newsDescription} = content;
    const [date,month,year] = newsDate.split('/')
  return (
    <div className=' flex items-center gap-4'>
        <div>
            <h1 className='bg-white h-10 w-20 flex items-center justify-center text-violet text-[1rem] font-light'>{date}</h1>
            <h1 className=' bg-black h-10 w-20 text-center text-white flex items-center justify-center font-light text-[1rem]'>{month} {year}</h1>
        </div>
        <div>
            <p className=' text-white'>{newsDescription}</p>
        </div>
    </div>
  )
}

export default RenderLatestNews;