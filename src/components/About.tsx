import styles from "./About.module.css";
import InputBox from "./InputBox";

export default function Introduction() {
  return (
    <section id="about" className={styles.container}>
      <p className={styles.greeting}> Hi, I'm Luke </p>
      <p className={styles.interest}> I build functional web tools</p>
      <div className={styles.about}>
        <p>
          I thrive on crafting digital solutions that make life simpler. I
          engineer tools that elegantly tackle real-world problems. Join me in
          exploring my portfolio where each project tells a story of turning
          challenges into opportunities. Let's reshape the digital world
          together!
        </p>
      </div>
      <InputBox />
    </section>
  );
}
