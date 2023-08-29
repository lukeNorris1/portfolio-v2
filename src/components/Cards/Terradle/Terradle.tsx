import styles from "./Terradle.module.css";
import React from "../Icon-Tech/React";
import Github from "../Icon-Tech/Github";
import Live from "../Icon-Tech/Live";
import Typescript from "../Icon-Tech/Typescript";

export default function Terradle() {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles["screen-image"]}></div>
        <div className={styles["screen-overlay"]}></div>
        <div className={styles["screen-content"]}>
          <i className={styles["screen-icon"]}></i>
          <div className={styles["screen-user"]}>
            <span className={styles.name} data-value="TERRADLE">
              Terradle
            </span>
            <div className={styles.images}>
              <React />
              <Typescript />
            </div>
            <div className={styles["icon-container"]}>
              <a
                className={styles.link}
                href="https://github.com/lukeNorris1/Terradle"
                target="_blank"
              >
                <Github />
              </a>
              <a
                className={styles.link}
                href="https://lukenorris1.github.io/Terradle/"
                target="_blank"
              >
                <Live />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h1 className={styles.title}>Terradle</h1>
        <div className={styles.body}>
          <span className={styles.body}>
            <p>An adaptation of "Wordle" using items from Terraria</p>
            <p>Features: </p>
            <ol>
              <li>Functional Instructions</li>
              <li>Difficulty Modes</li>
              <li>Picking up shifts</li>
            </ol>

            <span>Other Tech: Typescript, GitHub Pages</span>
          </span>
        </div>
      </div>
    </div>
  );
}
