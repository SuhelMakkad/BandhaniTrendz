import Link from "next/Link";

import styles from "./TitleBar.module.css";

export default function TitleBar({ items }) {
  return items ? (
    <div className="bg-primary">
      <ul className={`wrapper ${styles.list}`}>
        {items.map((item, i) => (
          <Link href={item.url} key={i}>
            <a>
              <li className={styles.item}>{item.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}
