import React from 'react'
import { useLocation } from 'react-router-dom';
import Introduction from './Introduction';
import Profile from './Profile';
import Structure from './Structure';
import WardsAndZones from './WardsAndZones';
import Organization from './organization';
import Commissioner from './Commissioner';
import HistoricalAndReligiousPlaces from './HistoricalAndReligiousPlaces';
import ListOfHods from './ListOfHods';

const AboutUs = () => {
    const {pathname} = useLocation();
    const renderPage = ()=> {
        switch(pathname){
            case '/about-us':
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