import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { REVENUE_FM_OF_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';


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
          <DepartmentsDataRenderer description={`The Revenue Department in a Municipal Corporation plays a crucial role in generating revenue for the corporation and managing its financial resources.`} liRenderer={REVENUE_FM_OF_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} departmentImage='/assets/revenue.jpg' />
          <GridReport {...revenueDeptStaffGridProps} />
          <p>By effectively performing these functions, the Revenue Department contributes to the financial sustainability of the Municipal Corporation and helps in providing essential services to the citizens.</p>
        </div>
    </div>
  )
}

export default Revenue;