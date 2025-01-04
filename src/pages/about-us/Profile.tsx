import React from 'react'
import InpageNavigation from '../../global-components/inpage-navigation/inpage-navigation.tsx'
import { INPAGE_NAVIGATIN_PROPS } from '../../mock-data/about-us/inpage-navigation-mock-data.ts'
import { ABOUT_GMC, GMC_COMPLETE_DATA } from '../../mock-data/about-us/about-gmc.ts';
import BarChart from './PopulationChart.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';


const Profile = () => {
  return (
    <>
        <PageTitleBanner title='Profile' />
        <div className=' container'>
            <div className='flex items-start justify-between gap-5 mt-4'>
                <div className=' flex flex-col lg:flex-row lg:gap-3'>
                    <img src='/assets/gmc_building.jpg' alt='Guntur-Junction' className='w-full lg:h-[280px] lg:w-[280px]' />
                    <ul className=' divide-y-[1px] my-4 lg:my-0'>
                        {
                            ABOUT_GMC.map((info,index)=>(
                                <li key={index} className=' py-1 flex items-center'>
                                    <p className=' w-[150px] md:w-[250px] lg:w-[150px] xl:w-[200px] break-words leading-tight text-orange-peel'>{info.title}</p>
                                    <p className=' mr-3'>{':'}</p>
                                    <p className=' break-words leading-tight text-violet'>{info.titleInfo}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <InpageNavigation inpageNavigationProps={INPAGE_NAVIGATIN_PROPS} className='hidden md:block'/>
            </div>
            <BarChart chartData={[
                { primary: "Male", secondary: 2440521,fill:'#ffff00' },
                { primary: "Female", secondary: 2250279,fill:'#f576f7' },
                { primary: "Total", secondary: 4690800,fill:'#00ff00' },
                ]} label='Population' />
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {
                    GMC_COMPLETE_DATA.map((data,index)=> (
                        <div key={index} className=' shadow-lg border-[1px] border-orange-peel rounded-md flex items-center justify-between p-3 hover:bg-orange-peel hover:border-violet'>
                            <FontAwesomeIcon icon={FaIcons[data.icon]} size='xl' className=' text-violet' />
                            <p className=' text-[1rem] font-semibold text-violet'>{data.title}</p>
                            <p className=' text-[1rem] font-bold text-violet'>{data.nos}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  );
};

export default Profile;