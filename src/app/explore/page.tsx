import React from 'react'
import HomePageNav from '../components/share-component/NavBar';
import FooterSection from '../components/share-component/FooterSection';
import ExploreHeroSection from '../components/ui/explore-components/ExploreHeroSection';
import ExploreItemsSection from '../components/ui/explore-components/ExploreItemsSection';

function page() {
  return (
    <div>
      <div className="home-page-basic-mx">
        <HomePageNav></HomePageNav>
      </div>

      <div className="explore-hero-sections">
        <ExploreHeroSection></ExploreHeroSection>
      </div>

      <div className="">
        <ExploreItemsSection></ExploreItemsSection>
      </div>

      <div className="homepage-footer">
        <FooterSection></FooterSection>
      </div>
    </div>
  );
}

export default page 