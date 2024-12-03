import React from 'react'
import { IDetailsInfoCard } from '../../interfaces/IDetailsInfoCard.ts';
import DetailsInfoCard from '../../global-components/details-info-card/details-info-card.tsx';

const HistoricalAndReligiousPlacesMockup = ({title,data,activeInfoCardIndex , setActiveInfoCardIndex}:{title:string;data:IDetailsInfoCard[];activeInfoCardIndex:number | undefined;setActiveInfoCardIndex:React.Dispatch<React.SetStateAction<number | undefined>>}) => {
    return (
      <div className='container'>
          <div className='my-4'>
              <h1 className='text-center text-orange-peel text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold'>{title}</h1>
              <hr className='my-4'/>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  {
                      data.map((place , index)=>{
                          const handleInfoCardClick = () => {
                              if(activeInfoCardIndex === index){
                                  setActiveInfoCardIndex(undefined);
                              }else{
                                  setActiveInfoCardIndex(index);
                              }
                          }
                          return(
                          <DetailsInfoCard key={index} mainTitle={place.mainTitle} image={place.image} location={place.location} description={place.description} cardClick={handleInfoCardClick} index={index} activeInfoCardIndex={activeInfoCardIndex} />
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
}

export default HistoricalAndReligiousPlacesMockup