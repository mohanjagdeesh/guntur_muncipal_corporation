import React, { useState } from 'react'
import { EASTREN_PARKS_MOCK_DATA, PATHIPADU_PARKS_MOCK_DATA, WESTREN_PARKS_MOCK_DATA } from '../../mock-data/about-us/historical-and-religious-places-mock-data.ts';
import ParksInfoCard from '../../global-components/details-info-card/parks-info-card.tsx';

const GmcParks = () => {
    const [eastrenParksActiveInfoCardIndex , setEasternParksActiveInfoCardIndex] = useState<number | undefined>(undefined);
    const [westernParksActiveInfoCardIndex , setWesternParksActiveInfoCardIndex] = useState<number | undefined>(undefined);
    const [prathipaduParksActiveInfoCardIndex , setPrathipaduParksActiveInfoCardIndex] = useState<number | undefined>(undefined);

  return (
    <>
        <h1 className='text-center text-violet text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold my-4'>Eastren Parks</h1>
        <div className='grid grid-cols-1 gap-4'>
                    {
                        EASTREN_PARKS_MOCK_DATA.sort((a,b)=> a.parkTitle < b.parkTitle ? -1 : 1).map((place , index)=>{
                            const handleInfoCardClick = () => {
                                if(eastrenParksActiveInfoCardIndex === index){
                                    setEasternParksActiveInfoCardIndex(undefined);
                                }else{
                                    setEasternParksActiveInfoCardIndex(index);
                                }
                                setWesternParksActiveInfoCardIndex(undefined);
                                setPrathipaduParksActiveInfoCardIndex(undefined);
                            }
                            return(
                            <ParksInfoCard key={index} parkTitle={place.parkTitle} extent={place.extent} wardNumber={place.wardNumber} images={place.images} location={place.location}  cardClick={handleInfoCardClick} index={index} activeInfoCardIndex={eastrenParksActiveInfoCardIndex} />
                            )
                        })
                    }
        </div>
        <hr className='my-4'/>
        <h1 className='text-center text-violet text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold mb-4'>Westren Parks</h1>
        <div className='grid grid-cols-1 gap-4'>
                    {
                        WESTREN_PARKS_MOCK_DATA.sort((a,b)=> a.parkTitle < b.parkTitle ? -1 : 1).map((place , index)=>{
                            const handleInfoCardClick = () => {
                                if(westernParksActiveInfoCardIndex === index){
                                    setWesternParksActiveInfoCardIndex(undefined);
                                }else{
                                    setWesternParksActiveInfoCardIndex(index);
                                }
                                setEasternParksActiveInfoCardIndex(undefined);
                                setPrathipaduParksActiveInfoCardIndex(undefined);
                            }
                            return(
                            <ParksInfoCard key={index} parkTitle={place.parkTitle} extent={place.extent} wardNumber={place.wardNumber} images={place.images} location={place.location}  cardClick={handleInfoCardClick} index={index} activeInfoCardIndex={westernParksActiveInfoCardIndex} />
                            )
                        })
                    }
        </div>
        <hr className='my-4'/>
        <h1 className='text-center text-violet text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold mb-4'>Prathipadu Parks</h1>
        <div className='grid grid-cols-1 gap-4'>
                    {
                        PATHIPADU_PARKS_MOCK_DATA.sort((a,b)=> a.parkTitle < b.parkTitle ? -1 : 1).map((place , index)=>{
                            const handleInfoCardClick = () => {
                                if(prathipaduParksActiveInfoCardIndex === index){
                                    setPrathipaduParksActiveInfoCardIndex(undefined);
                                }else{
                                    setPrathipaduParksActiveInfoCardIndex(index);
                                }
                                setEasternParksActiveInfoCardIndex(undefined);
                                setWesternParksActiveInfoCardIndex(undefined);
                            }
                            return(
                            <ParksInfoCard key={index} parkTitle={place.parkTitle} extent={place.extent} wardNumber={place.wardNumber} images={place.images} location={place.location}  cardClick={handleInfoCardClick} index={index} activeInfoCardIndex={prathipaduParksActiveInfoCardIndex} />
                            )
                        })
                    }
        </div>
    </>
  );
};

export default GmcParks;