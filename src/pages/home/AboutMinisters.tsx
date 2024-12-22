import React from 'react'
import {IImageRank } from '../../interfaces/IImageRank';
import ImageRank from '../../global-components/image-rank/image-rank.tsx';
import { PEOPLE_CALCULATION_MOCK_DATA } from '../../mock-data/people-calculation-mock-data.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import {currencyConvertor} from '../../utils/Constants.tsx';

const ministersDetails:IImageRank[]=[
    {
        image:'assets/chief_minister_CBN.jpg',
        name:'Nara Chandrababu Naidu',
        rank:'Honble Chief Minister',
    },
    {
        image:'assets/Minister_Narayana.jpg',
        name:'Ponguru Narayana',
        rank:'Honble Minister for Muncipal Administration & Urban Development',
    },
]

const AboutMinisters = () => {
  return (
    <>
      <div className=' grid grid-cols-1 md:grid-cols-2 border-2 border-orange-peel pt-4 mb-4'>
      {ministersDetails.map((minister:IImageRank,index:number)=> {
          return <ImageRank key={index} image={minister.image} name={minister.name} rank={minister.rank} index={index} />
      })}
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {PEOPLE_CALCULATION_MOCK_DATA.map((each,index)=> {
            const {iconName,value,unit}= each;
            return(
              <div key={index} className='border-2 border-boulder flex flex-col items-center justify-center h-[150px]'>
                <FontAwesomeIcon className=' text-orange-peel' icon={FaIcons[iconName]} size='2xl' />
                <h1 className=' text-[1.7rem] font-bold leading-none text-center mb-0 mt-1'>{currencyConvertor(value)}</h1>
                <p className='font-light text-[1rem] mt-0'>{unit}</p>
            </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AboutMinisters;