import Link from "next/Link";
import { useRouter } from "next/router";

import styles from "./TitleBar.module.css";

export default function TitleBar({ items }) {
  const router = useRouter();

  return items ? (
    <div className="bg-primary">
      <ul className={`wrapper ${styles.list}`}>
        {items.map((item, i) => (
          <Link href={item.url} key={i}>
            <a>
              <li
                className={
                  styles.item +
                  " " +
                  ((router && router.query.type) === item.title ? styles.active : "")
                }
              >
                {item.title}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}
