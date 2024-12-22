import React, { useState } from 'react'
import { ZONES_WARDS_TABS_MOCK_DATA } from '../../mock-data/about-us/zone-tabs-mock-data.ts';
import MapView from './MapView.tsx';
import InpageNavigation from '../../global-components/inpage-navigation/inpage-navigation.tsx';
import { INPAGE_NAVIGATIN_PROPS } from '../../mock-data/about-us/inpage-navigation-mock-data.ts';
import GridReport from '../../components/grid/GridReport.tsx';
import { EAST_ZONE_WARD_DATA, PRATHIPADU_WARD_DATA, WARDS_ZONES_HEADERS_MOCK_DATA, WEST_ZONE_WARD_DATA } from '../../mock-data/about-us/wards-zones-mock-data.ts';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';

const WardsAndZones = () => {
    const [selectedTabIndex , setSelectedTabIndex] = useState<number | undefined>(0);


    const renderTabContent = (index:number | undefined) => {
        switch (index){
            case 0:
                return(
                    <GridReport {...WARDS_ZONES_HEADERS_MOCK_DATA} data={EAST_ZONE_WARD_DATA}  />
                );
            case 1:
                return(
                    <GridReport {...{...WARDS_ZONES_HEADERS_MOCK_DATA,data:WEST_ZONE_WARD_DATA}} />
                );
            case 2:
                return(
                    <GridReport {...WARDS_ZONES_HEADERS_MOCK_DATA} data={PRATHIPADU_WARD_DATA} />
                );
            case 3:
                return(
                    <MapView/>
                )
            default :
                return null;
        }
    }
  return (
    <>
        <PageTitleBanner title='Wards and Zones' />
        <div className='container'>
            <div className='md:flex md:items-start md:justify-between'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mt-4'>
                    {
                        ZONES_WARDS_TABS_MOCK_DATA.map((tab,index)=>(
                            <div key={index} onClick={()=>setSelectedTabIndex(index)} className={`bg-gray-200 shadow-md p-3 rounded-md cursor-pointer hover:bg-orange-peel ${index === selectedTabIndex ? 'bg-orange-peel ' :''}`}>
                                <h1 className={`text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-violet font-bold`}>{tab.tabTitle}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                {renderTabContent(selectedTabIndex)}
            </div>
        </div>
    </>
  )
}

export default WardsAndZones;