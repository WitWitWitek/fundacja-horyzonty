import Link from "next/link";
import styles from "./Navbar.module.scss";

import NavLarge from "./NavLarge/NavLarge";
import NavSmall from "./NavSmall/NavSmall";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles["navbar__logo"]}>
        <img src="/horyzonty-logo.svg" alt="Logo Fundacji Horyzonty" />
      </Link>
      <NavSmall />
      <NavLarge />
    </nav>
  );
}
