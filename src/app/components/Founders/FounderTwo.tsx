"use client";

import { motion } from "framer-motion";
import styles from "./Founder.module.scss";
import Link from "next/link";
import { FaWikipediaW } from "react-icons/fa6";

export default function FounderTwo() {
  return (
    <motion.section
      className={`${styles.founders} ${styles["founders__blue"]}`}
    >
      <h2 className={styles["founders__title"]}>Waldemar Tevnell</h2>
      <div className={styles["founders__person-container"]}>
        <img
          src="/waldemar-tevnell.jpg"
          alt="Zdjęcie Waldemara Tevnella"
          className={styles["founders__person-img"]}
        />
      </div>
      <div className={styles["founders__description"]}>
        <p>
          Wychowałem się i wiele lat ze swojego dorosłego życia spędziłem w
          Szwecji. Miało to duży wpływ na to, w jaki sposób podejmuję decyzje:
          co jest dla mnie ważne, jakie relacje mam ze swoim partnerami
          biznesowymi, klientami i pracownikami.
        </p>
        <p>
          Zapewne w tym procesie znaczenie ma termin popularny w Szwecji -
          lagom. W języku polskim oznacza: w sam raz, akurat, nie za dużo, nie
          za mało. Do lagom dąży się podczas rozmów i na spotkaniach. To często
          stosowany w Szwecji sposób na dojście do kompromisu, znalezienie
          rozwiązania, które usatysfakcjonuje wszystkie strony.
        </p>
        <p>
          Oczywiście nie zawsze jest to łatwe. Jednak, sam się o tym
          wielokrotnie przekonałem, pozwala na lepsze zrozumienie podejmowanych
          decyzji i utożsamianie się z nimi. Daje też poczucie uczestnictwa i
          wpływu na sprawy oraz rozwiązania istotne dla firmy, jej pracowników i
          klientów. Staram się stosować do tej zasady w swojej aktywności
          biznesowej. A to już ponad 30 lat. Z efektów jestem zadowolony.
        </p>
        <Link
          href="https://pl.wikipedia.org/wiki/Waldemar_Tevnell"
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
