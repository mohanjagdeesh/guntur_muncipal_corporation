import {IGridcolumns} from "../interfaces/IGridReport";

export const currencyConvertor = (value:string)=> {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

export const STAFF_DETAILS_GRID_COLUMNS:IGridcolumns[] = [
    {
        header:'S.No',
        accessorKey:'sno',
        id:'sno',
        cell:({row})=>row.index + 1,
      },
      {
        header:'Name(Sri/Smt)',
        accessorKey:'name',
        id:'name',
      },
      {
        header:'Designation',
        accessorKey:'designation',
        id:'designation',
      },
      {
        header:'Mobile',
        accessorKey:'phoneNumber',
        id:'phoneNumber',
      },
]