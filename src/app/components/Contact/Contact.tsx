"use client";

import styles from "./Contact.module.scss";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section className={styles["contact"]} id="kontakt">
      <h2>Kontakt:</h2>
      <img src="/horyzonty-logo.svg" alt="Logotyp Fundacji Horyzonty" />
      <div>
        <a href="mailto:biuro@fundacjahoryzonty.pl">
          <address>biuro@fundacjahoryzonty.pl</address>
        </a>
      </div>
    </motion.section>
  );
}
