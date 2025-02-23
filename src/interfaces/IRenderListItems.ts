export interface IlistItem {
    title?:string;
    subTitle?:string;
    subListItems?:Array<{title:string;subTitle:string;}>
}

export interface IRenderListItems{
    title?:string;
    liData?:IlistItem[];
    addClass?:string;
    lineBreak?:boolean;
    liClass?:string;
    titleClass?:string;
}