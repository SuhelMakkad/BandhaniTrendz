import Image from "next/image";
import RatingStars from "../RatingStars";

import styles from "./ProductCard.module.css";

export default function ProductCard({ product, bgSolid = false }) {
  return (
    <div className={styles.productCard + " " + (bgSolid ? styles.bgSolid : "")}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          objectFit="contain"
          src={product.src}
          alt={product.title}
          layout="fill"
        />
      </div>

      <div className={styles.details}>
        <p className={styles.heading}>{product.title}</p>
        <div className={styles.ratingWrapper}>
          <RatingStars totalStars={product.rating} />
          <span className={styles.reviewCount}>({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}
