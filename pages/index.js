import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Carousel from "../component/Carousel";
import { useEffect, useRef, useState } from "react";

import styles from "../styles/Home.module.css";
import ProductCard from "../component/ProductCard";
import Link from "next/link";

export default function Home() {
  const [heroImages, setHeroImages] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const firstSection = useRef(null);

  useEffect(() => {
    setHeroImages([
      { src: "/assets/images/saree_4.jpeg", title: "SAREE 1" },
      { src: "/assets/images/dupata_2.jpeg", title: "SAREE 4" },
      { src: "/assets/images/dress_5.jpeg", title: "SAREE 3" },
      { src: "/assets/images/saree_6.jpeg", title: "SAREE 4" },
    ]);

    setBestSellers([
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

    if (!firstSection.current) return;
    console.log(firstSection.current);

    const sectionOneOptions = {
      rootMargin: "0px 0px 0px 0px",
      threshold: 1,
    };

    const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
      entries.forEach((entry) => {
        const nav = document.querySelector("nav");
        if (!entry.isIntersecting) {
          nav && nav.classList.add("active");
          nav && nav.classList.remove("inactive");
        } else {
          nav && nav.classList.add("inactive");
          nav && nav.classList.remove("active");
        }
      });
    }, sectionOneOptions);

    sectionOneObserver.observe(firstSection.current);

    return () => sectionOneObserver.unobserve(firstSection.current);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bandhani Trendz | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isTransparent={true} />

      <main className={styles.main}>
        <section id={styles.heroSection} className="bg-gradient bg-pattern-1" ref={firstSection}>
          <div className="wrapper two-section-wrapper ">
            <div className="left left-60">
              <h2 className={styles.heroHeading}>Wide Range of Classic BANDHAJ Apparels</h2>
              <button className={"btn " + styles.exploreBtn}>Explore Now</button>
            </div>

            <div className="right right-40">
              <div className={styles.carouselWrapper}>
                <Carousel>
                  {heroImages && heroImages.length
                    ? heroImages.map((heroImage, i) => (
                        <div key={i} className={styles.imageWrapper}>
                          <Image
                            priority={i === 0}
                            className={styles.heroImage}
                            src={heroImage.src}
                            width={350}
                            height={230}
                            layout="responsive"
                          />
                          <span className={styles.heroImageTitle}>{heroImage.title}</span>
                        </div>
                      ))
                    : ["Loading..."]}
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.bestSellesrSection}>
          <div className="wrapper">
            <h4 className={styles.sectionHeading + " " + styles.headingDark}>best sellers</h4>

            <div className={styles.productsWrapper}>
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
    </div>
  );
}
