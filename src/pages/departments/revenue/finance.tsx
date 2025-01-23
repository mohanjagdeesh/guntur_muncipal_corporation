import React from 'react'
import GridReport from '../../../components/grid/GridReport.tsx';
import { currencyConvertor } from '../../../utils/Constants.tsx';
import PageTitleBanner from '../../../global-components/page-title-banner/page-title-banner.tsx';

const Finance = () => {
  return (
    <>
        <PageTitleBanner title='Finances' />
        <div className='container'>
            <div className=' mt-4'>
                <GridReport columns={[
                    {
                        header:'Property Tax',
                        accessorKey:'noOfAssessments',
                        id:'noOfAssessments',
                    },
                    {
                        header:'',
                        accessorKey:'demand',
                        id:'demand',
                    },
                ]
                }
                data={[
                    {
                        noOfAssessments:'No. of Assessments',
                        demand:currencyConvertor('200450')
                    },
                    {
                        noOfAssessments:'Demand',
                        demand:currencyConvertor('2127596676')
                    },
                ]}
                />
            </div>
        </div>
    </>
  );
};

export default Finance;