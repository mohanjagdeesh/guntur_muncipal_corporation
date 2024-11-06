import React from 'react'
import { HOME_RELATED_LINKS } from '../../mock-data/home-related-links.ts';
import { Card } from 'flowbite-react';

const RelatedLinks = () => {
  return (
    <div className='px-5 md:px-8 lg:px-14 xl:px-20'>
      <div className=' flex flex-col items-center justify-center'>
        <h1 className='text-black text-[1.5rem] text-center font-semibold inline-block relative'>
        Related Links
        <span className='block w-1/2 mx-auto border-b-2 border-orange-peel'></span>
        </h1>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-6 my-4'>
        {HOME_RELATED_LINKS.map((link,index)=> {
            return (
                <Card key={index} className=' flex items-center justify-center'>
              <a href={link.imageLink} target='_blank' rel='noreferrer'>
                  <img className='h-28' src={link.image} alt={`Related Link${index}`} />
              </a>
            </Card>
            )
        })}
      </div>
    </div>
  )
}

export default RelatedLinks;