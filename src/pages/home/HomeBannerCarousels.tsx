import React from 'react'
import CarouselComponent from '../../components/flowBite/CarouselComponent.tsx'
import { ICarouselItems } from '../../interfaces/ICarousel'

const carouselItems:ICarouselItems = {
    items:[
        {
            image:'assets/banner1.jpg',
            alt:'building1',
        },
        {
            image:'assets/banner2.jpg',
            alt:'building2',
        },
        {
            image:'assets/banner3.jpg',
            alt:'building3',
        },
    ]
}

const HomeBannerCarousels = () => {
  return (
    // <CarouselComponent items={carouselItems.items} className='h-56 sm:h-64 xl:h-80 2xl:h-96 mb-4' />
    <video className='w-full' src='assets/videos/guntur_city_drone_view_.mp4' autoPlay loop muted playsInline />

  )
}

export default HomeBannerCarousels