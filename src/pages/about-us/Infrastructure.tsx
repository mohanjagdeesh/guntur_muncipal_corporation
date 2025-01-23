import React from 'react';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import BarChart from './PopulationChart.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { currencyConvertor } from '../../utils/Constants.tsx';


const Infrastructure = () => {
  return (
    <div>
        <PageTitleBanner title='INFRASTRUCTURE' />
        <div className='container'>
            <div className='flex flex-col'>
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
                        <h1 className='text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center'>Infrastructure</h1>
                        <GridReport columns={[
                            {
                                header:'Roads',
                                accessorKey:'roads',
                                id:'roads',
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
                                roads:'BT Roads',
                                demand:'133.8'
                            },
                            {
                                roads:'CC',
                                demand:'635.27'
                            },
                            {
                                roads:'WBM',
                                demand:'90.3'
                            },
                            {
                                roads:'Kutcha',
                                demand:'238.45'
                            },
                            {
                                roads:'Total Length (km)',
                                demand:'1097.82'
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'Size of Drains',
                                accessorKey:'drains',
                                id:'drains',
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
                                drains:'Major',
                                demand:'84'
                            },
                            {
                                drains:'Minor',
                                demand:'798'
                            },
                            {
                                drains:'Teritary Drains',
                                demand:'595'
                            },
                            {
                                drains:'Total Length (km)',
                                demand:'1477'
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'Type of Drains',
                                accessorKey:'drains',
                                id:'drains',
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
                                drains:'CC',
                                demand:'1232.75'
                            },
                            {
                                drains:'Kutcha',
                                demand:'244.25'
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'Water Supply',
                                accessorKey:'waterSupply',
                                id:'waterSupply',
                            },
                            {
                                header:'',
                                accessorKey:'quantity',
                                id:'quantity',
                            },
                        ]
                        }
                        data={[
                            {
                                waterSupply:'Quantity of Daily Water Supplied',
                                quantity:'149.5'
                            },
                            {
                                waterSupply:'No. of WTPs',
                                quantity:'4'
                            },
                            {
                                waterSupply:'Capacity of WTPs',
                                quantity:'149.50 ML'
                            },
                            {
                                waterSupply:'Length of Distribution Network (km)',
                                quantity:'1013'
                            },
                            {
                                waterSupply:'No of HSCs',
                                quantity:currencyConvertor('242822')
                            },
                            {
                                waterSupply:'No of Households Serviced through HSCs',
                                quantity:currencyConvertor('154825')
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'Liquid Waste Management',
                                accessorKey:'liquidWasteManagement',
                                id:'liquidWasteManagement',
                            },
                            {
                                header:'',
                                accessorKey:'quantity',
                                id:'quantity',
                            },
                        ]
                        }
                        data={[
                            {
                                liquidWasteManagement:'Quantity Generated',
                                quantity:'103.08'
                            },
                            {
                                liquidWasteManagement:'No. of STPs',
                                quantity:'5'
                            },
                            {
                                liquidWasteManagement:'Capacity of STPs',
                                quantity:'123'
                            },
                            {
                                liquidWasteManagement:'Quantity Treated',
                                quantity:'0'
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'UGD',
                                accessorKey:'ugdNetwork',
                                id:'ugdNetwork',
                            },
                            {
                                header:'',
                                accessorKey:'length',
                                id:'length',
                            },
                        ]
                        }
                        data={[
                            {
                                ugdNetwork:'Length of UGD Network',
                                length:'80'
                            },
                            {
                                ugdNetwork:'No. of House UGD Connections',
                                length:currencyConvertor('19145')
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'Solid Waste Management (Quantity Generated)',
                                accessorKey:'solidWaste',
                                id:'solidWaste',
                            },
                            {
                                header:'',
                                accessorKey:'quantity',
                                id:'quantity',
                            },
                        ]
                        }
                        data={[
                            {
                                solidWaste:'Total (TPD)',
                                quantity:currencyConvertor('509')
                            },
                            {
                                solidWaste:'Dry',
                                quantity:currencyConvertor('264')
                            },
                            {
                                solidWaste:'Wet',
                                quantity:currencyConvertor('245')
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'Solid Waste Management (Quantity Treated)',
                                accessorKey:'solidWaste',
                                id:'solidWaste',
                            },
                            {
                                header:'',
                                accessorKey:'quantity',
                                id:'quantity',
                            },
                        ]
                        }
                        data={[
                            {
                                solidWaste:'Total (TPD)',
                                quantity:currencyConvertor('509')
                            },
                            {
                                solidWaste:'Dry',
                                quantity:currencyConvertor('215')
                            },
                            {
                                solidWaste:'Wet',
                                quantity:currencyConvertor('245')
                            },
                        ]}
                        />
                    </div>
                    <div>
                        <GridReport columns={[
                            {
                                header:'Solid Waste Management Vehicles',
                                accessorKey:'solidWaste',
                                id:'solidWaste',
                            },
                            {
                                header:'',
                                accessorKey:'quantity',
                                id:'quantity',
                            },
                        ]
                        }
                        data={[
                            {
                                solidWaste:'Refuse Compactor (Vehicle)',
                                quantity:'Mini compactors - 24 , Big compactors - 6'
                            },
                            {
                                solidWaste:'Road Sweeping Machines',
                                quantity:currencyConvertor('10')
                            },
                            {
                                solidWaste:'E Autos/Autos',
                                quantity:currencyConvertor('220')
                            },
                            {
                                solidWaste:'Skid Steer Loader',
                                quantity:currencyConvertor('6')
                            },
                            {
                                solidWaste:'Push Carts',
                                quantity:currencyConvertor('350')
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