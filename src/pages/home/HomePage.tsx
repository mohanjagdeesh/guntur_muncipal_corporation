import React from 'react';
import HomeBannerCarousels from './HomeBannerCarousels.tsx';
import HomeBioCards from './HomeBioCards.tsx';
import LatestNews from './LatestNews.tsx';
import Services from './Services.tsx';
import RelatedLinks from './RelatedLinks.tsx';


const HomePage = () => {
        return (
            <div>
                <HomeBannerCarousels/>
                <HomeBioCards/>
                <LatestNews/>
                <Services/>
                <RelatedLinks/>
            </div>
        )
}

export default HomePage;