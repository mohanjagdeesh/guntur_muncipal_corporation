import React from 'react'
import { useLocation } from 'react-router-dom';
import Introduction from './Introduction.tsx';
import Profile from './Profile.tsx';
import Structure from './Structure.tsx';
import WardsAndZones from './WardsAndZones.tsx';
import Organization from './organization.tsx';
import Commissioner from './Commissioner.tsx';
import HistoricalAndReligiousPlaces from './HistoricalAndReligiousPlaces.tsx';
import ListOfHods from './ListOfHods.tsx';
import ParksList from './ParksList.tsx';
import Mayor from './Mayor.tsx';
import DeputyMayor from './DeputyMayor.tsx';
import AdditionalCommissioner from './AdditionalCommissioner.tsx';
import Corporators from './Corporators.tsx';


const AboutUs = () => {
    const {pathname} = useLocation();
    const renderPage = ()=> {
        switch(pathname){
            case '/about-us/introduction':
                return <Introduction/>;
            case '/about-us/organization':
                return<Organization/>;
            case '/about-us/profile':
                return <Profile/>;
            case '/about-us/structure':
                return <Structure/>;
            case '/about-us/commissioner':
                return <Commissioner/>
            case '/about-us/list-of-hods':
                return <ListOfHods/>;
            case '/about-us/religious-places':
                return <HistoricalAndReligiousPlaces/>;
            case '/about-us/wards-zones':
                return <WardsAndZones/>;
            case '/about-us/parks':
                return <ParksList/>
            case '/about-us/mayor':
                return <Mayor/>
            case '/about-us/deputy-mayor':
                return <DeputyMayor/>
            case '/about-us/additional-commissioner':
                return <AdditionalCommissioner/>
            case '/about-us/corporators':
                return <Corporators/>
            default:
                return <h1>OOPS....... Page Not Found</h1>;
        }
    }
  return (
    <>
        {renderPage()}
    </>
  );
};

export default AboutUs;