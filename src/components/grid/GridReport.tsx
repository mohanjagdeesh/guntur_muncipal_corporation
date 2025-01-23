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
        <div className="py-4 sm:overflow-x-scroll lg:overflow-hidden">
          <table className=' w-full'>
            <thead className='bg-violet'>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className=' text-left text-white p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px] border-1 border-white'>
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
            <tbody className='divide-y-[0.5px] divide-violet'>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id} className='even:bg-gray-100 odd:bg-gray-300'>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className='p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px]'>
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