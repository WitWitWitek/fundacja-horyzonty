"use client";

import { motion } from "framer-motion";
import styles from "./Founder.module.scss";
import Link from "next/link";
import { FaWikipediaW } from "react-icons/fa6";

export default function FounderOne() {
  return (
    <motion.section
      className={`${styles.founders} ${styles["founders__white"]}`}
      id="założyciele"
    >
      <div className={styles["founders__circle"]} />
      <h2 className={styles["founders__title"]}>Wojciech Wróblewski</h2>
      <div className={styles["founders__person-container"]}>
        <img
          src="/wojciech-wroblewski.jpg"
          alt="Zdjęcie Wojciecha Wróblewskiego"
          className={styles["founders__person-img"]}
        />
      </div>
      <div className={styles["founders__description"]}>
        <p>
          Ukształtowała mnie instruktorska działalność w ruchu harcerskim w
          trudnym okresie lat 1976-89. Stworzyłem wtedy m.in lokalne środowisko
          harcerskie które trwa do dziś, tworzyłem konspiracyjne struktury tzw
          Ruchu oraz brałem udział w obradach &quot;Okrągłego Stołu&quot; w
          podstoliku d/s młodzieży. Skauting uczy indywidualnej dzielności a
          równocześnie umiejętności współpracy w zespole. Wychowuje do
          obywatelskiego społeczeństwa. Stad moje zaangażowanie w ruch Komitetów
          Obywatelskich w 1989 roku a potem w dzialalność samorzadową jako
          przewodniczący Rady Miejskiej w Gminie Niepołomice.
        </p>
        <p>
          Pracowałem naukowo w Instytucie Socjologii Uniwersytetu
          Jagiellońskiego, potem w administracji państwowej odrodzonej
          Rzeczpospolitej, dwukrotnie pełniłem misje w służbie dyplomatycznej
          oraz pracowałem także dla największych polskich korporacji.
        </p>
        <p>
          W mojej działalności biznesowej łączę doświadczenie specyficznych
          perspektyw: administracji państwowej, służby dyplomatycznej oraz
          zarządzania korporacjami wzbogacone o doświadczenie ruchu
          samorządowego.
        </p>
        <Link
          href="https://pl.wikipedia.org/wiki/Wojciech_Wr%C3%B3blewski_(dyplomata)"
          className={styles["founders__link"]}
        >
          Notatka na Wikipedii{" "}
          <span>
            <FaWikipediaW />
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
