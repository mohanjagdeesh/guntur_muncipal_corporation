import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { TOWN_PLANNING_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { TOWN_PLANNING_CONTACTS } from '../../mock-data/departments-contacts-mock-data.ts';
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
    data:TOWN_PLANNING_CONTACTS
  };

const TownPlanning = () => {
  return (
    <div>
        <PageTitleBanner title='TOWN PLANNING' />
        <div className='container'>
          <DepartmentsDataRenderer 
            description={`The Town Planning Department in a Municipal Corporation plays a crucial role in shaping the physical development of a city. Here are its key functions:`} 
            liRenderer={TOWN_PLANNING_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} 
            departmentImage='/assets/town-planning.jpg'
           />
          <GridReport {...REVENUE_FM_OF_GRID_PROPS} />
          <p>By effectively performing these functions, the Town Planning Department contributes to the sustainable development of the city, ensuring a livable and aesthetically pleasing environment for its residents.</p>
        </div>
    </div>
  )
}

export default TownPlanning;