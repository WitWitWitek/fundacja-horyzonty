"use client";
import styles from "./Homeview.module.scss";
import { motion, Variants } from "framer-motion";

const mainViewVariants: Variants = {
  hidden: { opacity: 0, translateX: -20 },
  visible: {
    opacity: 1,
    translateX: 0,
  },
};

const imgVariants: Variants = {
  hidden: { opacity: 0, translateX: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    translateX: 0,
    scale: 1,
  },
};

export default function Homeview() {
  return (
    <main className={styles.homeview}>
      <motion.div
        variants={mainViewVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1>Fundacja Horyzonty</motion.h1>
        <motion.h2>Vivere est cogitare</motion.h2>
      </motion.div>
      <div>
        <motion.img
          src="/horyzonty-large.png"
          alt="Logo Fundacji Horyzonty"
          className={styles["homeview__img"]}
          variants={imgVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </main>
  );
}
