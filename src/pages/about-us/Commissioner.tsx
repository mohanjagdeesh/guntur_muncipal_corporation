import React from 'react'
import {CommissionerDetails} from '../../mock-data/gmc-body/gmc-body-mock-data.ts';
import GmcBody from '../../global-components/gmc-body/gmc-body.tsx';
const Commissioner = () => {
  return (
    <GmcBody name={CommissionerDetails.name} designation={CommissionerDetails.designation} email={CommissionerDetails.email} mobile={CommissionerDetails.mobile} image={CommissionerDetails.image} description={CommissionerDetails.description} />
  );
};

export default Commissioner;