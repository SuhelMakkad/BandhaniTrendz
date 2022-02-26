import Image from "next/image";

import styles from "./CategoriesCard.module.css";

export default function CategoriesCard({ category }) {
  return (
    <div className={styles.cardwrapper}>
      <Image className={styles.image} src={category.src} layout="fill" />
      <p className={styles.titleWrapper}>
        <span className={styles.title}>{category.title}</span>
      </p>
    </div>
  );
}
