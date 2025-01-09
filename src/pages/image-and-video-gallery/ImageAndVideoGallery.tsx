import React from 'react';
import PageTitleBanner from '../../global-components/page-title-banner/page-title-banner.tsx';
import { IMAGE_GALLERY, VIDEO_GALLERY } from '../../mock-data/image-and-video-gallery/image-and-video-gallery-mock-data.ts';

const ImageAndVideoGallery = () => {
  return (
    <>
    <PageTitleBanner title='Image & Video Gallery' />
    <div className='container'>
        <div className=' grid grid-cols-1 md:grid-cols-2 my-4'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    IMAGE_GALLERY.map((each,index)=> <img src={`assets/${each}`} alt={`Image-${index}`} />)
                }
            </div>
            <div className=' flex flex-col gap-4'>
            {
                VIDEO_GALLERY.map((each, index) => (
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
    </>
  );
};

export default ImageAndVideoGallery;