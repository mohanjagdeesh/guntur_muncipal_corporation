import React from 'react';
import { IParksInfoCard } from '../../interfaces/IDetailsInfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CarouselComponent from '../../components/flowBite/CarouselComponent.tsx';

const ParksInfoCard = ({ parkTitle , images , location, wardNumber , extent , activeInfoCardIndex , index , cardClick}: IParksInfoCard) => {
  const isActive = activeInfoCardIndex === index;

  return (
    <div 
    className={`border-2 border-violet rounded-lg p-4 cursor-pointer overflow-hidden`}
    style={{ maxHeight: isActive ? '500px' : 'fit-content', transition: 'max-height 0.3s ease' }}
    >
      <div onClick={cardClick} className="flex items-center justify-between">
        <h1 className="text-[1rem] md:text-[1.2rem] font-semibold">{parkTitle}</h1>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="lg"
          className={`${isActive ? 'rotate-180' : 'rotate-0'} duration-700`}
        />
      </div>
      {isActive && (
        <div className="flex flex-col md:items-center justify-center md:flex-row my-4 gap-4">
          <CarouselComponent items={images ?? []} className='h-[200px] w-[350px]' />
          <div className='flex flex-col gap-2'>
            <h1 className='text-violet leading-none'>
              <span className='text-orange-peel font-bold'>Location:<br/></span>
              {location}
            </h1>
            <h1 className='text-violet leading-none'>
              <span className='text-orange-peel font-bold'>Extent : </span>
              {extent}
            </h1>
            <h1 className='text-violet leading-none'>
              <span className='text-orange-peel font-bold'>Ward Number : </span>
              {wardNumber}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParksInfoCard;
