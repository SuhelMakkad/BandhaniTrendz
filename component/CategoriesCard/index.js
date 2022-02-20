import Image from "next/image";

import styles from "./CategoriesCard.module.css";

export default function CategoriesCard({ category }) {
  return (
    <div className={styles.cardwrapper}>
      <Image
        className={styles.image}
        src={category.src}
        width={325}
        height={400}
        layout="responsive"
      />
      <p className={styles.titleWrapper}>
        <span className={styles.title}>{category.title}</span>
      </p>
    </div>
  );
}
