export interface ILatestNews{
    newsDate:string;
    newsDescription:string;
}

export interface ILatestNewsTabs{
    tabTitle:string;
    tabIcon:string;
    tabContent:ILatestNews[],
    tabActiveStatus:boolean;
    readMoreLink:string;
}