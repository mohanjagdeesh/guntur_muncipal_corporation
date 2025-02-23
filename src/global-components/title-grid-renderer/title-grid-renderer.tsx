import React from 'react'
import { ITitleGrid } from '../../interfaces/ITitleGrid.ts'
import GridReport from '../../components/grid/GridReport.tsx'

const TitleGridRenderer = ({gridTitle , gridColumns}:ITitleGrid) => {
  return (
    <>
      <h1 className=' text-red-600 font-bold text-center leading-none md:text-[1.5rem]'>{gridTitle}</h1>
      <GridReport {...gridColumns} />
    </>
  )
}

export default TitleGridRenderer;