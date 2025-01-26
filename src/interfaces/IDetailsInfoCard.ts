export interface IDetailsInfoCard{
    mainTitle:string;
    image?:string;
    location?:string;
    description?:string;
    cardClick?:()=>void;
    index?:number;
    activeInfoCardIndex?:number;
};

export interface IParksInfoCard{
    parkTitle:string;
    images?:string[];
    wardNumber?:number;
    extent?:number;
    location?:string;
    activeInfoCardIndex?:number;
    index?:number;
    cardClick?:()=>void;
}