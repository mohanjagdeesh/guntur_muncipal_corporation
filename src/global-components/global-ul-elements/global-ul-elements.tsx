import React from 'react'
import { IGlobalUlElement } from '../../interfaces/global-ul-element-interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';

const GlobalUlElements:React.FC<IGlobalUlElement> = ({liName,liIcon}) => {
    const faIcon = liIcon ? (FaIcons[liIcon as keyof typeof FaIcons] as FaIcons.IconDefinition) : null;
  return (
    <>
        <li className=' text-white text-[1rem]'><div className='flex items-center gap-6'>{faIcon && <span><FontAwesomeIcon icon={faIcon}/></span>}<p className=' leading-none'>{liName}</p> </div></li>
    </>
  )
}

export default GlobalUlElements;