interface IMobileSublinks {
    subLinkHeader: string;
    subLinkTo?: string;
    associatedSubLinks?: {
        associatedSubLinkHeader: string;
        associatedSublinkTo: string;
    }[]
}

export interface IMobleOptions {
    linkHeader: string;
    linkTo?: string;
    linkIcon?:string;
    subLinks?: IMobileSublinks[] | undefined;
}

export interface IHeaderIcons {
    title:string;
    icon:string;
    className?:string;
}