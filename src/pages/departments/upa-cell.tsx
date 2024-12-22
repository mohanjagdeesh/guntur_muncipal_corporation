import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { IGridReport } from '../../interfaces/IGridReport.tsx';
import { UPA_CELL_CONTACTS } from '../../mock-data/departments-contacts-mock-data.ts';
import GridReport from '../../components/grid/GridReport.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import { UPA_CELL_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';

const UPACell = () => {
    const UPA_CELL_GRID_PROPS:IGridReport ={
        columns:[
          {
            header:'S.No',
            accessorKey:'sno',
            id:'sno',
            cell:({row})=>row.index + 1,
          },
          {
            header:'Name',
            accessorKey:'name',
            id:'name',
          },
          {
            header:'Designation',
            accessorKey:'designation',
            id:'designation',
          },
          {
            header:'Phone',
            accessorKey:'phone',
            id:'phone',
          },
        ],
        data:UPA_CELL_CONTACTS,
      };
  return (
    <>
        <PageTitleBanner title='UPA Cell' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The UPA Cell of the Guntur Municipal Corporation (GMC) provides welfare services`} liRenderer={<RenderListItems {...UPA_CELL_LIST_ITEMS} />} dataGrid={<GridReport {...UPA_CELL_GRID_PROPS}  />} departmentImage='/assets/administration_education.jpg' />
        </div>
    </>
  )
}

export default UPACell