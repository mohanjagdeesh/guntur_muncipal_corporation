import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { IGridReport } from '../../interfaces/IGridReport.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import { UPA_CELL_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';


const UPA_CELL_GRID_PROPS:IGridReport ={
  columns:STAFF_DETAILS_GRID_COLUMNS,
  data:[],
};

const UPACell = () => {
      const [upaCellGridProps , setUpaCellGridProps] = useState<IGridReport>(UPA_CELL_GRID_PROPS);
      useEffect(()=>{
        const fetchAdministrationStaffInfo = async () => {
          const response = await getStaffDetails('UPA Cell');
          console.log(response);
          
          setUpaCellGridProps((prev)=> ({...prev , data:response}))
        };
        fetchAdministrationStaffInfo();
      },[]);
  return (
    <>
        <PageTitleBanner title='UPA Cell' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The Urban Poverty Alleviation (UPA) Cell in a Municipal Corporation has a significant role in addressing the challenges faced by urban poor communities, focusing on improving their living conditions, and promoting social and economic inclusion. Its main objective is to reduce poverty in urban areas through a variety of programs, projects, and initiatives.`} liRenderer={UPA_CELL_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} dataGrid={<GridReport {...upaCellGridProps}  />} departmentImage='/assets/administration_education.jpg' />
        </div>
    </>
  )
}

export default UPACell