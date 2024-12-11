import React from 'react'
import {DeputyMayorDetails} from '../../mock-data/gmc-body/gmc-body-mock-data.ts';
import GmcBody from '../../global-components/gmc-body/gmc-body.tsx';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
const DeputyMayor = () => {
  return (
    <>
      <PageTitleBanner title='Deputy Mayor' />
      {DeputyMayorDetails.map((mayor)=> <GmcBody name={mayor.name} designation={mayor.designation} mobile={mayor.mobile} image={mayor.image} description={mayor.description}  />)}
    </>
  );
};

export default DeputyMayor;