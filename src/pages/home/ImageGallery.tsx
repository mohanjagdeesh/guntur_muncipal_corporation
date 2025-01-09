import React from 'react'
import { IMAGE_GALLERY, VIDEO_GALLERY } from '../../mock-data/image-and-video-gallery/image-and-video-gallery-mock-data.ts';

const ImageGallery = () => {
  return (
    <div className='bg-violet'>
    <div className='container'>
        <div className='py-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
            <div>
                <h1 className=' text-white font-bold text-[1.5rem] mb-4'>Image & Video Gallery</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    IMAGE_GALLERY.slice(0,4).map((each,index)=> <img src={`assets/${each}`} alt={`Image-${index}`} />)
                }
                </div>
                <a href='/image-and-video-gallery' className=' text-orange-peel font-bold text-[1rem] text-right mt-2 underline hover:text-white'>View More</a>
            </div>
            <div>
                {
                    VIDEO_GALLERY.slice(0,1).map((each, index) => (
                        <iframe
                            key={index}
                            className="h-[300px] lg:h-[250px] xl:h-[350px] w-full"
                            src={each}
                            title={`YouTube video player ${index}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ))
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default ImageGallery;