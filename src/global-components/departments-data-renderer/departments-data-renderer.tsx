import React from 'react'
import { IDepartmentsDataRenderer } from '../../interfaces/IDepartmentsDataRenderer';
import InpageNavigation from '../inpage-navigation/inpage-navigation.tsx';
import { DEPARTMENTS_INPAGE_NAV_LINKS } from '../../mock-data/about-us/inpage-navigation-mock-data.ts';

const DepartmentsDataRenderer = ({description,liRenderer,dataGrid,gridDescription,departmentImage,additionalInPageNavLinks}:IDepartmentsDataRenderer) => {
  return (
    <div>
        <div>
          <div className='flex gap-4'>
            <div className='bg-blue-200 p-4'>
              {departmentImage && <img className='h-[200px] md:h-[350px] my-4' src={departmentImage} alt='Department'  />}
              <p className=' text-[0.8rem] md:text-[1.2rem] font-light leading-tight mb-3 text-justify h-full flex items-center justify-center'>{description}</p>
            </div>
            <InpageNavigation inpageNavigationProps={[...additionalInPageNavLinks ?? [] , ...DEPARTMENTS_INPAGE_NAV_LINKS]} className='hidden md:block p-2'/>
          </div>
          {liRenderer}
        </div>
        {dataGrid}
        <p className='text-justify font-light'>{gridDescription}</p>
    </div>
  );
};

export default DepartmentsDataRenderer;