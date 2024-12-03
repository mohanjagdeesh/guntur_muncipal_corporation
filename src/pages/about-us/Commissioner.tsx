import React from 'react'

const Commissioner = () => {
  return (
    <div className='container'>
        <div className='flex flex-col md:flex-row md:items-center md:gap-5 my-4'>
            <div className='w-[300px] md:w-[450px] lg:w-[600px]'>
                <img src='/assets/comissioner.jpg' alt='Comissiner'/>
            </div>
            <div className='mt-4 md:mt-0'>
                <h1 className=' text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-bold'>Name:- Sri P Sreenivasulu,I.A.S</h1>
                <p className=' text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold'>Designation:- Commissioner</p>
                <p className=' text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold'>Email:- mc.guntur@cdma.gov.in</p>
            </div>
        </div>
    </div>
  );
};

export default Commissioner;