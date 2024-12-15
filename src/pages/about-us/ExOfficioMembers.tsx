import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx'
import { EX_OFFICIO_MEMBERS_MOCK_DATA } from '../../mock-data/about-us/ex-officio-members-mock-data.ts'

const ExOfficioMembers = () => {
  return (
    <>
        <PageTitleBanner title='Ex-Officio Members'/>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                {EX_OFFICIO_MEMBERS_MOCK_DATA.map((member,index)=>
                <div key={index} className='flex flex-col md:flex-row md:gap-3 border-2 border-red-600 items-center justify-center md:justify-start'>
                    <img src={member.image} alt={member.image} />
                    <div>
                        <h1 className='text-black font-bold'> Name:- <span className='font-normal'>{member.name}</span></h1>
                        <h1 className='text-black font-bold'>Designation:- <span className='font-normal'>{member.designation}</span></h1>
                        {member.department &&<h1 className='text-black font-bold'> Department:- <span className='font-normal'>{member.department}</span></h1>}
                    </div>
                </div>)}
            </div>
        </div>
    </>
  )
}

export default ExOfficioMembers