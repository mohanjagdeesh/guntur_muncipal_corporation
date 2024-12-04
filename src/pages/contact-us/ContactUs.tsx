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
        <div className=' bg-violet flex items-center justify-center py-1 w-1/2'>
          <h1 className='text-white text-[1.2rem]'>GMC</h1>
        </div>
        <div className='bg-orange-peel flex items-center justify-center w-1/2 py-1 px-2'>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row md:items-center md:gap-4 md:py-4'>
        <div>
          <h1 className='text-black text-[1.5rem] my-2 font-bold leading-none md:text-[2rem]'>Head Office Address</h1>
          <p className=' text-black text-[1rem] mb-2 font-normal leading-tight md:text-[1.2rem] md:mb-0'>
          7CRW+RGM, Grand Trunk Rd,<br/> Opposite Gandhi Park Guntur,<br/> Lalapet, Guntur,<br/> Andhra Pradesh 522003
          </p>
        </div>
        <div className=' h-[250px] flex-1'>
        <iframe title='GMC_Office' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.603520260743!2d80.44371547575255!3d16.292078584420253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0acbe667825d%3A0xca688f973ff5651c!2sGuntur%20Municipal%20Corporation!5e0!3m2!1sen!2sin!4v1733338497512!5m2!1sen!2sin" width="100%" height="250"></iframe>
      </div>
    </div>
          <GridReport {...contactUsGridProps} />
      </div>
    </div>
  )
}

export default ContactUs;