import { aboutImage, cursorIcon, uiIcon } from "../../assets/index";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} alt="Me sitting with a laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a Frontend Developer passionate about building responsive and user-friendly web applications. I
                stay up to date with modern frontend trends and best practices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>UX Designer</h3>
              <p>Experienced in working with UX designs in Figma to build intuitive and responsive user interfaces</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
