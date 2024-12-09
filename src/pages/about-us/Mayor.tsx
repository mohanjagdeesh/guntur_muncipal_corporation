import React from 'react'
import {MayorDetails} from '../../mock-data/gmc-body/gmc-body-mock-data.ts';
import GmcBody from '../../global-components/gmc-body/gmc-body.tsx';
const Mayor = () => {
  return (
    <GmcBody name={MayorDetails.name} designation={MayorDetails.designation} email={MayorDetails.email} mobile={MayorDetails.mobile} image={MayorDetails.image} description={MayorDetails.description} />
  );
};

export default Mayor;