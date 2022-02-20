import Link from "next/link";

import styles from "./Logo.module.css";

export default function Logo({ className, fontSize }) {
  return (
    <Link href="/">
      <a className={className}>
        <h1 className={styles.logoWrapper}>
          <span style={{ fontSize }} className={styles.first}>
            BANDHANI
          </span>
          <span style={{ fontSize }} className={styles.second}>
            TRENDZ
          </span>
        </h1>
      </a>
    </Link>
  );
}
