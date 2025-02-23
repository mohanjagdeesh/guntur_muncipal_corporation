import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import { ADMINISTRATION_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';


const ADMINISTRATION_AND_EDUCATION_GRID_PROPS:IGridReport ={
  columns:STAFF_DETAILS_GRID_COLUMNS,
  data:[]
};

const AdministrationAndEducation = () => {
  const [administrationStaffGridProps , setAdministrationGridProps] = useState<IGridReport>(ADMINISTRATION_AND_EDUCATION_GRID_PROPS);
  useEffect(()=>{
    const fetchAdministrationStaffInfo = async () => {
      const response = await getStaffDetails('Administration');
      setAdministrationGridProps((prev)=> ({...prev , data:response}))
    };
    fetchAdministrationStaffInfo();
  },[]);
  return (
    <div>
        <PageTitleBanner title='ADMINISTRATION' />
        <div className='container'>
          <DepartmentsDataRenderer liRenderer={<RenderListItems {...ADMINISTRATION_LIST_ITEMS} />} dataGrid={<GridReport {...administrationStaffGridProps}  />} departmentImage='/assets/administration_education.jpg' />
        </div>
    </div>
  )
}

export default AdministrationAndEducation;