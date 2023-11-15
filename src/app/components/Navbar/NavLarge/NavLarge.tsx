import Navlink from "../../ui/Navlink";
import styles from "../Navbar.module.scss";

export default function NavLarge() {
  return (
    <div className={styles["navbar__list"]}>
      <Navlink title="O nas" target="about-us" />
      <Navlink title="Założyciele" target="about-us" />
      <Navlink title="Projekty" target="about-us" />
      <Navlink title="Dla mediów" target="about-us" />
      <Navlink title="Kontakt" target="about-us" />
    </div>
  );
}
