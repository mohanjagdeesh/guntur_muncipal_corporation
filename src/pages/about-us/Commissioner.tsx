import React from 'react'
import {CommissionerDetails} from '../../mock-data/gmc-body/gmc-body-mock-data.ts';
import GmcBody from '../../global-components/gmc-body/gmc-body.tsx';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
const Commissioner = () => {
  return (
    <>
      <PageTitleBanner title='Commissioner' />
      <GmcBody name={CommissionerDetails.name} designation={CommissionerDetails.designation} email={CommissionerDetails.email} mobile={CommissionerDetails.mobile} image={CommissionerDetails.image} description={CommissionerDetails.description} />
    </>
  );
};

export default Commissioner;