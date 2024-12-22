import React from 'react'
import { IRenderListItems } from '../../interfaces/IRenderListItems'

const RenderListItems = ({title,liData,addClass}:IRenderListItems) => {
  return (
    <div className={addClass ? addClass : '' }>
        {title && <h1 className='text-[1rem] md:text-[1.5rem] font-bold leading-none'>{title} :-</h1>}
        <ul className=' list-disc pl-6'>
            {liData?.map((li)=>(
                <li className='text-[1rem] font-light leading-tight text-justify'>{li.title && <span className='font-bold'>{li.title}: </span>}{li.subTitle}</li>
            ))}
        </ul>
    </div>
  );
};

export default RenderListItems;