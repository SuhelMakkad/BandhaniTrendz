import { Share } from "../Icons";
import AvgRating from "../AvgRating";

import styles from "./ProductDescription.module.css";

export default function ProductDescription() {
  return (
    <>
      <div className={styles.topbar}>
        <span>dress</span>
        <span id={styles.shareBtnWrapper}>
          <Share size={20} id={styles.shareBtn} />
        </span>
      </div>

      <h3 id={styles.productName}>Reed Drees with flower design and dotted dupata</h3>

      <div className={styles.rating}>
        <AvgRating rating="4.4" />
        <p className={styles.avgRating}>253 Ratings & 38 Reviews</p>
      </div>

      <span className={styles.divider}></span>
    </>
  );
}
