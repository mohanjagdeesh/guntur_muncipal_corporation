import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { CO_OP_MOCK_DATA } from '../../mock-data/about-us/co-option-mock-data.ts'
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';

const CoOption = () => {
    const CO_OP_GRID_PROPS:IGridReport ={
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
            header:'Mobile',
            accessorKey:'phone',
            id:'mobile',
          },
        ],
        data:CO_OP_MOCK_DATA
      };
  return (
    <>
        <PageTitleBanner title='Co-option' />
        <div className='container'>
            <GridReport {...CO_OP_GRID_PROPS} />
        </div>
    </>
  )
}

export default CoOption