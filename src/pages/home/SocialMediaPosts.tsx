import React from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { Tweet } from 'react-tweet';

const SocialMediaPosts = () => {
  return (
    <div className='bg-white h-fit py-5'>
        <div className='container'>
             <FacebookProvider appId="your-app-id">
                <EmbeddedPost href="https://www.facebook.com/story.php?story_fbid=360967623203257&id=100078700676279&rdid=r08qW54RF0ZgOktv" width="300" />
            </FacebookProvider>
        </div>
    </div>
  )
}

export default SocialMediaPosts