import Logo from "../Logo";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

export default function Navbar({ isTransparent, isActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav
      className={`${styles.nav} ${
        isTransparent ? (isActive ? "inactive" : "active") : "bg-gradient"
      }  ${isOpen ? styles.open : ""}`}
    >
      <div className={"wrapper " + styles.navWrapper}>
        <Logo />

        <div className={styles.menuWrapper} onClick={() => setIsOpen((prev) => !prev)}>
          <span className={styles.menuStripes} />
          <span className={styles.menuStripes} />
          <span className={styles.menuStripes} />
        </div>

        <ul className={styles.navList}>
          <li className={styles.navItem + " " + (router.asPath === "/" ? styles.active : "")}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={
              styles.navItem + " " + (router.asPath === "/catagories" ? styles.active : "")
            }
          >
            <Link href="/catagories">
              <a>Catagories</a>
            </Link>
          </li>
          <li
            className={styles.navItem + " " + (router.asPath === "/about-us" ? styles.active : "")}
          >
            <Link href="/about-us">
              <a>About Us</a>
            </Link>
          </li>
          <li
            className={styles.navItem + " " + (router.asPath === "/contact" ? styles.active : "")}
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
