import styles from "./Navlink.module.scss";

type Props = {
  title: string;
  target: string;
  setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navlink({ title, target, setMenuOpen }: Props) {
  return (
    <a
      className={styles.navlink}
      href={`/${target}`}
      onClick={() => (setMenuOpen ? setMenuOpen(false) : null)}
    >
      {title}
    </a>
  );
}
