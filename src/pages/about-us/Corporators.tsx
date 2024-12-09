import React from 'react'
import { CORPORATORS_MOCK_DATA } from '../../mock-data/about-us/corporators-mock-data.ts';
import { IGridReport } from '../../interfaces/IGridReport';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../components/grid/GridReport.tsx';

const Corporators = () => {
    const CORPORATORS_GRID_PROPS:IGridReport ={
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
            header:'Party',
            accessorKey:'party',
            id:'party',
          },
          {
            header:'Ward No',
            accessorKey:'wardNo',
            id:'wardNo',
          },
          {
            header:'Mobile',
            accessorKey:'mobile',
            id:'mobile',
          },
        ],
        data:CORPORATORS_MOCK_DATA
      };
  return (
    <>
        <PageTitleBanner title='CORPORATORS' />
        <div className='container'>
            <GridReport {...CORPORATORS_GRID_PROPS} />
        </div>
    </>
  )
}

export default Corporators