import Navlink from "../../ui/Navlink";
import styles from "../Navbar.module.scss";

export default function NavLarge() {
  return (
    <div className={styles["navbar__list"]} id="nav-list">
      <Navlink title="O nas" target="o-nas" />
      <Navlink title="Projekty" target="projekty" />
      <Navlink title="Założyciele" target="założyciele" />
      <Navlink title="Dla mediów" target="dla-mediow" />
      <Navlink title="Kontakt" target="kontakt" />
    </div>
  );
}
