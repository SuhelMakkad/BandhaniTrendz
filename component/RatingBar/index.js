import styles from "./RatingBar.module.css";
import { Star } from "../Icons";

export default function RatingBar({ starNum, precentage, bgColor, ratingCount }) {
  return (
    <div className={styles.ratingStatWrapper}>
      <span className={styles.ratingNum}>{starNum || 1}</span>
      <span className={styles.starSvg}>
        <Star size="14px" />
      </span>
      <span className={styles.ratingBarWrapper}>
        <span
          className={styles.ratingBar + " " + (ratingCount ? styles.active : "")}
          style={{ backgroundColor: ratingCount ? bgColor : "", width: 100 + "%" }}
        ></span>
        <span className={styles.ratingBarDisabled} style={{ width: 100 - precentage + "%" }}></span>
      </span>
      <span className={styles.reviewCount}>{ratingCount || "0"}</span>
    </div>
  );
}
