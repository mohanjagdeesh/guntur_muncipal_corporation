import React from 'react';
import { IGlobalUlElement } from '../../interfaces/global-ul-element-interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const GlobalUlElements: React.FC<IGlobalUlElement> = ({ liName, liIcon, liNavigation, liUrl,svgIcon , type,iconClass}) => {
  const faIcon = liIcon ? (FaIcons[liIcon as keyof typeof FaIcons] as FaIcons.IconDefinition) : null;
  
  // const navigate = useNavigate();

  // Handle internal navigation with `liNavigation`
  if (liNavigation) {
    return (
      <Link to={liNavigation}>
        <li
          role="button" // Makes it semantically clickable
          className="text-white text-[1rem] cursor-pointer" // `cursor-pointer` for better UX
        >
          <div className="flex items-center gap-6">
            {faIcon && (
              <span>
                <FontAwesomeIcon icon={faIcon} />
              </span>
            )}
            <p className="leading-none">{liName}</p>
          </div>
        </li>
      </Link>
    );
  }

  // Handle external URLs with `liUrl`
  if (liUrl) {
    return (
      <li className="text-white text-[1rem]">
        <a href={liUrl} target="_blank" rel="noreferrer" className="flex items-center gap-6">
          {faIcon && (
            <span>
              <FontAwesomeIcon icon={faIcon} />
            </span>
          )}
          <p className="leading-none">{liName}</p>
        </a>
      </li>
    );
  }

  // Fallback for when no navigation or URL is provided
  const numbers = liName?.split(',');
  
  return (
    <li className="text-white text-[1rem]">
      <div className="flex items-center gap-6 mt-2">
        {faIcon && (
          <span>
            <FontAwesomeIcon icon={faIcon} className={`${iconClass ? iconClass : ''}`} />
          </span>
        )}
        {svgIcon && (
          <span className='mt-2'>
            <img className='h-6 w-6' src={svgIcon} alt='Svg-Icon' />
          </span>
        )}
        {type === 'number' ? 
        <div>
          {numbers.map((number:string, index:number) => (
            <p key={index} className="leading-none mt-1">
              {number}
            </p>
          ))}
        </div> : <p className="leading-6">
              {liName}
            </p>}
      </div>
    </li>
  );
};

export default GlobalUlElements;
