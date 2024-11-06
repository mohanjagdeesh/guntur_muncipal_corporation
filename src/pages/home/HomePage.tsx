import React from 'react';
import HomeBannerCarousels from './HomeBannerCarousels.tsx';
import HomeBioCards from './HomeBioCards.tsx';
import ImageGallery from './ImageGallery.tsx';
import Services from './Services.tsx';
import RelatedLinks from './RelatedLinks.tsx';
import LatestNews from './LatestNews.tsx';


const HomePage = () => {
        return (
            <div>
                <HomeBannerCarousels/>
                <HomeBioCards/>
                <LatestNews/>
                <Services/>
                <ImageGallery/>
                <RelatedLinks/>
            </div>
        )
}

export default HomePage;