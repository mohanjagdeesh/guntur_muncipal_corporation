import { InpageNavigationProps } from "./IInpageNavigation";

export interface IDepartmentsDataRenderer{
    description?:string;
    liRenderer?:React.ReactNode;
    dataGrid?:React.ReactNode;
    gridDescription?:string;
    departmentImage?:string;
    additionalInPageNavLinks?:InpageNavigationProps[];
}