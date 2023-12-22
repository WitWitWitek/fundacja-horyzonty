"use client";
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";
import { FaChartLine, FaRegHandshake, FaGraduationCap } from "react-icons/fa6";
import ProjectTile from "../ui/ProjectTile";
import Waves from "../Waves/Waves";

export default function Projects() {
  return (
    <motion.section className={styles.projects} id="projekty">
      <div className={styles["projects__list"]}>
        <h2 className={styles["projects__list-title"]}>
          Obszary działalności:
        </h2>
        <div className={styles["projects__list-container"]}>
          <ProjectTile
            title="Oświata"
            icon={<FaGraduationCap />}
            imgUrl="/projects-cover-photo-1.webp"
            description="Jesteśmy aktywni w dziedzinach naukowej, oświatowej, kulturalnej, sportu, ochrony środowiska, dobroczynności, ochrony zdrowia i pomocy społecznej. Organizujemy i wspieramy programy, które mają na celu poprawę jakości życia społeczności."
          />
          <ProjectTile
            title="Przedsiębiorczość"
            icon={<FaChartLine />}
            imgUrl="/projects-cover-photo-2.webp"
            description="Wspieramy inicjatywy promujące przedsiębiorstwa w Polsce i za granicą oraz propagujemy wykorzystanie nowoczesnych technologii."
          />
          <ProjectTile
            title="Społeczeństwo"
            icon={<FaRegHandshake />}
            imgUrl="/projects-cover-photo-3.webp"
            description="Działamy w przekonaniu, że nasza praca choć w drobnym stopniu przyczynia się do tworzenia lepszego społeczeństwa, pełnego aktywności, kultury i edukacji. Jesteśmy otwarci na współpracę z osobami i organizacjami, które podzielają nasze wartości i misję. Razem tworzymy przestrzeń do inspiracji, rozwoju i tworzenia pozytywnego wpływu na nasze społeczeństwo."
          />
        </div>
      </div>
      <div className={styles["projects__container"]}>
        <img
          className={styles["projects__img"]}
          src="/projects-cover-photo.webp"
          alt="Ilustracja przedstawiająca zaangażowanie społeczne"
          loading="lazy"
        />
      </div>
      <p className={styles["projects__description"]}>
        Horyzont naszych działań to rozwój społeczeństwa obywatelskiego,
        wspólnot lokalnych oraz wspieranie merytorycznej debaty i wymiany
        poglądów. Tylko świadomie pracując nad kształtem debaty w naszej
        wspólnocie jesteśmy w stanie rozwinąć myśl, która jest podstawą naszych
        czynów.
      </p>
      <Waves type="white" />
    </motion.section>
  );
}
