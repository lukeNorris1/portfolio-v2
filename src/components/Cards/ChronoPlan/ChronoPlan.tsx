import styles from "./ChronoPlan.module.css";
import Express from "../Icon-Tech/Express";
import Mongo from "../Icon-Tech/Mongo";
import Node from "../Icon-Tech/Node";
import React from "../Icon-Tech/React";
import Github from "../Icon-Tech/Github";
import Live from "../Icon-Tech/Live";

export default function SchedulingCard() {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles["screen-image"]}></div>
        <div className={styles["screen-overlay"]}></div>
        <div className={styles["screen-content"]}>
          <i className={styles["screen-icon"]}></i>
          <div className={styles["screen-user"]}>
            <span className={styles.name} data-value="SCHEDULING">
              Ordomise
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
                href="https://github.com/lukeNorris1/NorrisScheduling"
                target="_blank"
              >
                <Github />
              </a>
              <a
                className={styles.link}
                href="https://ordomise.onrender.com/"
                target="_blank"
              >
                <Live />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h1 className={styles.title}>Ordomise</h1>
        <span className={styles.body}>
          <>
            A Scheduling tool to organise employees and workflow by managing:
            <ol>
              <li>Shift allocation</li>
              <li>Time off requests</li>
              <li>Picking up shifts</li>
            </ol>
          </>
          <span>Other Tech: Typescript, Tailwind, Jest, JWT</span>
        </span>
      </div>
    </div>
  );
}
