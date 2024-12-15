import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import { ADMINISTRATION_CONTACTS, EDUCATION_CONTACTS } from '../../mock-data/departments-contacts-mock-data.ts';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import { ADMINISTRATION_LIST_ITEMS, EDUCATION_ADMINISTRATION_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';


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
  return (
    <div>
        <PageTitleBanner title='ADMINISTRATION' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The Administration department in a Municipal Corporation plays a crucial role in overseeing various administrative functions within the city. Here's a breakdown of its key responsibilities:`} liRenderer={<RenderListItems {...ADMINISTRATION_LIST_ITEMS} />} dataGrid={<GridReport {...ADMINISTRATION_AND_EDUCATION_GRID_PROPS}  />} departmentImage='/assets/administration_education.jpg' />
          <RenderListItems {...EDUCATION_ADMINISTRATION_LIST_ITEMS} />
          <GridReport columns={ADMINISTRATION_AND_EDUCATION_GRID_PROPS?.columns} data={EDUCATION_CONTACTS} />
          <p>By effectively fulfilling these responsibilities, the Administration & Education department contributes to the well-being and progress of the city and its residents.</p>
        </div>
    </div>
  )
}

export default AdministrationAndEducation;