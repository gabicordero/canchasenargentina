import Image from "next/image";
import styles from "./page.module.css";
import CampList from "./components/cardlist";
import Drop from "./components/drop";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <h1>Canchas de fútbol en Argentina</h1>
      <Drop />
      <CampList />
      <div className={styles.grid}>
      </div>
    </main>
  );
}
