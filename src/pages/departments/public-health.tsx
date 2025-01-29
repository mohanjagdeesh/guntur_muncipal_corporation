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
          <DepartmentsDataRenderer description={`The Public Health Department in Municipal Corporation plays a crucial role in safeguarding Public Health and ensuring a healthy environment for citizens. Here are its key functions.Effective Sanitation and Waste Management
          Improper waste management contributes to the spread of communicable diseases and poses a significant threat to the environment. Hence, the Public Health Department of the Municipal Corporation ensures efficient sanitation and waste management through source segregation, regular collection with proper bins, and transportation to disposal or recycling facilities. Organic waste is composted, while non-recyclable waste is sent to sanitary landfills or waste-to-energy plants. Recycling programs and public awareness campaigns promote responsible waste practices, supported by advanced technologies and strict monitoring for compliance. Prioritizing worker safety and adopting sustainable practices like the circular economy further enhance the system’s efficiency and impact.`} liRenderer={PUBLIC_HEALTH_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} departmentImage='/assets/public-health.jpg' />
          <GridReport {...publicHealthGridProps} />
          <p>By effectively performing these functions, the Public Health Department contributes to the overall health and well-being of the city's population.</p>
        </div>
    </div>
  )
}

export default PublicHealth;