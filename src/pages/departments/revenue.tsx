import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { REVENUE_FM_OF_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';
import TitleGridRenderer from '../../global-components/title-grid-renderer/title-grid-renderer.tsx';
import { REVENUE_GRIDS_MOCK_DATA } from './revenue/revenue-department-mock-data.tsx';


const REVENUE_FM_OF_GRID_PROPS:IGridReport ={
    columns:STAFF_DETAILS_GRID_COLUMNS,
    data:[],
  };

const Revenue = () => {
  const [revenueDeptStaffGridProps , setRevenueDeptGridProps] = useState<IGridReport>(REVENUE_FM_OF_GRID_PROPS);
  useEffect(()=>{
    const fetchAdministrationStaffInfo = async () => {
      const response = await getStaffDetails('Revenue');
      setRevenueDeptGridProps((prev)=> ({...prev , data:response}))
    };
    fetchAdministrationStaffInfo();
  },[]);
  return (
    <div>
        <PageTitleBanner title='REVENUE' />
        <div className='container'>
          <DepartmentsDataRenderer liRenderer={REVENUE_FM_OF_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} departmentImage='/assets/revenue.jpg' />
          <hr className=' border-[1px] border-violet my-3'/>
          <div className=' flex flex-col gap-4'>
            {
            REVENUE_GRIDS_MOCK_DATA.map((eachGrid) => <TitleGridRenderer {...eachGrid} />)
            }
          </div>
          <GridReport {...revenueDeptStaffGridProps} />
        </div>
    </div>
  )
}

export default Revenue;