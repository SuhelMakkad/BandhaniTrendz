import { useEffect, useState } from "react";

import Image from "next/image";

import PageHead from "../../component/PageHead";
import Carousel from "../../component/Carousel";
import Navbar from "../../component/Navbar";
import TitleBar from "../../component/TitleBar";
import ProductImages from "../../component/ProductImages";
import ProductDescription from "../../component/ProductDescription";
import Footer from "../../component/Footer";

import styles from "../../styles/Product.module.css";
import Link from "next/link";

export default function Product() {
  const [productImages, setProductImages] = useState([]);
  const [exploreImages, setExploreImages] = useState([]);

  const catagories = [
    { title: "saree", url: "/categories?type=saree" },
    { title: "dress", url: "/categories?type=dress" },
    { title: "fabric", url: "/categories?type=fabric" },
    { title: "dupata", url: "/categories?type=dupata" },
  ];

  useEffect(() => {
    setExploreImages([
      { src: "/assets/images/saree_4.jpeg", title: "SAREE 1" },
      { src: "/assets/images/dress_5.jpeg", title: "SAREE 3" },
      { src: "/assets/images/saree_6.jpeg", title: "SAREE 4" },
      { src: "/assets/images/saree_4.jpeg", title: "SAREE 1" },
      { src: "/assets/images/dupata_2.jpeg", title: "SAREE 4" },
      { src: "/assets/images/saree_4.jpeg", title: "SAREE 1" },
      { src: "/assets/images/saree_6.jpeg", title: "SAREE 4" },
      { src: "/assets/images/dress_5.jpeg", title: "SAREE 3" },
      { src: "/assets/images/saree_6.jpeg", title: "SAREE 4" },
      { src: "/assets/images/dress_5.jpeg", title: "SAREE 3" },
    ]);

    setProductImages([
      "/assets/images/saree_4.jpeg",
      "/assets/images/dress_5.jpeg",
      "/assets/images/saree_6.jpeg",
      "/assets/images/dupata_2.jpeg",
      "/assets/images/saree_4.jpeg",
      "/assets/images/dress_5.jpeg",
      "/assets/images/saree_6.jpeg",
      "/assets/images/saree_4.jpeg",
      "/assets/images/dupata_2.jpeg",
      "/assets/images/saree_4.jpeg",
      "/assets/images/saree_6.jpeg",
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <PageHead title="Product" />

      <Navbar isTransparent={false} />

      <TitleBar items={catagories} />

      <main className={styles.main}>
        <section aria-describedby="product deatils" id={styles.productSeection}>
          <div className="wrapper">
            <div className={styles.productWrapper}>
              <div className={styles.productImages}>
                <ProductImages images={productImages} />
              </div>
              <div className={styles.productDescription}>
                <ProductDescription />
              </div>
            </div>
          </div>
        </section>

        <section aria-describedby="more items to explore" id={styles.exploreSection}>
          <div className="wrapper pt-0">
            <div className={styles.exploreWrapper}>
              <header>
                <h6 id={styles.exploreHeader}>More items to explore</h6>
              </header>

              <div className={styles.exploreCarousel}>
                <Carousel
                  slidesPerView={2}
                  spaceBetween={15}
                  showPagination={false}
                  breakpoints={{
                    550: {
                      slidesPerView: 3,
                    },
                    750: {
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
                  {exploreImages && exploreImages.length
                    ? exploreImages.map((exploreImage, i) => (
                        <Link href={`/product/${i}`} key={i} className={styles.imageWrapper}>
                          <a>
                            <Image
                              className={styles.exploreImage}
                              src={exploreImage.src}
                              width={400}
                              height={450}
                              layout="responsive"
                            />
                            <span className={styles.exploreImageTitle}>{exploreImage.title}</span>
                          </a>
                        </Link>
                      ))
                    : ["Loading..."]}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
