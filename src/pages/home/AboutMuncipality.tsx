import { Button } from 'flowbite-react';
import React from 'react'
import AboutMinisters from './AboutMinisters.tsx';

const AboutMuncipality = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
        <div>
            <h1 className=' text-black text-[2rem] font-semibold leading-none'>Welcome To Guntur Muncipal Corporation</h1>
            <p className='text-black text-[1rem] font-light text-left my-3'>Guntur, the third-largest city in Andhra Pradesh, is often referred to as the "Mirchi Capital" of India due to its prominence as the largest red chili market in Asia. According to the 2011 Census, Guntur had a population of 743,354 spread across 159.46 square kilometers, resulting in a high population density of 4,676 people per square kilometer. By 2024, the population is estimated to have exceeded 1 million, reflecting significant urban growth.
This rapid development is largely attributed to Guntur's proximity to Amravati, Andhra Pradesh's new capital, located just 25 kilometers away. The city's inclusion in the Capital Region Development Authority (CRDA), which covers the Vijayawada-Amravati-Mangalagiri-Guntur metro region, has accelerated its urbanization and infrastructure growth.
         </p>
            <Button className=' bg-orange-peel text-white text-[2rem] font-bold'>Explore More</Button>
        </div>
        <div className='mx-auto lg:mx-0'>
            <AboutMinisters/>
        </div>
    </div>
  )
}

export default AboutMuncipality;