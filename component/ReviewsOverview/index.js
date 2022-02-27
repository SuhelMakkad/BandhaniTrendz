import { Star } from "../Icons";
import RatingBar from "../RatingBar";

import styles from "./ReviewsOverview.module.css";

export default function index() {
  return (
    <div className={styles.ratingStats}>
      <div className={styles.avgRating}>
        <div className={styles.totalAvgRating + " " + styles.ratingStatWrapper}>
          <span className={styles.avgStars}>4.5</span>
          <span>
            <Star />
          </span>
        </div>
        <div className={styles.ratingOverview}>
          3 ratings & <br /> 0 Reviews
        </div>
      </div>

      <ul className={styles.ratingBars}>
        <li className={styles.ratingItem}>
          <RatingBar starNum="5" precentage={75} ratingCount={2} bgColor="#388e3c" />
        </li>
        <li className={styles.ratingItem}>
          <RatingBar starNum="4" precentage={0} ratingCount={0} bgColor="#388e3c" />
        </li>
        <li className={styles.ratingItem}>
          <RatingBar starNum="3" precentage={75} ratingCount={3} bgColor="#388e3c" />
        </li>
        <li className={styles.ratingItem}>
          <RatingBar starNum="2" precentage={0} ratingCount={0} bgColor="#fff9a0" />
        </li>
        <li className={styles.ratingItem}>
          <RatingBar starNum="1" precentage={65} ratingCount={1} bgColor="#ff6161" />
        </li>
      </ul>
    </div>
  );
}
