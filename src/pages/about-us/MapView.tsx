import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MapView = () => {
  const maps = [
    {
      url: 'https://guntur-site-assets.s3.us-east-1.amazonaws.com/CONSTITUENCY_MAP_TOTAL.jpg',
      alt: 'GMC_MAP',
      name: 'ConstituencyMap.jpg',
    },
    {
      url: 'https://guntur-site-assets.s3.us-east-1.amazonaws.com/GUNTUR_SECRETARIAT_MAP.jpg',
      alt: 'GMC_WARDS_MAP',
      name: 'SecretariatMap.jpg',
    },
  ];

  const downloadImage = async (url, fileName) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      console.log(blobUrl)
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      
      // Release memory
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading the image:', error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {maps.map((map, index) => (
          <div key={index} className='flex flex-col'>
            <img
              src={map.url}
              alt={map.alt}
              className="border-2 border-violet object-contain h-[250px] md:h-[350px] lg:h-[500px] w-full"
            />
            <button
              onClick={() => downloadImage(map.url, map.name)}
              className='py-[10px] px-[20px] bg-violet text-white font-semibold border-none rounded-[5px] cursor-pointer mt-[10px] hover:bg-orange-peel hover:text-violet'
            >
              Download Map <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        ))}
      </div>
      <div className="h-[250px] md:h-[300px] lg:h-[350px] flex-1 mb-4">
        <iframe
          className="mb-4"
          title="GMC_Wards"
          src="https://www.google.com/maps/d/embed?mid=119a-sP2p4IOY9x4cqTg1wjMQi1pXaSY&ehbc=2E312F"
          width="100%"
          height="480"
        />
      </div>
    </>
  );
};

export default MapView;
