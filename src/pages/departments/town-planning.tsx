import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { TOWN_PLANNING_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';


const REVENUE_FM_OF_GRID_PROPS:IGridReport ={
    columns:STAFF_DETAILS_GRID_COLUMNS,
    data:[]
  };

const TownPlanning = () => {
  const [townPlanningStaffGridProps , setTownPlanningGridProps] = useState<IGridReport>(REVENUE_FM_OF_GRID_PROPS);
  useEffect(()=>{
    const fetchAdministrationStaffInfo = async () => {
      const response = await getStaffDetails('Town Planning');
      setTownPlanningGridProps((prev)=> ({...prev , data:response}))
    };
    fetchAdministrationStaffInfo();
  },[]);
  return (
    <div>
        <PageTitleBanner title='TOWN PLANNING' />
        <div className='container'>
          <DepartmentsDataRenderer 
            description={`The Town Planning Department in a Municipal Corporation plays a crucial role in shaping the physical development of a city.`} 
            liRenderer={TOWN_PLANNING_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} 
            departmentImage='/assets/town-planning.jpg'
           />
          <GridReport {...townPlanningStaffGridProps} />
          <p>By effectively performing these functions, the Town Planning Department contributes to the sustainable development of the city, ensuring a livable and aesthetically pleasing environment for its residents.</p>
        </div>
    </div>
  )
}

export default TownPlanning;