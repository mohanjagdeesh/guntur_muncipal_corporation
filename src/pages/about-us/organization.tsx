import React from 'react';
import { ORGANIZATION_MOCK_DATA } from '../../mock-data/about-us/organizations-mock-data.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import InpageNavigation from '../../global-components/inpage-navigation/inpage-navigation.tsx';
import { INPAGE_NAVIGATIN_PROPS } from '../../mock-data/about-us/inpage-navigation-mock-data.ts';

const Organization = () => {
  return (
    <div className='container'>
        <div className=' flex items-start gap-5 mt-4'>
            <div>
                <h1 className=' text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold text-black'>Guntur Muncipal Corporation</h1>
                <p className=' text-[1rem] font-light text-black'>
                Guntur Municipal Corporation is 1st largest ULB in the Guntur District of A.P. it is spread over an area of  159.4 km2 (65.02 sq mi) with a population of 7,43,354 (2011 census). The sex ratio is 999 females per 1000 males. The literacy rates 66.08%, 69.46% of the male population and 62.69 % of the female population are literate. The city limits were expanded by merging the ten surrounding villages into the corporation. There exists 57 political divisions post merger of villages into the corporation.   
                </p>
                <p className=' text-[1rem] font-light text-black my-5'>
                Guntur is renowned for its significant contributions to agriculture, particularly for chillies, cotton, and tobacco. It boasts the largest chilli-market yard in Asia, making it a key player in the spice trade.
                </p>
                <p className=' text-[1rem] font-light text-black'>
                The city is also a hub of education and healthcare, home to prestigious institutions like Guntur Medical College and Andhra Christian College, along with the well-known Government Hospital. These elements highlight Guntur's blend of agricultural prominence, educational and medical excellence.
                </p>
            </div>
            <InpageNavigation inpageNavigationProps={INPAGE_NAVIGATIN_PROPS} className='hidden md:block'/>
        </div>
        <div className=' grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-4 my-4'>
            {
              ORGANIZATION_MOCK_DATA.map((org,index)=>(
                <div key={index} className=' border-2 border-violet rounded-md flex flex-col items-center justify-center py-4 group hover:bg-orange-peel'>
                  <FontAwesomeIcon icon={FaIcons[org.iconName]} size='2xl' className=' text-orange-peel group-hover:text-violet' />
                  <p className='text-center leading-none mt-2 text-violet group-hover:text-white'>{org.iconTitle}</p>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Organization