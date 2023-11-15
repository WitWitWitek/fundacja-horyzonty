import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  return (
    <section className={styles["about-us"]} id="about-us">
      <div className={styles["about-us__circle"]} />
      <div className={styles["about-us__wrapper"]}>
        <img
          src="/cicero.png"
          alt="Ilustracja popiersia Cycerona"
          className={styles["about-us__img"]}
        />
        <div className={styles["about-us__wrapper-title"]}>
          <h2>Vivere est cogitare!</h2>
          <p>
            Żyć to znaczy myśleć! <i>~ Cyceron</i>
          </p>
        </div>
        <p className={styles["about-us__description"]}>
          Fundacja Horyzonty jest organizacją, której główną misją jest animacja
          życia społecznego. Jesteśmy przekonani, że wspólna wymiana idei,
          wiedzy oraz edukacja stanowią klucz do rozwoju społeczeństwa i
          wzmacniania kapitału społecznego. Naszą działalność koncentrujemy na
          organizacji platform dyskusyjnych, gdzie ludzie mogą spotkać się,
          spierać, inspirować i rozwijać. Nasze wydarzenia łączą środowiska
          mediów, biznesu i decydentów, dając przestrzeń do tworzenia
          innowacyjnych rozwiązań i inspirujących dyskusji.
        </p>
      </div>
    </section>
  );
}
