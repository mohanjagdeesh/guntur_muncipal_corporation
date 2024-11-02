import React from 'react';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table';
import { IGridReport } from '../../interfaces/IGridReport';


const GridReport = ({columns,data}:IGridReport) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
    return (
        <div className="p-2">
          <table className=' w-full'>
            <thead className='bg-violet'>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className=' text-left text-white p-4 text-[18px] border-1 border-white'>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className='divide-y-[1px] divide-violet'>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id} className='even:bg-gray-100 odd:bg-gray-300'>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className='p-4 text-[18px]'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
};

export default GridReport;