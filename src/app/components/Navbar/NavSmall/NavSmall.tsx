"use client";
import React, { useState } from "react";
import { Fade } from "hamburger-react";
import Link from "next/link";
import styles from "../Navbar.module.scss";
import Navlink from "../../ui/Navlink";

export default function NavSmall() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={styles["navbar__burger-btn"]}
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Fade toggled={isMenuOpen} color="#cbb26b" />
      </button>
      <div
        className={`${styles.navbar__backdrop} ${
          isMenuOpen ? styles["navbar__backdrop-active"] : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`${styles.navbar__menu} ${
          isMenuOpen ? styles["navbar__menu-active"] : ""
        }`}
      >
        <Navlink title="Założyciele" />
        <Navlink title="Projekty" />
        <Navlink title="Dla mediów" />
        <Navlink title="Kontakt" />
      </div>
    </>
  );
}
