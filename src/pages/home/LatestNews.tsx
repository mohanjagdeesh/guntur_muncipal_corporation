import React from 'react'
import { Button, Tabs } from "flowbite-react";
import { HiUser, HiDownload ,HiMicrophone} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { LATEST_NEWS_TAB_ITEMS, } from '../../mock-data/home-latest-news-mock-daata.ts';
import RenderLatestNews from '../../global-components/latest-news/latest-news.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const ICONS_MAP = {
    HiMicrophone,
    HiUser,
    HiDownload,
    MdDashboard
  };

const LatestNews = () => {
  return (
    <div className='bg-violet py-4'>
        <div className='container'>
            <div className=' grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:gap-6'>
                <Tabs className='news-tabs-button' aria-label="Default tabs" variant='pills'>
                    {LATEST_NEWS_TAB_ITEMS.map((tab,index)=> (
                        <Tabs.Item key={index} title={tab.tabTitle} active={tab?.tabActiveStatus} icon={ICONS_MAP[tab?.tabIcon]}>
                            <div className=' flex flex-col'>
                                <div className=' flex flex-col gap-4'>
                                    {tab?.tabContent.slice(0,(tab?.tabContent.length > 3 ? 3 : tab?.tabContent.length)).map((each,index)=> (
                                        <RenderLatestNews key={index} {...each}/>
                                    ))};
                                </div>
                                <a className='block self-end bg-orange-peel rounded-lg' href={tab?.readMoreLink} rel='noreferrer'>
                                    <Button className='bg-orange-peel text-white'>READ MORE<FontAwesomeIcon className='ml-1' icon={faAngleRight} size='lg'/></Button>
                                </a>
                            </div>
                        </Tabs.Item>
                    ))}
                </Tabs>
                <div>
                    <h1 className='bg-orange-peel py-2 text-center font-bold text-violet text-[1.5rem]'>MC Corner</h1>
                    <div className=' bg-white h-[300px] flex items-center justify-center'>
                        <h1>MC Corner Content Will Go Here</h1>
                    </div>
                    <div className="scrolling-text bg-orange-peel">
                        <p className=' text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] py-2 text-white'><span className='font-bold text-violet'>Latest News:-</span> Here is the Latest News from municipal commissioner corner.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews;