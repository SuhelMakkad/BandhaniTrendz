import styles from "./TitleBar.module.css";

export default function TitleBar({ items }) {
  return items ? (
    <div className="bg-primary">
      <div className={`wrapper ${styles.wrapper}`}>
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}
