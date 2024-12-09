import React from 'react'
import {DeputyMayorDetails} from '../../mock-data/gmc-body/gmc-body-mock-data.ts';
import GmcBody from '../../global-components/gmc-body/gmc-body.tsx';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
const DeputyMayor = () => {
  return (
    <>
      <PageTitleBanner title='Deputy Mayor' />
      <GmcBody name={DeputyMayorDetails.name} designation={DeputyMayorDetails.designation} email={DeputyMayorDetails.email} mobile={DeputyMayorDetails.mobile} image={DeputyMayorDetails.image} description={DeputyMayorDetails.description} />
    </>
  );
};

export default DeputyMayor;