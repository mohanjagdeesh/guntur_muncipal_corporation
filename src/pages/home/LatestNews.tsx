import React from 'react'

const LatestNews = () => {
  return (
    <div className='container'>
        <div className='bg-violet p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
            <div>
                <h1 className=' text-white font-bold text-[1.5rem] mb-4'>Image & Video Gallery</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <img src='assets/latest_news_1.jpeg' alt='latestNews1' />
                    <img src='assets/latest_news_2.jpeg' alt='latestNews1'/>
                    <img src='assets/latest_news_3.jpeg' alt='latestNews1'/>
                    <img src='assets/latest_news_4.jpeg' alt='latestNews1'/>
                </div>
                <h1 className=' text-white font-bold text-[1rem] text-right mt-2'>View More</h1>
            </div>
            <div>
            <iframe
            className=' h-[300px] lg:h-[250px] xl:h-[300px] w-full '
            src="https://www.youtube.com/embed/-dHDgmrGpqU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
            </div>
        </div>
    </div>
  )
}

export default LatestNews;