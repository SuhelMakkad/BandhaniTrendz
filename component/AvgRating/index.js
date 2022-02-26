import { Star } from "../Icons";

import styles from "./AvgRating.module.css";

export default function AvgRating({ rating }) {
  return (
    <div className={styles.ratings}>
      <span>{rating}</span>
      <span>
        <Star className={styles.star} />
      </span>
    </div>
  );
}
