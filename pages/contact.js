import PageHead from "../component/PageHead";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "../styles/Catagories.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <PageHead title="Contact" />

      <Navbar isTransparent={false} />

      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
