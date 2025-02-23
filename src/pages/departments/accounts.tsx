import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { ACCOUNTS_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';


const REVENUE_FM_OF_GRID_PROPS:IGridReport ={
    columns:STAFF_DETAILS_GRID_COLUMNS,
    data:[],
  };

const Accounts = () => {
  const [accountsDeptGridProps , setAccountsDeptGridProps] = useState<IGridReport>(REVENUE_FM_OF_GRID_PROPS);
  useEffect(()=>{
    const fetchAdministrationStaffInfo = async () => {
      const response = await getStaffDetails('Accounts');
      setAccountsDeptGridProps((prev)=> ({...prev , data:response}))
    };
    fetchAdministrationStaffInfo();
  },[]);
  return (
    <div>
        <PageTitleBanner title='ACCOUNTS' />
        <div className='container'>
          <DepartmentsDataRenderer 
            liRenderer={ACCOUNTS_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} 
            departmentImage='/assets/accounts.jpg' 
          />
          <GridReport {...accountsDeptGridProps} />
          <p>By effectively performing these functions, the Accounts Department ensures the financial stability and transparency of the Municipal Corporation, enabling it to deliver quality services to the citizens.</p>
        </div>
    </div>
  )
}

export default Accounts;