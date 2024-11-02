import React, { useState } from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';


const CONTACT_US_GRID_PROPS:IGridReport ={
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
      name:'Jagan Mohan Rao',
      designation:'Director Muncipal Administration',
      mobile:9182245352,
      email:'jaganmohan@gmail.com',
    },
    {
      serialNo:2,
      name:'Nagababu',
      designation:'Director Muncipal Administration',
      mobile:1234567890,
      email:'nagababu@gmail.com',
    },
    {
      serialNo:3,
      name:'Pradeep',
      designation:'Director Muncipal Administration',
      mobile:9876543210,
      email:'pradeep@gmail.com',
    },
    {
      serialNo:4,
      name:'Shiva',
      designation:'Director Muncipal Administration',
      mobile:98712345760,
      email:'shiva@gmail.com',
    },
    {
      serialNo:5,
      name:'Ravi Kumar',
      designation:'Director Muncipal Administration',
      mobile:98712345760,
      email:'ravi@gmail.com',
    },
    {
      serialNo:6,
      name:'Nagaraj',
      designation:'Director Muncipal Administration',
      mobile:98712345760,
      email:'nagaraj@gmail.com',
    },
    {
      serialNo:7,
      name:'Aravind',
      designation:'Director Muncipal Administration',
      mobile:98712345760,
      email:'aravind@gmail.com',
    },
  ]
}

const ContactUs = () => {
  const [contactUsGridProps , setContactUsGridProps] = useState<IGridReport>(CONTACT_US_GRID_PROPS);
  return (
    <div>
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