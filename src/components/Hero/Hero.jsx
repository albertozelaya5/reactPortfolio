import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("hero.title")}</h1>
        <p className={styles.description}>{t("hero.description")}</p>
        <a href="mailto:albertolaniman@gmail.com" className={styles.contactBtn}>
          {t("hero.contact")}
        </a>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
