import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { GMC_OFFICERS_MOCK_DATA } from '../../mock-data/about-us/gmc-officers.ts';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import GridReport from '../../components/grid/GridReport.tsx';

const GmcOfficers = () => {
  const GMC_OFFICERS_GRID_PROPS:IGridReport ={
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
    data:[],
  };
  return (
    <>
        <PageTitleBanner title='GMC Officers' />
        <div className='container'>
          <div>
            {GMC_OFFICERS_MOCK_DATA.map((officer)=>{
              return(
                <>
                <h1 className='text-sm md:text-lg lg:text-2xl font-bold'>{officer.title}:-</h1>
                <GridReport {...GMC_OFFICERS_GRID_PROPS} data={officer.gridData} />
                </>
              )
            })}
          </div>
        </div>
    </>
  );
};

export default GmcOfficers;