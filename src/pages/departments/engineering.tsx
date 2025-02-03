import React, { useEffect, useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import DepartmentsDataRenderer from '../../global-components/departments-data-renderer/departments-data-renderer.tsx';
import { ENGINEERING_LIST_ITEMS } from '../../mock-data/departments-list-items-mock-data.ts';
import RenderListItems from '../../global-components/render-list-items/render-list-items.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import { getStaffDetails } from '../../services/gmc-staff.tsx';
import { STAFF_DETAILS_GRID_COLUMNS } from '../../utils/Constants.tsx';
import { InpageNavigationProps } from '../../interfaces/IInpageNavigation.ts';


const REVENUE_FM_OF_GRID_PROPS:IGridReport ={
    columns:STAFF_DETAILS_GRID_COLUMNS,
    data:[]
  };

const Engineering = () => {
  const [engineeringStaffGridProps , setEngineeringGridProps] = useState<IGridReport>(REVENUE_FM_OF_GRID_PROPS);
  useEffect(()=>{
    const fetchAdministrationStaffInfo = async () => {
      const response = await getStaffDetails('Engineering');
      setEngineeringGridProps((prev)=> ({...prev , data:response}))
    };
    fetchAdministrationStaffInfo();
  },[]);

  const additionalInpageNavLinks:InpageNavigationProps[] = [
    {
      navTitle:'Horticulture',
      navLink:'/department/horticulture',
    },
    {
      navTitle:'GMC Infrastructure',
      navLink:'/department/infrastructure',
    },
    {
      navTitle:'Water Supply',
      navLink:'/department/water-supply',
    },
  ];
  return (
    <div>
        <PageTitleBanner title='ENGINEERING' />
        <div className='container'>
          <DepartmentsDataRenderer description={`The Engineering Department in a Municipal Corporation plays a crucial role in the development and maintenance of the city's infrastructure.`} liRenderer={ENGINEERING_LIST_ITEMS.map((each)=>(<RenderListItems {...each} />))} departmentImage='/assets/engineering.jpg' additionalInPageNavLinks={additionalInpageNavLinks} />
          <GridReport {...engineeringStaffGridProps} />
          <p>By effectively performing these functions, the Revenue Department contributes to the financial sustainability of the Municipal Corporation and helps in providing essential services to the citizens.</p>
        </div>
    </div>
  )
}

export default Engineering;