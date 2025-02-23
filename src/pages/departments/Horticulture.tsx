import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { HORTICULTURE_MOCK_DATA } from '../../mock-data/departments-contacts-mock-data.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';

const Horticulture = () => {
  return (
    <>
        <PageTitleBanner title='HORTICULTURE'/>
        <div className='container'>
        <DepartmentsDataRenderer  departmentImage='/assets/horticulture.jpg' />
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
        {
                    HORTICULTURE_MOCK_DATA.map((data,index)=> (
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
  )
}

export default Horticulture;