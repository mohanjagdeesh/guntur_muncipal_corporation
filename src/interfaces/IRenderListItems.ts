export interface IlistItem {
    title?:string;
    subTitle?:string;
}

export interface IRenderListItems{
    title?:string;
    liData?:IlistItem[];
    addClass?:string;
}