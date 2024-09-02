"use client";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import album from '../../../../../public/album.webp';
import ExploreCard from "../../resuable-component/ExploreCard";

const ExploreHeroSection = ({ data}:any) => {

  const router = useRouter();
  
  const handleButtonClick = (id:any) => {
    router.push(`/explore/event-details/${id}`);
  };

  console.log(data?.data);
  

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
                height: "430px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ExploreCard
                imageSrc={data?.event_image_url ?`https://link.storjshare.io/raw/jw2ydrl6k3ff65py2xpvvgm3qseq/${data?.event_image_url}` : album}
                heading={data?.title}
                location={data?.address}
                date={data?.event_start_date_time}
                onButtonClick={() => handleButtonClick(data?.id)}
              ></ExploreCard>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExploreHeroSection;
