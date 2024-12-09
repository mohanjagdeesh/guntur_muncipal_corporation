import React, { useState } from 'react'
import { HISTORICAL_PLACES_MOCK_DATA, RELIGIOUS_PLACES_MOCK_DATA } from '../../mock-data/about-us/historical-and-religious-places-mock-data.ts';
import DetailsInfoCard from '../../global-components/details-info-card/details-info-card.tsx';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';

const HistoricalAndReligiousPlaces = () => {
    const [activeInfoCardIndex , setActiveInfoCardIndex] = useState<number | undefined>(undefined);
  return (
    <>
        <PageTitleBanner title='Historical And Religious Places' />
        <div className='container'>
            <div className='my-4'>
                <h1 className='text-center text-orange-peel text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold'>Historical Places</h1>
                <hr className='my-4'/>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        HISTORICAL_PLACES_MOCK_DATA.map((place , index)=>{
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
            <div className='my-4'>
                <h1 className='text-center text-orange-peel text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold'>Religious Places</h1>
                <hr className='my-4'/>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        RELIGIOUS_PLACES_MOCK_DATA.map((place , index)=>{
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
    </>
  )
}

export default HistoricalAndReligiousPlaces;