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
    alert('Will Implement Soon')
    // try {
    //   const response = await fetch(url);
    //   const blob = await response.blob();
    //   const blobUrl = window.URL.createObjectURL(blob);
    //   console.log(blobUrl)
      
    //   const a = document.createElement('a');
    //   a.href = blobUrl;
    //   a.download = fileName;
    //   document.body.appendChild(a);
    //   a.click();
    //   a.remove();
      
    //   // Release memory
    //   window.URL.revokeObjectURL(blobUrl);
    // } catch (error) {
    //   console.error('Error downloading the image:', error);
    // }
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
            <a href={map.url} download="CONSTITUENCY_MAP_TOTAL.jpg">
              <button
                className='py-[10px] px-[20px] bg-violet text-white font-semibold border-none rounded-[5px] cursor-pointer mt-[10px] hover:bg-orange-peel hover:text-violet'
              >
                Download Map <FontAwesomeIcon icon={faDownload} />
              </button>
            </a>
          </div>
        ))}
      </div>
      <div className="h-[250px] md:h-[300px] lg:h-[350px] flex-1 mb-4">
        <iframe
          className="mb-4"
          title="GMC_Wards"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100000!2d80.4068!3d16.2965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE3JzQ4LjQiTiA4MMKwMjQnMjQuNSJF!5e0!3m2!1sen!2sin!4v1698773564263`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="h-[250px] md:h-[300px] lg:h-[350px] flex-1 mb-4">
        <iframe
          className="mb-4"
          title="GMC_Wards"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15622.869786086867!2d80.418693!3d16.302863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzEwLjMiTiA4MMKwMjUnMTYuMyJF!5e0!3m2!1sen!2sin!4v1698773564263`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </>
  );
};

export default MapView;
