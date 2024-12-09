import React from 'react'
import { IGmcBody } from '../../interfaces/IGmcBody';

const GmcBody = ({name,designation,email,mobile,description,image}:IGmcBody) => {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 my-4 bg-sea-shell py-3 px-4'>
            <div className='w-full'>
                <img src={image} alt={designation}/>
                <div className='mt-4'>
                  <p className=' text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-bold leading-none'>Name:- {name}</p>
                  <p className=' text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold'>Designation:- {designation}</p>
                  <p className=' text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold'>Email:- {email}</p>
                  <p className=' text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold'>Mobile:- {mobile}</p>
                </div>
            </div>
            <div className=' self-center mt-2 md:mt-0'>
              <p className='text-justify leading-none text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default GmcBody;