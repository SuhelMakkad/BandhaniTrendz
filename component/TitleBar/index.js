import styles from "./TitleBar.module.css";

export default function TitleBar({ items }) {
  return items ? (
    <div className="bg-primary">
      <ul className={`wrapper ${styles.list}`}>
        {items.map((item, i) => (
          <li className={styles.item} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}
