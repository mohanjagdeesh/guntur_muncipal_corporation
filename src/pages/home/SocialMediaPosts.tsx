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
            <blockquote className="twitter-tweet"><p lang="te" dir="ltr">గుంటూరు నగరపాలక సంస్థ పరిధిలో ఎమినిటి కార్యదర్శులు పిఎంఏవై 2.0 డిమాండ్ సర్వేని వేగంగా పూర్తి చేయాలని నగరపాలక సంస్థ అదనపు కమిషనర్ సిహెచ్.ఓబులేసు ఆదేశించారు. <a href="https://t.co/TdHYXOzxmm">pic.twitter.com/TdHYXOzxmm</a></p>&mdash; Guntur Municipal Corporation (@GCorporati20083) <a href="https://twitter.com/GCorporati20083/status/1863935662107365483?ref_src=twsrc%5Etfw">December 3, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPosts;
