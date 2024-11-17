import React from 'react'
import { IDepartmentsDataRenderer } from '../../interfaces/IDepartmentsDataRenderer';

const DepartmentsDataRenderer = ({description,liRenderer,dataGrid,gridDescription,departmentImage}:IDepartmentsDataRenderer) => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-6'>
            {departmentImage && <img className='h-[200px] md:h-[350px] my-4' src={departmentImage} alt='Department'  />}
            <div>
                <p className=' text-[1rem] md:text-[1.5rem] leading-tight mb-3'>{description}</p>
                {liRenderer}
            </div>
        </div>
        {dataGrid}
        <p>{gridDescription}</p>
    </div>
  );
};

export default DepartmentsDataRenderer;