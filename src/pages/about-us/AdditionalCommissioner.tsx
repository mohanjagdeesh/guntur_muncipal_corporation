import React from 'react'
import {AdditionalCommissionerDetails} from '../../mock-data/gmc-body/gmc-body-mock-data.ts';
import GmcBody from '../../global-components/gmc-body/gmc-body.tsx';
const AdditionalCommissioner = () => {
  return (
    <GmcBody name={AdditionalCommissionerDetails.name} designation={AdditionalCommissionerDetails.designation} email={AdditionalCommissionerDetails.email} mobile={AdditionalCommissionerDetails.mobile} image={AdditionalCommissionerDetails.image} description={AdditionalCommissionerDetails.description} />
  );
};

export default AdditionalCommissioner;