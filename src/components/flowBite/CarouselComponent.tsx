import React from 'react'
import { Carousel } from "flowbite-react";
import {ICarouselItems } from '../../interfaces/ICarousel';

const CarouselComponent:React.FC<ICarouselItems> = ({items}) => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {items.map((item)=>{
            return <img key={item.alt} src={item.image} alt={item.alt} />
          })}
        </Carousel>
      </div>
    )
}

export default CarouselComponent;