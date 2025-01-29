import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import { GMC_HISTORY_MOCK_DATA } from '../../mock-data/about-us/guntur-history-mock-data.ts';
import GridReport from '../../components/grid/GridReport.tsx';


const GMC_HISTORY_GRID_COLS:IGridReport = {
  columns:[
    {
      header:'S.No',
      accessorKey:'sno',
      id:'sno',
      cell:({row})=>row.index + 1,
    },
    {
      header:'ITEM',
      accessorKey:'item',
      id:'item',
    },
    {
      header:'UNITS',
      accessorKey:'units',
      id:'units',
    },
    {
      header:'DETAILS',
      accessorKey:'details',
      id:'details',
    },
  ],
  data:GMC_HISTORY_MOCK_DATA,
};

const Introduction = () => {
  return (
    <div>
      <PageTitleBanner title='History/Introduction'/>
      <div className=' container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
          <div>
            <img className='rounded-xl' src='/assets/Jinnah_tower.jpg' alt='Jinnah_Tower'/>
          </div>
          <div className='bg-white flex-col items-center justify-center gap-4'>
            <p className='text-justify font-light'>Guntur municipality was constituted in the year of 1866 and the first elected body was formed in 1881. The municipality was upgraded to II-Grade in 1891, I-Grade in 1917, Special Grade in 1952 and then to Selection Grade in the year of 1960. In 1994, the Municipal Corporation was formed.</p>
            <p className='text-justify my-3 font-light'>The name originated from the term "Garthaputi" meaning the city of craters. Having very ancient history with reference to Indian epics, the place gave birth to many noted personalities of India. It is one of the oldest municipalities. Guntur is of-course called as the educational capital of A.P. The region is also identified as a transportation and textile hub in India.</p>
            <p className='text-justify font-light'>Guntur is located in the North-eastern part of Andhra Pradesh state, in the Krishna River delta. The Krishna River forms the North-eastern and Eastern boundary of the district, separating the Guntur district from the Krishna District. The district is bounded on the Southeast by the Bay of Bengal, on the South by the Prakasham District, on the West by the Mahbubnagar District , and on the Northwest by the Nalgonda District.</p>
            <p className='text-justify mt-3 font-light'>Paddy, Tobacco, Cotton, Chilly and Turmeric are the main agricultural products cultivated in the district.</p>
          </div>
        </div>
        <div>
          <h1 className=' text-center text-3xl font-bold mt-4'>GMC - AT A GLANCE</h1>
          <GridReport {...GMC_HISTORY_GRID_COLS} />
        </div>
    </div>
    </div>
  )
}

export default Introduction;