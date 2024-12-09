import React from 'react'
import { IInpageNavigation } from '../../interfaces/IInpageNavigation'
import { useLocation } from 'react-router-dom'

const InpageNavigation = ({inpageNavigationProps,className}:IInpageNavigation) => {
    const {pathname} = useLocation();
  return (
    <div className={`${className} bg-gray-100`}>
        <ul className=' divide-y-[1px] w-[250px]'>
            {
                inpageNavigationProps.map((ipn,index)=><li 
                    className={` py-2 cursor-pointer text-[1rem] font-bold w-full break-words leading-none ${pathname === ipn.navLink ? 'border-l-8 border-orange-peel text-violet pl-3' : ''}`} 
                    key={index}><a href={ipn.navLink}>{ipn.navTitle}</a>
                </li>)
            }
        </ul>
    </div>
  )
}

export default InpageNavigation;