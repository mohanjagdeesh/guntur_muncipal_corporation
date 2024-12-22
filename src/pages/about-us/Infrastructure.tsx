import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { HouseHoldsChart , PopulationChart, PropertyTaxChart, VacantLandTaxChart, WaterChargesChart} from '../../mock-data/about-us/charts.tsx'

const Infrastructure = () => {
  return (
    <div>
        <PageTitleBanner title='InfraStructure' />
        <div className='container'>
            <div className='flex flex-col'>
                <div>
                    <h1 className='font-bold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-center my-2'>DemoGraphy</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        <div className='h-[250px] w-[250px] md:w-[350px] md:h-[350px]'>
                            <HouseHoldsChart />
                        </div>
                        <div className='h-[250px] w-[250px] md:w-[350px] md:h-[350px]'>
                            <PopulationChart/>
                        </div>
                    </div>
                </div>
                <div>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infrastructure