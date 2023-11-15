import styles from "./Homeview.module.scss";

export default function Homeview() {
  return (
    <main className={styles.homeview}>
      <div>
        <h1>Fundacja Horyzonty</h1>
        <h2>Vivere est cogitare</h2>
      </div>
      <div>
        <img
          src="/horyzonty-large.png"
          alt="Logo Fundacji Horyzonty"
          className={styles["homeview__img"]}
        />
      </div>
    </main>
  );
}
