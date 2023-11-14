import Navlink from "../../ui/Navlink";
import styles from "../Navbar.module.scss";

export default function NavLarge() {
  return (
    <div className={styles["navbar__list"]}>
      <Navlink title="Założyciele" />
      <Navlink title="Projekty" />
      <Navlink title="Dla mediów" />
      <Navlink title="Kontakt" />
    </div>
  );
}
