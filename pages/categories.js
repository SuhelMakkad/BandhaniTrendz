import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";

import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import TitleBar from "../component/TitleBar";
import Carousel from "../component/Carousel";
import ProductCard from "../component/ProductCard";

import styles from "../styles/Catagories.module.css";

export default function Catagories() {
  const [headerImages, setHeaderImages] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  const catagories = ["saree", "dress", "fabric", "dupata"];

  useEffect(() => {
    setHeaderImages([
      { src: "/assets/images/saree_4.jpeg", title: "saree" },
      { src: "/assets/images/dupata_2.jpeg", title: "dupata" },
      { src: "/assets/images/dress_5.jpeg", title: "dress" },
      { src: "/assets/images/saree_6.jpeg", title: "fabric" },
    ]);

    setBestSellers([
      {
        src: "/assets/images/saree_5.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_7.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_3.jpeg",
        title: "Green - Bandhani Saree",
        rating: 4.5,
        reviewCount: 17,
        price: 1799,
      },
      {
        src: "/assets/images/dress_1.jpeg",
        title: "Green - Bandhani Dress",
        rating: 4,
        reviewCount: 10,
        price: 899,
      },
      {
        src: "/assets/images/saree_6.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_4.jpeg",
        title: "Green - Bandhani Saree",
        rating: 3.5,
        reviewCount: 35,
        price: 599,
      },
      {
        src: "/assets/images/dress_2.jpeg",
        title: "Green - Bandhani Dress",
        rating: 4.5,
        reviewCount: 9,
        price: 799,
      },
      {
        src: "/assets/images/saree_5.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_7.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_3.jpeg",
        title: "Green - Bandhani Saree",
        rating: 4.5,
        reviewCount: 17,
        price: 1799,
      },
      {
        src: "/assets/images/dress_1.jpeg",
        title: "Green - Bandhani Dress",
        rating: 4,
        reviewCount: 10,
        price: 899,
      },
      {
        src: "/assets/images/saree_6.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_4.jpeg",
        title: "Green - Bandhani Saree",
        rating: 3.5,
        reviewCount: 35,
        price: 599,
      },
      {
        src: "/assets/images/dress_2.jpeg",
        title: "Green - Bandhani Dress",
        rating: 4.5,
        reviewCount: 9,
        price: 799,
      },
      {
        src: "/assets/images/saree_5.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_7.jpeg",
        title: "Green - Bandhani Saree",
        rating: 2,
        reviewCount: 2,
        price: 2199,
      },
      {
        src: "/assets/images/saree_3.jpeg",
        title: "Green - Bandhani Saree",
        rating: 4.5,
        reviewCount: 17,
        price: 1799,
      },
    ]);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isTransparent={false} />

      <TitleBar items={catagories} />

      <main className={styles.main + " bg-secondary"}>
        <p className={`wrapper ${styles.titleLine}`}>
          Earliest evidence of Bandhani dates back to Indus Valley Civilization suggest that dyeing
          was done as early as 4000 B.C.
        </p>

        <section aria-describedby="Carousel showing catagories" id={styles.carousel}>
          <div className="wrapper pt-0">
            <div className={styles.carouselWrapper}>
              <Carousel>
                {headerImages && headerImages.length
                  ? headerImages.map((image, i) => (
                      <div key={i} className={styles.imageWrapper}>
                        <Image
                          priority={i < 2}
                          className={styles.image}
                          src={image.src}
                          width={350}
                          height={300}
                          layout="fill"
                        />
                        <span className={styles.imageTitle}>{image.title}</span>
                      </div>
                    ))
                  : ["Loading..."]}
              </Carousel>
            </div>
          </div>
        </section>

        <section aria-describedby="Products" id={styles.carousel}>
          <div className="wrapper pt-0">
            <div className={styles.filterWrapper}>
              <button id={styles.filterBtn}>filters</button>
              <span className={styles.filterItems}>Category: All</span>
              <span className={styles.filterItems}>Sort by: Popularity</span>
            </div>

            <div className={styles.cardsGrid}>
              {bestSellers.map((bestSeller, i) => (
                <Link href={`product/${i}`} key={i}>
                  <a>
                    <ProductCard product={bestSeller} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}