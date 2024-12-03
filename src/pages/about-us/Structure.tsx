import React from 'react';
import { ORGANIZATION_STRUCTURE } from '../../mock-data/about-us/organization-structure.ts';
import OrganisationalChart from '../../global-components/organisational-chart/organisational-chart.tsx';
import InpageNavigation from '../../global-components/inpage-navigation/inpage-navigation.tsx';
import { INPAGE_NAVIGATIN_PROPS } from '../../mock-data/about-us/inpage-navigation-mock-data.ts';

const Structure = () => {
    return (
       <div className='container'>
          <div className='md:flex md:items-start md:justify-between gap-5 my-4'>
            <OrganisationalChart data={ORGANIZATION_STRUCTURE} />
            <InpageNavigation inpageNavigationProps={INPAGE_NAVIGATIN_PROPS} className='hidden md:block'/>
          </div>
       </div>
      );
}

export default Structure;