import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import InpageNavigation from '../../global-components/inpage-navigation/inpage-navigation.tsx';
import { INPAGE_NAVIGATIN_PROPS } from '../../mock-data/about-us/inpage-navigation-mock-data.ts';
import { LIST_OF_HODS_MOCK_DATA } from '../../mock-data/gmc-body/list-of-hods-mock-data.ts';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';

const ListOfHods = () => {
  return (
    <>
      <PageTitleBanner title='Honourable Hods' />
      <div className="container">
        <div className="flex flex-col md:flex-row items-start gap-5 my-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
            {LIST_OF_HODS_MOCK_DATA.map((each: any, index: number) => (
                <div
                  key={index}
                  className={`${
                    index === 0 ? 'lg:col-span-2' : ''
                  } border p-4 bg-white rounded-md shadow-md border-b-4 border-violet flex items-center justify-between`}
                >
                  <div>
                    <h1 className="text-lg font-semibold">{each.name}</h1>
                    <p className="text-gray-600 -mt-2"><i>{each.designation}</i></p>
                    <p className="text-gray-700 flex items-center gap-2">
                      <FontAwesomeIcon icon={faPhone} className=' size-3 text-gray-600' />
                      {each.mobile}
                    </p>
                    <p className="text-gray-700 flex items-center gap-2">
                      <FontAwesomeIcon icon={faEnvelope} className='size-3 text-gray-600' />
                      {each.email}
                    </p>
                  </div>
                  {each.image && (<div><img className='w-[60px]' src={each.image} alt={`Officer-${index}`}/></div>)}
                </div>
            ))}
          </div>
          <InpageNavigation
            inpageNavigationProps={INPAGE_NAVIGATIN_PROPS}
            className="hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default ListOfHods;
