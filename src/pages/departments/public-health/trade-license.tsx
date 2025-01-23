import React from 'react'
import GridReport from '../../../components/grid/GridReport.tsx';
import { currencyConvertor } from '../../../utils/Constants.tsx';
import PageTitleBanner from '../../../global-components/page-title-banner/page-title-banner.tsx';

const TradeLicense = () => {
  return (
    <>
        <PageTitleBanner title='Trade License' />
        <div className='container'>
        <div>
                    <GridReport columns={[
                            {
                                header:'Trade Licenses',
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
                                noOfAssessments:'No. of Trade Licenses',
                                demand:currencyConvertor('19074')
                            },
                            {
                                noOfAssessments:'Demand',
                                demand:currencyConvertor('200703012')
                            },
                        ]}
                        />
                </div>
        </div>
    </>
  );
};

export default TradeLicense;