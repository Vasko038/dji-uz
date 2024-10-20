import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Banner() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="h-[100vh]"
    >
      <SwiperSlide className="">
        Slide 1<div className="slide-shadow "></div>
      </SwiperSlide>
      <SwiperSlide>
        Slide 2<div className="slide-shadow "></div>
      </SwiperSlide>
      <SwiperSlide>
        Slide 3<div className="slide-shadow "></div>
      </SwiperSlide>
      <SwiperSlide>
        Slide 4<div className="slide-shadow "></div>
      </SwiperSlide>
      <SwiperSlide>
        Slide 5<div className="slide-shadow "></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
