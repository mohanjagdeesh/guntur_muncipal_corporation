import React from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { Tweet } from 'react-tweet';

const SocialMediaPosts = () => {
  return (
    <div className='bg-white h-fit py-5'>
      <div className='container'>
        <div className='flex'>
          <FacebookProvider appId="your-app-id">
            <EmbeddedPost
              href="https://www.facebook.com/story.php?story_fbid=360967623203257&id=100078700676279&rdid=r08qW54RF0ZgOktv"
              width="300"
            />
          </FacebookProvider>
          <div className='bg-white border-2 border-gray-600'>
            <h1 className='bg-violet py-2 text-white font-bold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-center'>
              MC Corner
            </h1>
            <img src='/assets/comissioner.jpg' alt='Commissioner' />
            <div className='bg-violet py-2 overflow-hidden relative'>
              <div className='text-white font-thin text-center text-[1rem] scrolling-text'>
                Latest News: This is the latest update from the commissioner. Stay tuned for more updates!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPosts;
