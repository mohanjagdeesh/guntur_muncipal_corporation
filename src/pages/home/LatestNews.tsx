import React from 'react'
import { Button, Tabs } from "flowbite-react";
import { HiUser, HiDownload ,HiMicrophone} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { LATEST_NEWS_TAB_ITEMS, } from '../../mock-data/home-latest-news-mock-daata.ts';
import RenderLatestNews from '../../global-components/latest-news/latest-news.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tweet } from 'react-tweet';


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
                <div className=' flex items-center justify-center border-8 border-orange-peel p-4'>
                <Tweet id="1628832338187636740" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews;