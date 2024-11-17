import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { REVENUE_FM_OF_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { REVENUE_FM_OF_CONTACTS } from '../../mock-data/departments-contacts-mock-data.ts';
import { IGridReport } from '../../interfaces/IGridReport.ts';


const REVENUE_FM_OF_GRID_PROPS:IGridReport ={
    columns:[
      {
        header:'S.No',
        accessorKey:'serialNo',
        id:'serialNo',
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
    data:REVENUE_FM_OF_CONTACTS
  };

const TownPlanning = () => {
  return (
    <div>
        <PageTitleBanner title='TOWN PLANNING' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The Town Planning Department in a Municipal Corporation plays a crucial role in shaping the physical development of a city. Here are its key functions:`} liRenderer={REVENUE_FM_OF_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} departmentImage='/assets/town-planning.jpg' />
          <GridReport {...REVENUE_FM_OF_GRID_PROPS} />
          <p>By effectively performing these functions, the Revenue Department contributes to the financial sustainability of the Municipal Corporation and helps in providing essential services to the citizens.</p>
        </div>
    </div>
  )
}

export default TownPlanning;