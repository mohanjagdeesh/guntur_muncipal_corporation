import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';


const About = () => {
  return (
    <div>
      <PageTitleBanner title='About Us'/>
      <div className=' container'>
        <div className='bg-white h-screen flex-col items-center justify-center gap-4'>
          <h1 className=' text-[1.5rem] font-semibold leading-none my-2'>About Us</h1>
          <p className='text-[1rem] font-light leading-2 mb-4'>After the state bifurcation, the state of Andhra Pradesh consists of the 13 districts namely, <span className='text-red-500 font-semibold text-[1rem]'>Srikakulam</span>, <span className='text-red-500 font-semibold text-[1rem]'>Vizianagaram</span>, <span className='text-red-500 font-semibold text-[1rem]'>Visakhapatnam</span>, <span className='text-red-500 font-semibold text-[1rem]'>East Godavari</span>, <span className='text-red-500 font-semibold text-[1rem]'>West Godavari</span>,<span className='text-red-500 font-semibold text-[1rem]'>Krishna</span> , <span className='text-red-500 font-semibold text-[1rem]'>Guntur</span>, <span className='text-red-500 font-semibold text-[1rem]'>Prakasam</span>, <span className='text-red-500 font-semibold text-[1rem]'>SPS Nellore</span>, <span className='text-red-500 font-semibold text-[1rem]'>Chittoor</span>, <span className='text-red-500 font-semibold text-[1rem]'>Anantapur</span>, <span className='text-red-500 font-semibold text-[1rem]'>Kurnool</span> and <span className='text-red-500 font-semibold text-[1rem]'>YSR Kadapa</span> with 14 corporations and 96 municipalities & Nagar Panchayats.</p>
          <p className='text-[1rem] font-light leading-2 mb-4'>The Directorate of Municipal Administration (DMA) is the apex authority of Municipal Administration Department of Government of Andhra Pradesh (GoAP), which provides guidance to Municipal Corporations and Municipalities in performing their day to day activities in adherence to the policies, procedures and guidelines provided by Municipal Administration and Urban Development Department to achieve effective civic administration. The Directorate is headed by the Director of Municipal Administration (DMA). </p>
          <p className='text-[1rem] font-light leading-2 mb-4'>DMA administers through the Office of Directorate of Municipal Administration (DMA), Regional Offices (RDMA) and Urban Local Bodies (ULBs) spread across the State. DMA, in its supervisory role, monitors the functioning of the ULBs against key parameters such as the tax collections, project and civic works execution, the implementation of the schemes of the Government etc. It also includes the supervision of the regulatory and developmental functions of the ULBs. DMA interacts with several other departments such as Public Health Engineering Department, Town and Country planning department, State Audit Department, Urban Developmental Authorities, Municipal Corporations, and Water boards etc to enable seamless delivery of urban civic services to the citizen.</p>
        </div>
    </div>
    </div>
  )
}

export default About;