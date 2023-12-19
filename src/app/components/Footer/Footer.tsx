"use client";

import Navlink from "../ui/Navlink";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles["footer__logo"]}
        src="/horyzonty-logo.svg"
        alt="Logotyp Fundacji Horyzonty"
      />
      <hr />
      <ul className={styles["footer__list"]}>
        <a href="/#o-nas">O nas</a>
        <a href="/#projekty">Projekty</a>
        <a href="/#założyciele">Założyciele</a>
        <a href="/dla-mediow/#dla-mediow">Dla mediów</a>
        <a href="/dla-mediow/#kontakt">Kontakt</a>
      </ul>
      <hr />
      <div className={styles["footer__address"]}>
        <p>Kontakt:</p>
        <a href="mailto:biuro@fundacjahoryzonty.pl">
          <address>biuro@fundacjahoryzonty.pl</address>
        </a>
      </div>
    </footer>
  );
}
