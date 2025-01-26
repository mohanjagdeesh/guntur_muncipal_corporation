import React from 'react'
import { Carousel } from "flowbite-react";
import {ICarouselItems } from '../../interfaces/ICarousel';

const CarouselComponent:React.FC<ICarouselItems> = ({items,className}) => {
    return (
        <div className={className}>
        <Carousel>
          {items.map((item,index)=>{
            return <img key={index} src={item} alt={`${item}-${index}`} className='h-full' />
          })}
        </Carousel>
      </div>
    )
}

export default CarouselComponent;