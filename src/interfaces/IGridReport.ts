interface IGridcolumns{
    header:string;
    accessorKey:string;
    id:string;
    cell?:({row})=>any|undefined;
};


export interface IGridReport{
    columns:IGridcolumns[],
    data:any,
}