import { useState } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./ProductSideBar.module.css";

export default function ProductImages({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        id={styles.mainImageSwiper}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        autoHeigh={true}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              className={styles.sideImage}
              layout="fill"
              objectFit="contain"
              src={image}
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        id={styles.sideImageSwiper}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        direction="horizontal"
        slidesPerView={4}
        autoHeigh={true}
        breakpoints={{
          650: {
            slidesPerView: 5,
          },
          750: {
            slidesPerView: 6,
          },
          850: {
            slidesPerView: 4,
          },
          950: {
            slidesPerView: 5,
          },
          1150: {
            slidesPerView: 6,
          },
        }}
      >
        {console.log("Thhis is small")}
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image className={styles.sideImage} src={image} layout="fill" objectFit="cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <button id={styles.getItBtn}>Get it now</button>
    </div>
  );
}
