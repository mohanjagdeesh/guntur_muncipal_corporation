import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { ENGINEERING_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { ENGINEERING_CONTACTS } from '../../mock-data/departments-contacts-mock-data.ts';
import { IGridReport } from '../../interfaces/IGridReport.ts';


const REVENUE_FM_OF_GRID_PROPS:IGridReport ={
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
    data:ENGINEERING_CONTACTS
  };

const Engineering = () => {
  return (
    <div>
        <PageTitleBanner title='ENGINEERING' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The Engineering Department in a Municipal Corporation plays a crucial role in the development and maintenance of the city's infrastructure. Here are its key functions:`} liRenderer={ENGINEERING_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} departmentImage='/assets/engineering.jpg' />
          <GridReport {...REVENUE_FM_OF_GRID_PROPS} />
          <p>By effectively performing these functions, the Revenue Department contributes to the financial sustainability of the Municipal Corporation and helps in providing essential services to the citizens.</p>
        </div>
    </div>
  )
}

export default Engineering;