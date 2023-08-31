import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop <= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <nav className={styles.navigation}>
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <img src="/vite.svg" width={50}></img>
          </div>
        </div>
        <div>
          <ol className={styles["nav-list"]}>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}
