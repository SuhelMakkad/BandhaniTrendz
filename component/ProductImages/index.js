import { useState } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./ProductSideBar.module.css";

export default function ProductSideBar({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        id={styles.sideImageSwiper}
        direction={"vertical"}
        onSwiper={setThumbsSwiper}
        slidesPerView={7}
        autoHeight={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              className={styles.sideImage}
              src={image}
              width={75}
              height={75}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        id={styles.mainImageSwiper}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              className={styles.sideImage}
              src={image}
              width={500}
              height={650}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
        <button id={styles.getItBtn}>Get it now</button>
      </Swiper>
    </div>
  );
}
