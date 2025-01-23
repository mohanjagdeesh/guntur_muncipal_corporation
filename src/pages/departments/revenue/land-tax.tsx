import React from 'react'
import PageTitleBanner from '../../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../../components/grid/GridReport.tsx';
import { currencyConvertor } from '../../../utils/Constants.tsx';

const LandTax = () => {
    return (
        <>
            <PageTitleBanner title='Land Tax' />
            <div className='container'>
            <div className=' mt-4'>
                        <GridReport columns={[
                            {
                                header:'Vacant Land Tax',
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
                                demand:currencyConvertor('8212')
                            },
                            {
                                noOfAssessments:'Demand',
                                demand:currencyConvertor('965574627')
                            },
                        ]}
                        />
                    </div>
            </div>
        </>
      );
};

export default LandTax;