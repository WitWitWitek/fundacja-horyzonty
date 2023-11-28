"use client";
import React, { useState } from "react";
import { Fade } from "hamburger-react";
import styles from "../Navbar.module.scss";
import Navlink from "../../ui/Navlink";

type Props = {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavSmall({ isMenuOpen, setMenuOpen }: Props) {
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
        <Navlink title="O nas" target="#o-nas" setMenuOpen={setMenuOpen} />
        <Navlink
          title="Projekty"
          target="#projekty"
          setMenuOpen={setMenuOpen}
        />
        <Navlink
          title="Założyciele"
          target="#założyciele"
          setMenuOpen={setMenuOpen}
        />
        <Navlink
          title="Dla mediów"
          target="dla-mediow"
          setMenuOpen={setMenuOpen}
        />
        <Navlink
          title="Kontakt"
          target="dla-mediow/#kontakt"
          setMenuOpen={setMenuOpen}
        />
      </div>
    </>
  );
}
