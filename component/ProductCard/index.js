import Image from "next/image";
import RatingStars from "../RatingStars";

import styles from "./ProductCard.module.css";

export default function ProductCard({ product, bgSolid = false }) {
  return (
    <div className={styles.peoductCard + " " + (bgSolid ? styles.bgSolid : "")}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={product.src} alt={product.title} layout="fill" />
      </div>

      <div className={styles.details}>
        <p className={styles.heading}>{product.title}</p>
        <div className={styles.ratingWrapper}>
          <RatingStars totalStars={product.rating} />
          <span className={styles.reviewCount}>({product.reviewCount})</span>
        </div>
        <span className={styles.price}>₹ {product.price}</span>
      </div>
    </div>
  );
}
