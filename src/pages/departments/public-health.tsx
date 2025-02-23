import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { PUBLIC_HEALTH_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';


const PUBLIC_HEALTH_GRID_PROPS:IGridReport ={
    columns:STAFF_DETAILS_GRID_COLUMNS,
    data:[]
  };

const PublicHealth = () => {
  const [publicHealthGridProps , setPublicHealthGridProps] = useState<IGridReport>(PUBLIC_HEALTH_GRID_PROPS);
  useEffect(()=>{
    const fetchAdministrationStaffInfo = async () => {
      const response = await getStaffDetails('Public Health');
      setPublicHealthGridProps((prev)=> ({...prev , data:response}))
    };
    fetchAdministrationStaffInfo();
  },[]);
  return (
    <div>
        <PageTitleBanner title='PUBLIC HEALTH' />
        <div className='container'>
          <DepartmentsDataRenderer liRenderer={PUBLIC_HEALTH_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} departmentImage='/assets/public-health.jpg' />
          <GridReport {...publicHealthGridProps} />
          <p>By effectively performing these functions, the Public Health Department contributes to the overall health and well-being of the city's population.</p>
        </div>
    </div>
  )
}

export default PublicHealth;