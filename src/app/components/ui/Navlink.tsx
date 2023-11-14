import styles from "./Navlink.module.scss";

type Props = {
  title: string;
};

export default function Navlink({ title }: Props) {
  return <button className={styles.navlink}>{title}</button>;
}
