import Link from "next/link";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <h1 className={styles.logoWrapper}>
          <span className={styles.first}>BANDHANI</span>
          <span className={styles.second}>TRENDZ</span>
        </h1>
      </a>
    </Link>
  );
}
