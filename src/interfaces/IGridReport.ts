interface IGridcolumns{
    header:string;
    accessorKey:string;
    id:string;
};


export interface IGridReport{
    columns:IGridcolumns[],
    data:any,
}