"use client";
import { motion, Variants } from "framer-motion";
import styles from "./ProjectDescriptionDialog.module.scss";

const dialogVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
type Props = {
  closeDescriptionFn: () => void;
  description: string;
  imgUrl: string;
};

export default function ProjectDescriptionDialog({
  closeDescriptionFn,
  description,
  imgUrl,
}: Props) {
  return (
    <dialog open className={styles.dialog}>
      <motion.div
        variants={dialogVariants}
        initial="hidden"
        animate="visible"
        className="dialog__container"
      >
        <div className={styles["dialog__container"]}>
          <button
            type="button"
            onClick={closeDescriptionFn}
            className={styles["dialog__btn"]}
          >
            X
          </button>
          <p className={styles["dialog__paragraph"]}>{description}</p>
          <img
            className={styles["dialog__img"]}
            src={imgUrl}
            alt={description.substring(0, 20)}
            loading="lazy"
          />
        </div>
      </motion.div>
    </dialog>
  );
}
