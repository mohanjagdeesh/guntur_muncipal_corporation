import React, { useEffect, useState } from 'react';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import { HR } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import GridReport from '../../components/grid/GridReport.tsx';
import { IGridReport } from '../../interfaces/IGridReport.ts';

const RTI_ACT_GRID_COLUMNS:IGridReport ={
    columns:[
      {
        header:'S.No',
        accessorKey:'sno',
        id:'sno',
        cell:({row})=>row.index + 1,
      },
      {
        header:'Title',
        accessorKey:'title',
        id:'title',
      },
      {
        header:'Size',
        accessorKey:'size',
        id:'size',
      },
      {
        header:'Detail',
        accessorKey:'detail',
        id:'detail',
        dataType:'actions',
      },
    ],
    data:[
        {
            title:'Right to Information Act, 2005',
            size:'123456'
        },
    ]
  };

const RtiAct = () => {
    const [fileSize, setFileSize] = useState('');

  const pdfUrl =
    'https://guntur-site-assets.s3.us-east-1.amazonaws.com/RTI_final_docs.pdf';

  useEffect(() => {
    const fetchFileSize = async () => {
      try {
        const response = await fetch(pdfUrl, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        if (contentLength) {
          const sizeInKB = (parseInt(contentLength, 10) / 1024).toFixed(2);
          setFileSize(sizeInKB);
        }
      } catch (error) {
        console.error('Error fetching file size:', error);
      }
    };

    fetchFileSize();
  }, [pdfUrl]);
  return (
    <>
        <PageTitleBanner title='RTI Act'/>
        <div className='container'>
            <h1 className=' text-2xl font-normal'>Right to Information Act</h1>
            <HR className='mt-0 mb-4 border-2'/>
            <p className=' text-lg font-normal'>Right to Information Act 2005 mandates timely response to citizen requests for government Information. An informed citizen is better equipped to keep necessary
                vigil on the instruments of governance and make the government more accountable to the governed. The Act is a big step towards making the citizens informed about the
                activities of the Government.
            </p>
            <p className=' my-3 text-lg font-semibold'>Objective of the Right to Information Act:</p>
            <ul>
                <li className=' text-lg font-normal'><FontAwesomeIcon className=' rotate-90 size-4 text-orange-peel mr-2' icon={faHandPointer} />To empower the citizens.</li>
                <li className=' text-lg font-normal'><FontAwesomeIcon className=' rotate-90 size-4 text-orange-peel mr-2' icon={faHandPointer} />To empower the citizens.</li>
                <li className=' text-lg font-normal'><FontAwesomeIcon className=' rotate-90 size-4 text-orange-peel mr-2' icon={faHandPointer} />To empower the citizens.</li>
            </ul>
            <div className="py-4 sm:overflow-x-scroll lg:overflow-hidden">
          <table className=' w-full'>
                <thead className='bg-violet'>
                    <tr>
                    <th className="text-left text-white p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px] border-1 border-white">S.No</th>
                    <th className="text-left text-white p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px] border-1 border-white">Title</th>
                    <th className="text-left text-white p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px] border-1 border-white">Size</th>
                    <th className="text-left text-white p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px] border-1 border-white">Detail</th>
                </tr>
            </thead>
            <tbody className='divide-y-[0.5px] divide-violet'>
                <tr className="even:bg-gray-100 odd:bg-gray-300">
                    <td className="p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px]">1</td>
                    <td className="p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px]">Right to Information Act. 2005</td>
                    <td className="p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px]">{fileSize ? `${fileSize} KB` : 'Loading...'}</td>
                    <td className="p-1 md:p-2.5 lg:p-4 text-[12px] md:text-[14px] lg:text-[18px]">
                        <a href={pdfUrl} download='RTI_Final.pdf' target='_blank' rel='noreferrer' className="text-blue-500 hover:underline flex items-center">
                            <span>Download</span>
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                            alt="PDF Icon"
                            className="ml-2 w-4 h-4"
                            />
                        </a>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
        </div>
    </>
  )
}

export default RtiAct;