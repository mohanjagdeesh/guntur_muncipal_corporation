import React from 'react'
import {IImageRank } from '../../interfaces/IImageRank';
import ImageRank from '../../global-components/image-rank/image-rank.tsx';

const ministersDetails:IImageRank[]=[
    {
        image:'assets/chief_minister.jpeg',
        name:'Nara Chandrababu Naidu',
        rank:'Honble Chief Minister',
    },
    {
        image:'assets/ponguru_narayan.jpeg',
        name:'Ponguru Narayana',
        rank:'Honble Minister for Muncipal Administration & Urban Development',
    },
]

const AboutMinisters = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2'>
    {ministersDetails.map((minister:IImageRank,index:number)=> {
        return <ImageRank key={index} image={minister.image} name={minister.name} rank={minister.rank} index={index} />
    })}
    </div>
  )
}

export default AboutMinisters;