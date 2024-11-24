import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { ACCOUNTS_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { ACCOUNTS_CONTACTS } from '../../mock-data/departments-contacts-mock-data.ts';
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
    data:ACCOUNTS_CONTACTS,
  };

const Accounts = () => {
  return (
    <div>
        <PageTitleBanner title='ACCOUNTS' />
        <div className='container'>
          <DepartmentsDataRenderer 
            description={`The Accounts Department in a Municipal Corporation plays a crucial role in managing the financial health of the corporation. Here are the key functions of the Accounts Department:`} 
            liRenderer={ACCOUNTS_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} 
            departmentImage='/assets/accounts.jpg' 
          />
          <GridReport {...REVENUE_FM_OF_GRID_PROPS} />
          <p>By effectively performing these functions, the Accounts Department ensures the financial stability and transparency of the Municipal Corporation, enabling it to deliver quality services to the citizens.</p>
        </div>
    </div>
  )
}

export default Accounts;