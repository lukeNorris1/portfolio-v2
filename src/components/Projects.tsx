import ChronoPlan from "./Cards/ChronoPlan/ChronoPlan";
import Gomoku from "./Cards/Gomoku/Gomoku";
import Terradle from "./Cards/Terradle/Terradle";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div id="projects" className={styles.container}>
      <ChronoPlan />
      <Terradle />
      <Gomoku />
    </div>
  );
}
