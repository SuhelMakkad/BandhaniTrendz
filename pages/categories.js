import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import PageHead from "../component/PageHead";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import TitleBar from "../component/TitleBar";
import Carousel from "../component/Carousel";
import ProductCard from "../component/ProductCard";
import { Info } from "../component/Icons";

import styles from "../styles/Catagories.module.css";

export default function Catagories() {
  const [headerImages, setHeaderImages] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const descriptionInput = useRef(null);

  const catagories = [
    { title: "saree", url: "/categories?type=saree" },
    { title: "dress", url: "/categories?type=dress" },
    { title: "fabric", url: "/categories?type=fabric" },
    { title: "dupata", url: "/categories?type=dupata" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDescriptionChange = (e) => {
    const target = e.target;
    setMessage(target.value);

    target.style.height = "auto";
    target.style.height = (target.scrollHeight < 100 ? 100 : target.scrollHeight + 10) + "px";
  };

  useEffect(() => {
    setHeaderImages([
      {
        src: "/assets/images/saree_4.jpeg",
        title: "bandhani dupatta",
        link: "/categories?dupatta",
      },
      { src: "/assets/images/dupata_2.jpeg", title: "bandhani dress", link: "/categories?dress" },
      { src: "/assets/images/dress_5.jpeg", title: "bandhani fabric", link: "/categories?fabric" },
      { src: "/assets/images/saree_6.jpeg", title: "bandhani saree", link: "/categories?saree" },
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
      <PageHead title="Categories" />

      <Navbar isTransparent={false} />

      <TitleBar items={catagories} />

      <main className={styles.main}>
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
                      <Link href={image.link} key={i} className={styles.imageWrapper}>
                        <a>
                          <Image
                            priority={i < 2}
                            className={styles.image}
                            src={image.src}
                            layout="fill"
                          />
                          <span className={styles.imageTitle}>{image.title}</span>
                        </a>
                      </Link>
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
              <span className={styles.infoIcon}>
                <Info />
              </span>
              <div className={styles.filterIndicatios}>
                <span className={styles.filterItem}>Category: All</span>
                <span className={styles.filterItem}>Sort by: Popularity</span>
              </div>
            </div>

            <div className={styles.cardsGrid}>
              {bestSellers.map((bestSeller, i) => (
                <Link href={`product/${i}`} key={i}>
                  <a>
                    <ProductCard product={bestSeller} bgSolid={true} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section aria-describedby="Get in touch!" id={styles.contact}>
          <div className="wrapper">
            <div className={styles.contactWrapper}>
              <header>
                <h4 className={styles.sectionHeading}>Looking for Somthing Else?</h4>
              </header>
              <div>
                <p className={styles.subHeading}>Get in touch</p>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <input
                    className={styles.formInputs}
                    id={styles.emailInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your e-mail or phone number"
                    type="email"
                  />
                  <textarea
                    ref={descriptionInput}
                    className={styles.formInputs}
                    id={styles.descriptionInput}
                    value={message}
                    onChange={handleDescriptionChange}
                    placeholder="Enter your message"
                  />
                  <button type="submit" id={styles.submitContactFormBtn}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
