export interface INavigationDrawer{
    navOptionsCount:number;
    navDrawer?:boolean;
    setNavDrawer?:React.Dispatch<React.SetStateAction<boolean>>;
    className?:string;
    clousureRequired?:boolean;
}