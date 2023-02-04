import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>Here is Our Side Project Home Page</h1>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
