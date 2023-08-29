import styles from "./Gomoku.module.css";
import Express from "../Icon-Tech/Express";
import Mongo from "../Icon-Tech/Mongo";
import Node from "../Icon-Tech/Node";
import React from "../Icon-Tech/React";
import Github from "../Icon-Tech/Github";
import Live from "../Icon-Tech/Live";

export default function Gomoku() {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles["screen-image"]}></div>
        <div className={styles["screen-image2"]}></div>
        <div className={styles["screen-overlay"]}></div>
        <div className={styles["screen-content"]}>
          <i className={styles["screen-icon"]}></i>
          <div className={styles["screen-user"]}>
            <span className={styles.name} data-value="Gomoku">
              Gomoku
            </span>
            <div className={styles.images}>
              <Mongo />
              <Express />
              <React />
              <Node />
            </div>
            <div className={styles["icon-container"]}>
              <a
                className={styles.link}
                href="https://github.com/lukeNorris1/Gomoku"
                target="_blank"
              >
                <Github />
              </a>
              <a
                className={styles.link}
                href="https://gomoku-frtonen.onrender.com/"
                target="_blank"
              >
                <Live />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h1 className={styles.title}>Gomoku</h1>
        <div className={styles.body}>
          <span>
            <>
              An implementation of the game Gomoku.
              <br />
              The website allows users to play Gomoku and track their progress.
              Other Features include:
              <ol>
                <li>Custom user authentication</li>
                <li>Viewing past boards</li>
                <li>Historic data tracking</li>
              </ol>
            </>
          </span>
        </div>
      </div>
    </div>
  );
}
