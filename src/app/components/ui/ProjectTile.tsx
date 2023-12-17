"use client";
import React, { ReactNode, useState } from "react";
import styles from "./ProjectTitle.module.scss";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  icon: ReactNode;
};

import { FaRightToBracket } from "react-icons/fa6";
import ProjectDescriptionDialog from "./ProjectDescriptionDialog";

export default function ProjectTile({
  title,
  icon,
  description,
  imgUrl,
}: Props) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const closeDeleteDialogHandler = () => setIsDescriptionOpen(() => false);
  return (
    <div className={styles["project-tile"]}>
      <span className={styles["project-tile__icon"]}>{icon}</span>
      <h3
        onClick={() => setIsDescriptionOpen(() => true)}
        className={styles["project-tile__title"]}
      >
        {title}{" "}
        <button
          onClick={() => setIsDescriptionOpen(() => true)}
          className={styles["project-tile__title-btn"]}
          type="button"
        >
          <FaRightToBracket />
        </button>
      </h3>

      {isDescriptionOpen && (
        <ProjectDescriptionDialog
          closeDescriptionFn={closeDeleteDialogHandler}
          description={description}
          imgUrl={imgUrl}
        />
      )}
    </div>
  );
}
