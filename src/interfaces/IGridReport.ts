export interface IGridcolumns {
    header: string;
    accessorKey: string;
    id: string;
    cell?: ({ row }) => any | undefined;
    dataType?: 'actions';
  }
  
  export interface IColumnGroup {
    id: string;
    header: string;
    columns: string[] | IColumnGroup[];
  }
  
  export interface IGridReport {
    columns: IGridcolumns[];
    data: any;
    columnGroups?: IColumnGroup[];
  }
  