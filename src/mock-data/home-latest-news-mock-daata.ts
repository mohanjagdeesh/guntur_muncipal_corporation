import { ILatestNews, ILatestNewsTabs } from "../interfaces/ILatestNews";

export const PRESS_RELEASE:ILatestNews[] = [
    {
        newsDate:'21/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'22/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'23/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'24/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'25/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'26/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'27/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'28/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'29/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
]

export const TENDERS:ILatestNews[] = [
    {
        newsDate:'11/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'12/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'13/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'14/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'15/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'16/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'17/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'18/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'19/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
]

export const RECRUITMENT:ILatestNews[] = [
    {
        newsDate:'01/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'02/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'03/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'04/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'05/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'06/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'07/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'08/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'09/11/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
]

export const DOWNLOADS:ILatestNews[] = [
    {
        newsDate:'01/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'02/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'03/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'04/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'05/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'06/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'07/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'08/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
        newsDate:'09/12/2024',
        newsDescription : 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
]


export const LATEST_NEWS_TAB_ITEMS:ILatestNewsTabs[] = [
    {
        tabTitle:'News and Events',
        tabIcon:'HiMicrophone',
        tabContent:PRESS_RELEASE,
        tabActiveStatus:true,
        readMoreLink:'https://google.com'
    },
    {
        tabTitle:'Tenders',
        tabIcon:'MdDashboard',
        tabContent:TENDERS,
        tabActiveStatus:false,
        readMoreLink:'https://google.com'
    },
    {
        tabTitle:'Downloads',
        tabIcon:'HiDownload',
        tabContent:DOWNLOADS,
        tabActiveStatus:false,
        readMoreLink:'https://google.com'
    },
]