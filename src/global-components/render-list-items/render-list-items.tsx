import React from 'react'
import { IRenderListItems } from '../../interfaces/IRenderListItems'

const RenderListItems = ({title,liData,addClass}:IRenderListItems) => {
  return (
    <div className={addClass ? addClass : '' }>
        {title && <h1 className='text-[0.8rem] md:text-[1rem] font-bold leading-none my-4 underline'>{title}</h1>}
        <ul className=' list-none pl-6'>
            {liData?.map((li,index)=>(
                <li key={index} className='text-[0.8rem] md:text-[1rem] font-light leading-tight text-justify mt-2'>{li.title && <span className='font-bold'>{li.title}: </span>}<br/>{li.subTitle}</li>
            ))}
        </ul>
    </div>
  );
};

export default RenderListItems;