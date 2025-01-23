import React from 'react';
import PageTitleBanner from '../../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../../components/grid/GridReport.tsx';
import { currencyConvertor } from '../../../utils/Constants.tsx';

const WaterCharges = () => {
    return (
        <>
            <PageTitleBanner title='Water Charges' />
            <div className='container'>
            <div className=' mt-4'>
                        <GridReport columns={[
                            {
                                header:'Water Charges',
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
                                demand:currencyConvertor('113202')
                            },
                            {
                                noOfAssessments:'Demand',
                                demand:currencyConvertor('655298073')
                            },
                        ]}
                        />
                    </div>
            </div>
        </>
    );
}

export default WaterCharges