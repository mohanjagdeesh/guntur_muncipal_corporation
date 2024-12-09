import React from 'react'
import {AdditionalCommissionerDetails} from '../../mock-data/gmc-body/gmc-body-mock-data.ts';
import GmcBody from '../../global-components/gmc-body/gmc-body.tsx';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
const AdditionalCommissioner = () => {
  return (
    <>
      <PageTitleBanner title='Additional Commissioner' />
      <GmcBody name={AdditionalCommissionerDetails.name} designation={AdditionalCommissionerDetails.designation} email={AdditionalCommissionerDetails.email} mobile={AdditionalCommissionerDetails.mobile} image={AdditionalCommissionerDetails.image} description={AdditionalCommissionerDetails.description} />
    </>
  );
};

export default AdditionalCommissioner;