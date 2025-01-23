import React from 'react'
import PageTitleBanner from '../../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../../components/grid/GridReport.tsx';
import { currencyConvertor } from '../../../utils/Constants.tsx';

const Leases = () => {
    return (
        <>
            <PageTitleBanner title='Leases' />
            <div className='container'>
            <div>
                        <GridReport columns={[
                            {
                                header:'Leases',
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
                                noOfAssessments:'No. of Commercial Enterprises',
                                demand:currencyConvertor('1156')
                            },
                            {
                                noOfAssessments:'Demand',
                                demand:currencyConvertor('73621688')
                            },
                        ]}
                        />
                </div>
            </div>
        </>
      );
};

export default Leases;