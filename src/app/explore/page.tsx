"use client";
import { useGetEventsQuery } from "@/redux/api/ticketsApi";
import FooterSection from "../components/share-component/FooterSection";
import HomePageNav from "../components/share-component/NavBar";
import ExploreHeroSection from "../components/ui/explore-components/ExploreHeroSection";
import ExploreItemsSection from "../components/ui/explore-components/ExploreItemsSection";
import Loading from "../loading";

function Page() {
  const { data, error, isLoading } = useGetEventsQuery(undefined);

  if (isLoading) {
    return <div>
      <Loading></Loading>
    </div>;
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
