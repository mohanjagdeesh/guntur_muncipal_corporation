import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import { IGridReport } from "../../interfaces/IGridReport";

const GridReport = ({ columns, data, columnGroups = [] }: IGridReport) => {
  const columnHelper = createColumnHelper();

  // Function to create grouped columns
  const renderColumnGroups = (groups) => {
    return groups.map((group) =>
      columnHelper.group({
        id: group.id,
        header: () => <span>{group.header}</span>,
        columns: group.columns
          .map((colId) => {
            const columnDef = columns.find((col) => col.id === colId);
            return columnDef
              ? columnHelper.accessor(columnDef.accessorKey, {
                  id: columnDef.id,
                  cell: columnDef.cell || ((info) => info.getValue()),
                  header: () => <span>{columnDef.header}</span>,
                })
              : null;
          })
          .filter(Boolean),
      })
    );
  };

  // Find standalone columns (not in columnGroups)
  const groupedColumnIds = columnGroups.flatMap((group) => group.columns);
  const standaloneColumns = columns.filter((col) => !groupedColumnIds.includes(col.id));

  // Generate the final column structure (standalone + groups)
  const gridColumns = [
    ...standaloneColumns.map((col) =>
      columnHelper.accessor(col.accessorKey, {
        id: col.id,
        cell: col.cell || ((info) => info.getValue()),
        header: () => <span>{col.header}</span>,
      })
    ),
    ...renderColumnGroups(columnGroups),
  ];

  // Initialize the table with structured columns
  const table = useReactTable({
    data,
    columns: gridColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="py-4 w-full overflow-x-scroll">
      <table className="w-full border border-gray-300">
        {/* Table Header */}
        <thead className="bg-violet">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="text-white p-2 md:p-3 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px]
                             border border-white text-center"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table Body */}
        <tbody className="divide-y-[0.5px] divide-violet">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="even:bg-gray-100 odd:bg-gray-300">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-2 md:p-3 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px] 
                             border border-gray-300"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridReport;
