export interface IGridcolumns{
    header:string;
    accessorKey:string;
    id:string;
    cell?:({row})=>any|undefined;
    dataType?:'actions'
};


export interface IGridReport{
    columns:IGridcolumns[],
    data:any,
}