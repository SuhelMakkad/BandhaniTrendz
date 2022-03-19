import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({
  children,
  spaceBetween = 30,
  slidesPerView = 1,
  slidesPerGroup = 1,
  showPagination = true,
  breakpoints = {},
}) {
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={spaceBetween}
        modules={showPagination ? [Pagination] : []}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={breakpoints}
      >
        {children && children.length
          ? children.map((child, i) => <SwiperSlide key={i}>{child}</SwiperSlide>)
          : children}
      </Swiper>
    </>
  );
}
