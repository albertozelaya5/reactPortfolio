import { heroImage } from "../../assets/index";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Albert</h1>
        <p className={styles.description}>
          Im a Front-end Developer with strong skills in Javascript, React and Figma. Reach out if you would like to
          learn more!
        </p>
        <a href="mailto:albertolaniman@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <img loading="lazy" src={heroImage} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
