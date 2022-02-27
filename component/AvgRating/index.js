import { Star } from "../Icons";

import styles from "./AvgRating.module.css";

export default function AvgRating({ rating, className }) {
  return (
    <div className={styles.ratings + " " + className}>
      <span>{rating}</span>
      <span>
        <Star className={styles.star} />
      </span>
    </div>
  );
}
