import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <h1>Let's Connect</h1>
      <h2>
        I'm always open to new opportunities and collaborations that allow me to
        bring my passion for problem solving to the forefront.
      </h2>
      <button>
        <a
          href="mailto:lukenorris2@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact
        </a>
      </button>
    </div>
  );
}
