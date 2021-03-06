import { useState, useRef, useLayoutEffect } from "react";

import Image from "next/image";

import PageHead from "../component/PageHead";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

import styles from "../styles/AboutUs.module.css";
import { LogoBox } from "../component/Icons";

export default function AboutUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const descriptionInput = useRef(null);
  const firstSection = useRef(null);

  const handleDescriptionChange = (e) => {
    const target = e.target;
    setMessage(target.value);

    target.style.height = "auto";
    target.style.height = (target.scrollHeight < 100 ? 100 : target.scrollHeight + 10) + "px";
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

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
  return (
    <div className={styles.container}>
      <PageHead title="About Us" />

      <Navbar isActive={isIntersecting} isTransparent={true} />

      <main className={styles.main}>
        <section
          id={styles.heroSection}
          className="bg-gradient animate"
          ref={firstSection}
          aria-describedby="BANDHANI TRENDZ is a manufacturer Of finest BANDHANI cloths"
        >
          <div className="wrapper">
            <header>
              <h2 className={styles.heading}>
                BANDHANI TRENDZ is a manufacturer <br /> Of finest BANDHANI Cloths
              </h2>
            </header>

            <p className={styles.subHeading}>
              <span>Founded by</span>
              <span id="founder-name"> Uvesh Sadeki</span>
            </p>
          </div>
        </section>

        <section id={styles.about} aria-describedby="about usvesh">
          <div className="wrapper">
            <div className={styles.imageWrapper}>
              <Image
                className={styles.mainImage}
                src="/assets/images/uvesh.jpg"
                width={275}
                height={275}
                layout="intrinsic"
              />
            </div>
            <h4 className={styles.heading}>Uvesh Sadeki</h4>
            <p className={styles.subHeading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </section>

        <section
          className="bg-gradient bg-pattern-1"
          id={styles.decoration}
          aria-describedby="decoration section"
        >
          <div className={`wrapper ${styles.logoWrapper}`}>
            <LogoBox />
          </div>
        </section>

        <section aria-describedby="Get in touch!" id={styles.contact}>
          <div className="wrapper">
            <header>
              <h4 className={styles.heading}>Get in touch</h4>
            </header>
            <div>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
