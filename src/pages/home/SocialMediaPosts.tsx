import React from 'react';
import { FacebookEmbed , InstagramEmbed , XEmbed} from 'react-social-media-embed';

const SocialMediaPosts = () => {
  return (
    <div className='bg-white h-fit py-5'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 border-2 border-orange-peel'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <FacebookEmbed url="https://www.facebook.com/story.php?story_fbid=360967623203257&id=100078700676279&rdid=r08qW54RF0ZgOktv" width={550} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed url="https://www.instagram.com/p/DBqodiXzDmn/?igsh=MXN4Y2ZjbnF4dHhwdw%3D%3D&img_index=1" width={328} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <XEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" width={325} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPosts;
