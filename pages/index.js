import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Carousel from "../component/Carousel";
import CategoriesCard from "../component/CategoriesCard";
import Footer from "../component/Footer";
import { useLayoutEffect, useEffect, useRef, useState } from "react";

import styles from "../styles/Home.module.css";
import ProductCard from "../component/ProductCard";
import Link from "next/link";

export default function Home() {
  const [heroImages, setHeroImages] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const firstSection = useRef(null);

  useLayoutEffect(() => {
    if (!(firstSection && firstSection.current)) return;

    const sectionOneOptions = {
      rootMargin: "0px 0px 0px 0px",
      threshold: 1,
    };

    const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, sectionOneOptions);

    sectionOneObserver.observe(firstSection.current);

    return () => sectionOneObserver && sectionOneObserver.unobserve(firstSection.current);
  }, []);

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

    setCategories([
      { src: "/assets/images/saree_4.jpeg", title: "bandhani dupatta" },
      { src: "/assets/images/dupata_2.jpeg", title: "bandhani dress" },
      { src: "/assets/images/dress_5.jpeg", title: "bandhani fabric" },
      { src: "/assets/images/saree_6.jpeg", title: "bandhani saree" },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bandhani Trendz | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isActive={isIntersecting} isTransparent={true} />

      <main className={styles.main}>
        <section
          id={styles.heroSection}
          className="bg-gradient bg-pattern-1"
          ref={firstSection}
          aria-describedby="Main section"
        >
          <div className="wrapper two-section-wrapper">
            <header className="left left-60">
              <h2 id={styles.heroHeading}>Wide Range of Classic BANDHAJ Apparels</h2>
            </header>
            <button className={"btn " + styles.exploreBtn}>Explore Now</button>

            <div className="right right-40">
              <div className={styles.carouselWrapper}>
                <Carousel>
                  {heroImages && heroImages.length
                    ? heroImages.map((heroImage, i) => (
                        <div key={i} className={styles.imageWrapper}>
                          <Image
                            priority={i < 2}
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

        <section aria-describedby="Best sellers" id={styles.bestSellesrSection}>
          <div className="wrapper">
            <header>
              <h4 className={styles.sectionHeading + " " + styles.textDark}>best sellers</h4>
            </header>

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

        <section
          aria-describedby="Information about Bandhaj art"
          id={styles.infoSection}
          className="bg-gradient"
        >
          <div className="wrapper">
            <header>
              <h4 className={styles.sectionHeading + " " + styles.textLight}>bandhaj</h4>
            </header>

            <div className="two-section-wrapper">
              <div className="left">
                <Image
                  className={styles.infoImage}
                  src="/assets/images/info.jfif"
                  width={525}
                  height={350}
                  layout="intrinsic"
                />
              </div>
              <div className="right">
                <p className={styles.discription + " " + styles.textLight}>
                  <span>
                    The technique involves dyeing a fabric which is tied tightly with a thread at
                    several points, thus producing a variety of patterns like Chandrakala, Bavan
                    Baug, Shikari etcetera; depending on the manner in which the cloth is tied.
                  </span>
                  <span>
                    Earliest evidence of Bandhani dates back to Indus Valley Civilization suggest
                    that dyeing was done as early as 4000 B.C.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-describedby="Categories" id={styles.infoSection}>
          <div className="wrapper">
            <header>
              <h4 className={styles.sectionHeading + " " + styles.textDark}>categories</h4>
            </header>

            <div className={styles.cardsGrid}>
              {categories.map((category, i) => (
                <Link href={`categories/${i}`} key={i}>
                  <a>
                    <CategoriesCard category={category} />
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
