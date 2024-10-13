import React from 'react'
import { IImageRank } from '../../interfaces/IImageRank';

const ImageRank:React.FC<IImageRank> = ({image,name,rank,index}) => {
  return (
    <div className='flex items-center gap-4'>
        <div className='w-60 h-fit'>
            <img className='h-56 w-56' src={image} alt={`Minister${index}`} />
            <h1 className=' text-blue-700 font-semibold text-center'>Sri. {name}</h1>
            <h1 className='text-black font-light text-center'>{rank}</h1>
        </div>
    </div>
  )
}

export default ImageRank;