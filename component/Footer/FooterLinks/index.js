import Link from "next/link";
import styles from "../Footer.module.css";

export default function FooterLinks({ heading, list }) {
  return (
    <>
      <p className={styles.heading}>{heading}</p>
      <ul className={styles.list}>
        {list
          ? list.map((item, i) => (
              <li className={styles.item} key={i}>
                <Link href={item.link}>
                  <a>
                    <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            ))
          : ""}
      </ul>
    </>
  );
}
