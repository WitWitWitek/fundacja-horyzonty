"use client";
import { useVisible } from "@/app/hooks/useVisible";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import { navColorVersion } from "@/app/types";
import { MdAlternateEmail } from "react-icons/md";

export default function Contact({
  navColorVersion,
}: {
  navColorVersion: navColorVersion;
}) {
  // const { elementRef } = useVisible();

  return (
    <motion.section
      className={styles["contact"]}
      id="kontakt"
      // ref={elementRef}
      data-navtype={navColorVersion}
    >
      <h2>Kontakt:</h2>
      <a href="mailto:biuro@fundacjahoryzonty.pl">
        <address>biuro@fundacjahoryzonty.pl</address>
      </a>
    </motion.section>
  );
}
