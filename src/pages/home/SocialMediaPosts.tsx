import React, { useEffect, useState } from 'react';
import { FacebookEmbed , InstagramEmbed , XEmbed} from 'react-social-media-embed';

const SocialMediaPosts = () => {
  const [tweets, setTweets] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.twitter.com/2/users/{9963995381}/tweets`, {
  //     headers: {
  //       Authorization: `Bearer {YOUR_BEARER_TOKEN}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setTweets(data.data))
  //     .catch((error) => console.error("Error fetching tweets:", error));
  // }, []);
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
              <XEmbed url="https://x.com/GCorporati20083/status/1862825392845004989?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1862825392845004989%7Ctwgr%5E686740da0212408d9654d126275773fceb1fcc81%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2FGCorporati20083%2Fstatus%2F1862825392845004989" width={328} />
              {/* {tweets.map((tweet) => (
                <div key={tweet.id} className="mb-4">
                  <p>{tweet.text}</p>
                </div>
              ))} */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPosts;
