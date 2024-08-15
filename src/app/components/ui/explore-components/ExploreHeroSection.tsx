"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ExploreCard from "../../resuable-component/ExploreCard";
import album from '../../../../../public/album.webp'

const ExploreHeroSection = ({ data}:any) => {

  console.log(data.data);
  
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
        {data?.data?.map((data: any, index: number) => (
          <SwiperSlide key={index}>
            <div
              style={{
                // height: "480px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ExploreCard
                imageSrc={album}
                heading={data?.title}
                location={data?.address}
                date={data?.event_start_date_time}
                onButtonClick={handleButtonClick}
              ></ExploreCard>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExploreHeroSection;
