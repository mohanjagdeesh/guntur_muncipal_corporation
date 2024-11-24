import React, { useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';


export const CONTACT_US_GRID_PROPS:IGridReport ={
  columns:[
    {
      header:'S.No',
      accessorKey:'serialNo',
      id:'serialNo',
    },
    {
      header:'Name(Sri/Smt)',
      accessorKey:'name',
      id:'name',
    },
    {
      header:'Designation',
      accessorKey:'designation',
      id:'designation',
    },
    {
      header:'Mobile',
      accessorKey:'mobile',
      id:'mobile',
    },
    {
      header:'Email',
      accessorKey:'email',
      id:'email',
    },
  ],
  data:[
    {
      serialNo:1,
      name:'Sri P Sreenivasulu, I.A.S',
      designation:'Commissioner',
      mobile:9849908385,
      email:'sreenivasulu@gmcguntur.com',
    },
    {
      serialNo:2,
      name:'Sri C Obulesu',
      designation:'Additional Commissioner',
      mobile:9849908396,
      email:'obulesu@gmcguntur.com',
    },
    {
      serialNo:3,
      name:'Sri D Srinivasarao',
      designation:'Deputy Commisisioner-1',
      mobile:9849908364,
      email:'srinivasarao@gmcguntur.com',
    },
    {
      serialNo:4,
      name:'Sri Ch Srinivas',
      designation:'Deputy Commisisioner-2',
      mobile:9704600939,
      email:'srinivas@gmcguntur.com',
    },
    {
      serialNo:5,
      name:'Sri T Venkata Krishnaiah',
      designation:'Deputy Commisisioner-3',
      mobile:9963995326,
      email:'venkatakrishna@gmcguntur.com',
    },
    {
      serialNo:6,
      name:'Sri. Sundar Rami Reddy',
      designation:'Superintending Engineer I/c',
      mobile:9849908400,
      email:'sundarramireddy@gmcguntur.com',
    },
    {
      serialNo:7,
      name:'Sri Jinka Nagendra Kumar',
      designation:'Examiner Of Accounts',
      mobile:9849908373,
      email:'jinkanagendrakumar@gmcguntur.com',
    },
    {
      serialNo:8,
      name:'Sri. D Rambabu',
      designation:'City Planner',
      mobile:9849908390,
      email:'rambabu@gmcguntur.com',
    },
    {
      serialNo:9,
      name:'Dr Sobha Rani',
      designation:'EChief Medical of Health',
      mobile:7799222882,
      email:'sobharani@gmcguntur.com',
    },
    {
      serialNo:10,
      name:'Dr. M Ravi Babu',
      designation:'Municipal Health Officer',
      mobile:8919797379,
      email:'ravibabu@gmcguntur.com',
    },
    {
      serialNo:11,
      name:'N Madhusudhana Rao',
      designation:'Biologist',
      mobile:9160233356,
      email:'madhusudhanarao@gmcguntur.com',
    },
  ]
}

const ContactUs = () => {
  const [contactUsGridProps , setContactUsGridProps] = useState<IGridReport>(CONTACT_US_GRID_PROPS);
  return (
    <div className=' flex flex-col h-full'>
      <PageTitleBanner title='Contact Us'/>
      <div className='bg-white h-screen container'>
      <h1  className='text-violet text-[2rem] font-semibold'>Contacts</h1>
      <div className='w-full flex flex-col md:flex-row'>
        <div className=' bg-violet flex items-center justify-center flex-1 py-1'>
          <h1 className='text-white text-[1.2rem]'>CDMA</h1>
        </div>
        <div className='bg-orange-peel flex items-center justify-center py-1 px-2'>
          <h1 className=' text-white text-[1.2rem] text-center leading-none'>Collectors/Additional Collectors/MLA/Mayor/Chairperson/Commissioners</h1>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row md:items-center md:gap-4 md:py-4'>
        <div>
          <h1 className='text-black text-[1.5rem] my-2 font-bold leading-none md:text-[2rem]'>Head Office Address</h1>
          <p className=' text-black text-[1rem] mb-2 font-normal leading-tight md:text-[1.2rem] md:mb-0'>
              Director of Municipal Administration,<br/>
              PRIME HILL CREST,<br/>
              4th Floor, Near DGP Office,<br/>
              Beside Ultratech ReadyMix Plant,<br/>
              Vaddeswaram Village, Mangalagiri, Andhra Pradesh<br/>
              Pincode: 522502
          </p>
        </div>
        <div className=' h-[250px] flex-1'>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=u8U5cy4YdcomxtfA7"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
      </div>
    </div>
          <GridReport {...contactUsGridProps} />
      </div>
    </div>
  )
}

export default ContactUs;