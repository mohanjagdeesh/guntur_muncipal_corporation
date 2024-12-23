import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { HouseHoldsChart, PropertyTaxChart, VacantLandTaxChart, WaterChargesChart} from '../../mock-data/about-us/charts.tsx';
import BarChart from './PopulationChart.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { currencyConvertor } from '../../utils/Constants.tsx';


const Infrastructure = () => {
  return (
    <div>
        <PageTitleBanner title='INFRASTRUCTURE' />
        <div className='container'>
            <div className='flex flex-col'>
                <div>
                    <h1 className='font-bold text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-center my-2'>Demography</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='border-[1px] border-violet'>
                            <BarChart chartData={[
                            { primary: "2011", secondary: 743354,fill:'#fa9e00' },
                            { primary: "2024", secondary: 906344,fill:'#15093A' },
                            ]} label='Population'/>
                        </div>
                        <div className='border-[1px] border-violet'>
                            <BarChart chartData={[
                            { primary: "2011", secondary: 189554,fill:'#fa9e00' },
                            { primary: "2024", secondary: 206000,fill:'#15093A' },
                            ]} label='House Holds'/>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h1 className='font-bold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-center my-2'>Finances</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        <div className='h-[250px] w-[250px] md:w-[350px] md:h-[350px] relative pt-5 lg:pt-10'>
                            <h1 className='absolute left-0 top-0 text-center font-bold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] leading-none'>Property Tax</h1>
                            <PropertyTaxChart />
                        </div>
                        <div className='h-[250px] w-[250px] md:w-[350px] md:h-[350px] relative pt-5 lg:pt-10'>
                            <h1 className='absolute left-0 top-0 text-center font-bold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] leading-none'>Vacant Land Tax</h1>
                            <VacantLandTaxChart />
                        </div>
                        <div className='h-[250px] w-[250px] md:w-[350px] md:h-[350px] relative pt-5 lg:pt-10'>
                            <h1 className='absolute left-0 top-0 text-center font-bold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] leading-none'>Water Charges</h1>
                            <WaterChargesChart />
                        </div>
                    </div>
                </div> */}
                <div className='my-2'>
                    <div>
                        <h1 className='text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center'>Finances</h1>
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
                    <div>
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
                    <div>
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
            </div>
        </div>
    </div>
  )
}

export default Infrastructure