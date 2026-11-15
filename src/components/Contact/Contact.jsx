import { imgSrc } from "../../assets";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Contact.module.css";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.text")}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img loading="lazy" src={imgSrc(`contact/emailIcon`)} alt={t("contact.emailIcon")} />
          <a href="mailto:albertolaniman@gmail.com">albertolaniman@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img loading="lazy" src={imgSrc(`contact/linkedinIcon`)} alt={t("contact.linkedinIcon")} />
          <a target="_blank" href="https://www.linkedin.com/in/alberto-zelaya-b2a3ba210/">
            linkedin.com/albertozelaya
          </a>
        </li>

        <li className={styles.link}>
          <img loading="lazy" src={imgSrc(`contact/githubIcon`)} alt={t("contact.githubIcon")} />
          <a target="_blank" href="https://github.com/albertozelaya5">
            github.com/albertozelaya5
          </a>
        </li>
      </ul>
    </footer>
  );
};
