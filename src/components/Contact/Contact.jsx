import { imgSrc } from "../../assets";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Do not hesitate to contact me </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            loading="lazy"
            src={imgSrc(`contact/emailIcon`)}
            alt="Email icon"
          />
          <a href="mailto:albertolaniman@gmail.com">albertolaniman@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img
            loading="lazy"
            src={imgSrc(`contact/linkedinIcon`)}
            alt="Linkedin icon"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alberto-zelaya-b2a3ba210/"
          >
            linkedin.com/albertozelaya
          </a>
        </li>

        <li className={styles.link}>
          <img
            loading="lazy"
            src={imgSrc(`contact/githubIcon`)}
            alt="Github icon"
          />
          <a target="_blank" href="https://github.com/albertozelaya5">
            github.com/albertozelaya5
          </a>
        </li>
      </ul>
    </footer>
  );
};
