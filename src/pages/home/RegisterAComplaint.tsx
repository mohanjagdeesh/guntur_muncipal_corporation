import React from 'react'
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import { EMAILS_MOCK_DATA, TOLL_FREE_NUMBERS_MOCK_DATA, WHATSAPP_NUMBERS_MOCK_DATA } from '../../mock-data/about-us/toll-free-numbers-mock-data.ts';

const RegisterAComplaint = () => {
  return (
    <>
        <PageTitleBanner title='Register A Complaint'/>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-violet rounded-lg p-4 mt-2'>
                <div className='flex items-start gap-2'>
                    <div>
                        <h1 className='text-[1rem] font-bold'>Toll-free numbers:-</h1>
                    </div>
                    <div>
                        {
                            TOLL_FREE_NUMBERS_MOCK_DATA.map((num,index)=><p key={index}>{num}</p>)
                        }
                    </div>
                </div>
                <div className='flex items-start gap-2'>
                    <div>
                        <h1 className='text-[1rem] font-bold'>Whatsapp Number:-</h1>
                    </div>
                    <div>
                        {
                            WHATSAPP_NUMBERS_MOCK_DATA.map((num,index)=><p key={index}>{num}</p>)
                        }
                    </div>
                </div>
                <div className='flex items-start gap-2'>
                    <div>
                        <h1 className='text-[1rem] font-bold'>Emails:-</h1>
                    </div>
                    <div>
                        {
                            EMAILS_MOCK_DATA.map((num,index)=><p key={index}>{num}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 border-2 border-violet rounded-lg my-2 p-4'>
                <div className=' flex items-start gap-2'>
                    <h1 className='text-[1rem] font-bold'>Contact Details:- </h1>
                    <p>
                        7CRW+RGM, Grand Trunk Rd,<br/>
                        Opposite Gandhi Park Guntur,<br/>
                        Lalapet, Guntur,<br/>
                        Andhra Pradesh 522003
                    </p>
                </div>
                <div className=' flex flex-col items-center'>
                    <h1 className='text-[2rem] font-bold'>Get it on</h1>
                    <img src='/assets/g_play.png' alt='G_Play' className='w-[200px]'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterAComplaint;