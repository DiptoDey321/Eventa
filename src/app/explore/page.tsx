"use client";
import React from "react";
import HomePageNav from "../components/share-component/NavBar";
import FooterSection from "../components/share-component/FooterSection";
import ExploreHeroSection from "../components/ui/explore-components/ExploreHeroSection";
import ExploreItemsSection from "../components/ui/explore-components/ExploreItemsSection";
import { useGetEventsQuery } from "@/redux/api/ticketsApi";

function Page() {
  const { data, error, isLoading } = useGetEventsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return;
  }

  console.log(data);
  
  return (
    <div>
      <div className="home-page-basic-mx">
        <HomePageNav></HomePageNav>
      </div>

      <div className="explore-hero-sections">
        <ExploreHeroSection data={data}></ExploreHeroSection>
      </div>

      <div className="">
        <ExploreItemsSection data={data}></ExploreItemsSection>
      </div>

      <div className="homepage-footer">
        <FooterSection></FooterSection>
      </div>
    </div>
  );
}

export default Page;
