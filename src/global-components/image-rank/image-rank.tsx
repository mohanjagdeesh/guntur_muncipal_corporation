import React from 'react'
import { IImageRank } from '../../interfaces/IImageRank';

const ImageRank:React.FC<IImageRank> = ({image,name,rank,index}) => {
  return (
    <div className='flex items-center  justify-center gap-4'>
        <div className='h-[300px] flex-1 flex flex-col items-center'>
            <img className='h-[200px] border-2 border-boulder'  src={image} alt={`Minister${index}`} />
            <h1 className=' text-blue-700 font-semibold text-center leading-none my-2'>Sri. {name}</h1>
            <h1 className='text-black font-light text-center leading-none'>{rank}</h1>
        </div>
    </div>
  )
}

export default ImageRank;