"use client";
import { useVisible } from "@/app/hooks/useVisible";
import styles from "./Media.module.scss";
import { motion } from "framer-motion";
import { navColorVersion } from "@/app/types";
import { FaDownload } from "react-icons/fa6";

export default function Media({
  navColorVersion,
}: {
  navColorVersion: navColorVersion;
}) {
  // const { elementRef } = useVisible();

  return (
    <motion.section
      className={styles["media"]}
      id="dla-mediow"
      // ref={elementRef}
      data-navtype={navColorVersion}
    >
      <h2 className={styles["media__title"]}>Dla mediów</h2>
      <p className={styles["media__description"]}>
        W tej sekcji znajdziecie Państwo odnośniki do mediów, które zostały
        udostępnione w celu pobrania. Dzięki tym linkom istnieje możliwość
        szybkiego i wygodnego ściągnięcia materiałów, które mogą obejmują
        zdjęcia założycieli, oraz logo. Zachęcamy do skorzystania z tych linków,
        aby uzyskać dostęp do niezbędnych dla Państwa plików.
      </p>
      <div className={styles["media__container"]}>
        <a
          href="/horyzonty-logo.svg"
          download={true}
          className={styles["media__button"]}
        >
          <FaDownload />
          <p>Logo</p>
        </a>
        <a
          href="/waldemar-tevnell.jpg"
          download={true}
          className={styles["media__button"]}
        >
          <FaDownload />
          <p>Waldemar Tevnell</p>
        </a>
        <a
          href="/wojciech-wroblewski.jpg"
          download={true}
          className={styles["media__button"]}
        >
          <FaDownload />
          <p>Wojciech Wróblewski</p>
        </a>
      </div>
    </motion.section>
  );
}
