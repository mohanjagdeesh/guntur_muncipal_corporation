import { Button } from 'flowbite-react';
import React from 'react'
import AboutMinisters from './AboutMinisters.tsx';

const AboutMuncipality = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
        <div>
            <h1 className=' text-black text-[2rem] font-semibold leading-none'>Welcome To Guntur Muncipal Corporation</h1>
            <p className='text-black text-[1rem] font-light text-left my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum possimus recusandae quibusdam magni vitae doloribus fugit nostrum. In culpa nostrum suscipit consequuntur adipisci nesciunt, 
        harum officiis similique aperiam, debitis atque dolorum voluptas eligendi odit quam, perspiciatis possimus eos porro voluptatibus dolore?
         Odit quis necessitatibus sapiente deserunt quo labore natus nostrum laudantium, sed fugiat inventore dicta nulla, incidunt error aspernatur?
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum possimus recusandae quibusdam magni vitae doloribus fugit nostrum. In culpa nostrum suscipit consequuntur adipisci nesciunt, 
        harum officiis similique aperiam, debitis atque dolorum voluptas eligendi odit quam, perspiciatis possimus eos porro voluptatibus dolore?
         Odit quis necessitatibus sapiente deserunt quo labore natus nostrum laudantium, sed fugiat inventore dicta nulla, incidunt error aspernatur?
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