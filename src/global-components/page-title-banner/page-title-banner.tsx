import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const PageTitleBanner = ({title,tabsList,selectBoxTitle,setSelectBoxTitle}:{title:string,tabsList?:string[],selectBoxTitle?:string,setSelectBoxTitle?:React.Dispatch<React.SetStateAction<string>>}) => {
  const [checkboxClicked , setCheckboxClicked] = useState<boolean>(false);
  return (
    <div className='bg-violet min-h-[70px] md:min-h-[90px] lg:min-h-[100px] flex items-center justify-center opacity-80'>
        <div className='container'>
            <h1 className=' text-orange-peel text-[1.5rem] lg:text-[2.2rem] font-bold text-center md:text-left leading-none mt-2'>{title}</h1>
              {
              tabsList && 
                <div className=' relative my-4'>
                  <div onClick={()=>setCheckboxClicked((prev)=>!prev)} className='border-2 border-orange-peel bg-white h-12 rounded-lg w-full md:w-[350px] flex items-center justify-between cursor-pointer px-4'>
                    <h1 className=' font-semibold text-violet'>{selectBoxTitle}</h1>
                    <FontAwesomeIcon className={`size-4 text-violet transform transition-transform ${checkboxClicked ? 'rotate-180' : 'rotate-0'}`} icon={faChevronDown} />
                  </div>
                  <ul className=' bg-gray-700 rounded-lg w-full md:w-[350px] absolute top-14 divide-y-[1px] divide-orange-peel'>
                    {checkboxClicked && tabsList.map((eachTab , index)=> <li key={index} className='text-white p-2 cursor-pointer font-bold' onClick={()=>{setSelectBoxTitle?.(eachTab);setCheckboxClicked((prev)=>!prev)}}>{eachTab}</li>)}
                  </ul>
                </div>
              }
        </div>
    </div>
  )
}

export default PageTitleBanner;