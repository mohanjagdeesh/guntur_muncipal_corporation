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
          setUpaCellGridProps((prev)=> ({...prev , data:response}))
        };
        fetchAdministrationStaffInfo();
      },[]);
  return (
    <>
        <PageTitleBanner title='UPA Cell' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The UPA Cell of the Guntur Municipal Corporation (GMC) provides welfare services`} liRenderer={<RenderListItems {...UPA_CELL_LIST_ITEMS} />} dataGrid={<GridReport {...upaCellGridProps}  />} departmentImage='/assets/administration_education.jpg' />
        </div>
    </>
  )
}

export default UPACell