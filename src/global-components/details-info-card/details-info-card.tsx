import React from 'react';
import { IDetailsInfoCard } from '../../interfaces/IDetailsInfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DetailsInfoCard = ({ mainTitle, location, image, description, cardClick, index, activeInfoCardIndex }: IDetailsInfoCard) => {
  const isActive = activeInfoCardIndex === index;

  return (
    <div 
    className={`border-2 border-violet rounded-lg p-4 cursor-pointer overflow-hidden`}
    style={{ maxHeight: isActive ? '500px' : 'fit-content', transition: 'max-height 0.3s ease' }}
    >
      <div onClick={cardClick} className="flex items-center justify-between">
        <h1 className="text-[1rem] md:text-[1.2rem] font-semibold">{mainTitle}</h1>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="lg"
          className={`${isActive ? 'rotate-180' : 'rotate-0'} duration-700`}
        />
      </div>
      {isActive && (
        <div className="flex flex-col items-center justify-center md:flex-row my-4 gap-4">
          <img className="h-[200px] w-[200px] rounded-lg" src={image} alt="Place-Image" />
          <div>
            <h1 className='text-violet'>
              <span className='text-orange-peel font-bold'>Location: </span>
              {location}
            </h1>
            <h1 className='text-violet'>
              <span className='text-orange-peel font-bold'>Description: </span>
              {description}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsInfoCard;
