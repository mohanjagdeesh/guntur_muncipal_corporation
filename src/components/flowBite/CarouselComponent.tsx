import React from 'react'
import { Carousel } from "flowbite-react";
import {ICarouselItems } from '../../interfaces/ICarousel';

const CarouselComponent:React.FC<ICarouselItems> = ({items,className}) => {
    return (
        <div className={className}>
        <Carousel>
          {items.map((item)=>{
            return <img key={item.alt} src={item.image} alt={item.alt} />
          })}
        </Carousel>
      </div>
    )
}

export default CarouselComponent;