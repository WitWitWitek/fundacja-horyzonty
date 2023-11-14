import styles from "./homepage.module.scss";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <div>
        <h1>Fundacja Horyzonty</h1>
        <h2>Vivere est cogitare</h2>
      </div>
      <div>
        <img
          src="/horyzonty-large.png"
          alt="Logo Fundacji Horyzonty"
          className={styles["homepage__img"]}
        />
      </div>
    </main>
  );
}
