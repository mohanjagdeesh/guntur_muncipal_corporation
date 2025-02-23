import React from 'react'
import { IRenderListItems } from '../../interfaces/IRenderListItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RenderListItems = ({title,liData,addClass,liClass,titleClass}:IRenderListItems) => {
  return (
    <div className={`${addClass ? addClass : ''}`}>
        {title && <h1 className={`${titleClass ? titleClass : ''} text-[0.8rem] md:text-[1rem] font-bold leading-none my-4 underline`}>{title}</h1>}
        <ul className=' list-none'>
            {liData?.map((li,index)=>(
                <li key={index} className={`${liClass ? liClass : ''} flex items-start text-[0.8rem] md:text-[1rem] font-light leading-tight text-justify mt-2`}>
                <FontAwesomeIcon icon={faArrowRight} className="mt-1 mr-2 text-orange-peel" />
                <div className="flex-1">
                  {li.title && <span className="font-bold">{li.title} : </span>}
                  <span>{li.subTitle}</span>
                  {li.subListItems && li.subListItems.map((subLi, index) => (
                    <p key={index} className="pl-6 font-bold">{`${index + 1}) ${subLi.title}`} : 
                      <span className="font-light"> {subLi.subTitle}</span>
                    </p>
                  ))}
                </div>
              </li>
              
            ))}
        </ul>
    </div>
  );
};

export default RenderListItems;