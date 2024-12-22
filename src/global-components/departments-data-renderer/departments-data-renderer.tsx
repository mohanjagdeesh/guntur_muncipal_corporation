import React from 'react'
import { IDepartmentsDataRenderer } from '../../interfaces/IDepartmentsDataRenderer';

const DepartmentsDataRenderer = ({description,liRenderer,dataGrid,gridDescription,departmentImage}:IDepartmentsDataRenderer) => {
  return (
    <div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 bg-blue-200 p-4 mt-2'>
            {departmentImage && <img className='h-[200px] md:h-[350px] my-4' src={departmentImage} alt='Department'  />}
            <p className=' text-[0.8rem] md:text-[1.2rem] leading-tight mb-3 text-justify h-full flex items-center justify-center'>{description}</p>
          </div>
          {liRenderer}
        </div>
        {dataGrid}
        <p>{gridDescription}</p>
    </div>
  );
};

export default DepartmentsDataRenderer;