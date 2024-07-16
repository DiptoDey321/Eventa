"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ExploreCard from "../../resuable-component/ExploreCard";
import album from '../../../../../public/album.webp'

const ExploreHeroSection = () => {

    const handleButtonClick = () => {
        console.log("Button clicked!");
    };
    
  return (
    <div className="explore-slider-cotainer">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              height: "480px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ExploreCard
              imageSrc={album}
              heading="Card Heading Card Card Heading Card Heading"
              location="Jomuna Future park, Dhaka"
              date="June 28, 2024"
              onButtonClick={handleButtonClick}
            ></ExploreCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "480px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ExploreCard
              imageSrc={album}
              heading="Card Heading Card Card Heading Card Heading"
              location="Jomuna Future park, Dhaka"
              date="June 28, 2024"
              onButtonClick={handleButtonClick}
            ></ExploreCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "480px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ExploreCard
              imageSrc={album}
              heading="Card Heading Card Card Heading Card Heading"
              location="Jomuna Future park, Dhaka"
              date="June 28, 2024"
              onButtonClick={handleButtonClick}
            ></ExploreCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "480px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ExploreCard
              imageSrc={album}
              heading="Card Heading Card Card Heading Card Heading"
              location="Jomuna Future park, Dhaka"
              date="June 28, 2024"
              onButtonClick={handleButtonClick}
            ></ExploreCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "480px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ExploreCard
              imageSrc={album}
              heading="Card Heading Card Card Heading Card Heading"
              location="Jomuna Future park, Dhaka"
              date="June 28, 2024"
              onButtonClick={handleButtonClick}
            ></ExploreCard>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px", color: "white" }}>
          Slide 6
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px", color: "white" }}>
          Slide 7
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px", color: "white" }}>
          Slide 8
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px", color: "white" }}>
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ExploreHeroSection;
