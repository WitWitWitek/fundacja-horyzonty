"use client";

import styles from "./AboutUs.module.scss";
import { motion, Variants } from "framer-motion";

const imageVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function AboutUs() {
  return (
    <motion.section
      className={styles["about-us"]}
      id="o-nas"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles["about-us__circle"]} />
      <div className={styles["about-us__wrapper"]}>
        <motion.img
          src="/cicero.png"
          alt="Ilustracja popiersia Cycerona"
          className={styles["about-us__img"]}
          variants={imageVariants}
          loading="lazy"
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
    </motion.section>
  );
}
