import React from 'react';
import HomeBannerCarousels from './HomeBannerCarousels.tsx';
import HomeBioCards from './HomeBioCards.tsx';
import ImageGallery from './ImageGallery.tsx';
import Services from './Services.tsx';
import RelatedLinks from './RelatedLinks.tsx';
import LatestNews from './LatestNews.tsx';
import SocialMediaPosts from './SocialMediaPosts.tsx';


const HomePage = () => {
        return (
            <div>
                <HomeBannerCarousels/>
                <HomeBioCards/>
                <LatestNews/>
                <SocialMediaPosts/>
                <Services/>
                <ImageGallery/>
                <RelatedLinks/>
            </div>
        )
}

export default HomePage;