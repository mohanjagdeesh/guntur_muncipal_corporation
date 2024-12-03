export interface IDetailsInfoCard{
    mainTitle:string;
    image?:string;
    location?:string;
    description?:string;
    cardClick?:()=>void;
    index?:number;
    activeInfoCardIndex?:number;
};