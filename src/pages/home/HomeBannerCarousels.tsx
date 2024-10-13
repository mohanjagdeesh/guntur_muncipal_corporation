import React from 'react'
import CarouselComponent from '../../components/flowBite/CarouselComponent.tsx'
import { ICarouselItems } from '../../interfaces/ICarousel'

const carouselItems:ICarouselItems = {
    items:[
        {
            image:'assets/carousel1.jpeg',
            alt:'building1',
        },
        {
            image:'assets/carousel2.jpeg',
            alt:'building2',
        },
        {
            image:'assets/carousel3.jpg',
            alt:'building3',
        },
        {
            image:'assets/carousel4.jpg',
            alt:'building4'
        },
    ]
}

const HomeBannerCarousels = () => {
  return (
    <CarouselComponent items={carouselItems.items} />
  )
}

export default HomeBannerCarousels