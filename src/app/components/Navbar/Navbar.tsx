"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import NavLarge from "./NavLarge/NavLarge";
import NavSmall from "./NavSmall/NavSmall";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [scrollClass, setScrollClass] = useState<string>("");
  const [isSmallMenuOpen, setSmallMenuOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  let scrollNavClass = "";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });

  useEffect(() => {
    setScrollClass(() =>
      scrollValue > 0 ? `${styles["navbar__scroll"]}` : ""
    );
  }, [scrollValue]);

  return (
    <motion.nav className={`${styles.navbar} ${scrollClass}`}>
      <Link href="/" className={styles["navbar__logo"]}>
        <img src="/horyzonty-logo.svg" alt="Logo Fundacji Horyzonty" />
      </Link>
      <NavSmall isMenuOpen={isSmallMenuOpen} setMenuOpen={setSmallMenuOpen} />
      <NavLarge />
    </motion.nav>
  );
}
