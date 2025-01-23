import React, { useEffect } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import { ADMINISTRATION_CONTACTS } from '../../mock-data/departments-contacts-mock-data.ts';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import { ADMINISTRATION_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { getStaffDetails } from '../../services/gmc-staff.tsx';


const ADMINISTRATION_AND_EDUCATION_GRID_PROPS:IGridReport ={
    columns:[
      {
        header:'S.No',
        accessorKey:'sno',
        id:'sno',
        cell:({row})=>row.index + 1,
      },
      {
        header:'Name(Sri/Smt)',
        accessorKey:'name',
        id:'name',
      },
      {
        header:'Designation',
        accessorKey:'designation',
        id:'designation',
      },
      {
        header:'Mobile',
        accessorKey:'mobile',
        id:'mobile',
      },
    ],
    data:ADMINISTRATION_CONTACTS
  };

const AdministrationAndEducation = () => {
  useEffect(()=>{
    const fetchAdministrationStaffInfo = async () => {
      const response = await getStaffDetails('Administration');
      console.log(response);
    };

    fetchAdministrationStaffInfo();
  },[]);
  return (
    <div>
        <PageTitleBanner title='ADMINISTRATION' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The Administration department in a Municipal Corporation plays a crucial role in overseeing various administrative functions within the city.`} liRenderer={<RenderListItems {...ADMINISTRATION_LIST_ITEMS} />} dataGrid={<GridReport {...ADMINISTRATION_AND_EDUCATION_GRID_PROPS}  />} departmentImage='/assets/administration_education.jpg' />
        </div>
    </div>
  )
}

export default AdministrationAndEducation;