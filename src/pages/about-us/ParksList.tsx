import React from 'react'
import { PARKS_MOCK_DATA } from '../../mock-data/about-us/parks-mock-data.ts';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport';
import GmcParks from './GmcParks.tsx';

const ParksList = () => {
    const PARKS_GRID_PROPS:IGridReport ={
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
            header:'Location',
            accessorKey:'location',
            id:'location',
          },
          {
            header:'Region',
            accessorKey:'region',
            id:'region',
          },
        ],
        data:PARKS_MOCK_DATA
      };
  return (
    <>
        <PageTitleBanner title='Parks List' />
        <div className='container'>
            <GridReport {...PARKS_GRID_PROPS} />
            <div className='my-4'>
                <GmcParks/>
            </div>
        </div>
    </>
  )
};

export default ParksList;