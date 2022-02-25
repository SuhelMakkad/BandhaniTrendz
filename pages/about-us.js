import Head from "next/head";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "../styles/Catagories.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isTransparent={false} />

      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
