import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";

import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({ children }) {
  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {children && children.length
          ? children.map((child, i) => <SwiperSlide key={i}>{child}</SwiperSlide>)
          : children}
      </Swiper>
    </>
  );
}
