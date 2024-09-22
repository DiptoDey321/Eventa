import FooterSection from "./components/share-component/FooterSection";
import NavBar from "./components/share-component/NavBar";
import EveryThingScaleSection from "./components/ui/homepage-components/EveryThingScaleSection";
import HeroSection from "./components/ui/homepage-components/HeroSection";
import LearnFromBest from "./components/ui/homepage-components/LearnFromBest";
import QnaSection from "./components/ui/homepage-components/QnaSection";
import RSVPSection from "./components/ui/homepage-components/RSVPSection";
import ToolManagmentSections from "./components/ui/homepage-components/ToolManagmentSections";
import UserCountSection from "./components/ui/homepage-components/UserCountSection";
import WhatsClientSays from "./components/ui/homepage-components/WhatsClientSays";

export default function Home() {
  return (
    <main className="home-page">
      <div className="hero-section-bg">
        <div className="home-page-basic-mx">
          <NavBar></NavBar>
        </div>
        <div className="home-page-basic-mx">
          <HeroSection></HeroSection>
        </div>
      </div>
      <div className="bg-yellows">
        <RSVPSection></RSVPSection>
      </div>
      <div className="">
        <ToolManagmentSections></ToolManagmentSections>
      </div>
      <div className="everyting-scale-section">
        <EveryThingScaleSection></EveryThingScaleSection>
      </div>

      <div className="home-page-basic-mx">
        <LearnFromBest></LearnFromBest>
      </div>

      <div className="clients-section">
        <WhatsClientSays></WhatsClientSays>
      </div>

      <div className="user-counting">
        <UserCountSection></UserCountSection>
      </div>

      <div className="qna_Section">
        <QnaSection></QnaSection>
      </div>
      <div className="homepage-footer">
        <FooterSection></FooterSection>
      </div>
    </main>
  );
}
