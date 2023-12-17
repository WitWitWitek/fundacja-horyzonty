"use client";

import styles from "./Homeview.module.scss";
import { motion, Variants } from "framer-motion";

const mainViewVariants: Variants = {
  hidden: { opacity: 0, translateX: -40 },
  visible: {
    opacity: 1,
    translateX: 0,
  },
};

export default function Homeview() {
  return (
    <main className={styles.homeview}>
      <div className={styles["homeview__trapezoid"]}>
        <div className={styles["homeview__wrapper"]}>
          <motion.div
            variants={mainViewVariants}
            initial="hidden"
            animate="visible"
            className={styles["homeview__container"]}
          >
            <motion.h1>Fundacja Horyzonty</motion.h1>
            <motion.h2>Vivere est cogitare</motion.h2>
            <motion.a href="#o-nas" className={styles["homeview__cta-btn"]}>
              Poznaj nasza misję
            </motion.a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
