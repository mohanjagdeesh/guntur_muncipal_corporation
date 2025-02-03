import React, { useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { GMC_OFFICERS_MOCK_DATA } from '../../mock-data/about-us/gmc-officers.ts';
import { IGridReport } from '../../interfaces/IGridReport.ts';
import GridReport from '../../components/grid/GridReport.tsx';


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

const departmentTabs = [
  'Revenue Section',
  'Account Section',
  'Administration Section',
  'Engineering Section',
  'Public Health Section',
  'Town Planning Section',
  'UPA Cell',
  'Ward Secretariat Section',
  'Election Cell',
  'Legal Section',
]

const GmcOfficers = () => {
  const [selectBoxTitle , setSelectBoxTitle] = useState<string>('Administration Section');

  const selectedDepartmentOfficers = GMC_OFFICERS_MOCK_DATA.filter((eachDept)=> eachDept.title === selectBoxTitle);
  return (
    <>
        <PageTitleBanner title='GMC Officers' tabsList={departmentTabs} selectBoxTitle={selectBoxTitle} setSelectBoxTitle={setSelectBoxTitle} />
        <div className='container'>
          <div>
              <h1 className='text-sm md:text-lg lg:text-2xl font-bold text-center mt-4'>{selectedDepartmentOfficers && selectedDepartmentOfficers?.length>0 ? selectedDepartmentOfficers[0].title : 'Administration Section'}:-</h1>
              <GridReport {...GMC_OFFICERS_GRID_PROPS} data={selectedDepartmentOfficers && selectedDepartmentOfficers?.length>0 ? selectedDepartmentOfficers[0].gridData : []} />
          </div>
        </div>
    </>
  );
};

export default GmcOfficers;