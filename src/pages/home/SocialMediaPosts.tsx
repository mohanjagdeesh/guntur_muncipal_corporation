import React from 'react';
import { FacebookEmbed , InstagramEmbed , XEmbed} from 'react-social-media-embed';

const SocialMediaPosts = () => {
  return (
    <div className='bg-white h-fit py-5'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 border-2 border-orange-peel'>
            <div className='flex flex-col items-center justify-start'>
              <h1 className='text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-semibold'>Facebook</h1>
              <FacebookEmbed url="https://www.facebook.com/story.php?story_fbid=360967623203257&id=100078700676279&rdid=r08qW54RF0ZgOktv" width={328} />
            </div>
            <div className='flex flex-col items-center justify-start'>
              <h1 className='text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-semibold'>Instagram</h1>
              <InstagramEmbed url="https://www.instagram.com/p/DBqodiXzDmn/?igsh=MXN4Y2ZjbnF4dHhwdw%3D%3D&img_index=1" width={328} />
            </div>
            <div className='flex flex-col items-center justify-start'>
              <h1 className='text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-semibold'>Twitter</h1>
              <XEmbed url="https://twitter.com/GCorporati20083/status/1863935662107365483?ref_src=twsrc%5Etfw" width={328} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPosts;
