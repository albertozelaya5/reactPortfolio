import { useMemo, useState } from "react";
import history from "../../data/history";
import skills from "../../data/skills";
import { localize, useLanguage } from "../../i18n/LanguageContext";
import { ProjectModal } from "../Projects/ProjectModal";
import styles from "./Experience.module.css";

export const Experience = () => {
  const { lang, t } = useLanguage();
  const items = useMemo(() => localize(history, lang), [lang]);
  // Index of the job open in the modal; reuses the projects modal for the full details
  const [selected, setSelected] = useState(null);
  const selectedItem =
    selected === null ? null : { ...items[selected], title: `${items[selected].role}, ${items[selected].organization}` };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t("experience.title")}</h2>

      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img loading="lazy" src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {items.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  loading="lazy"
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organization} ${t("experience.logo")}`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return (
                        <li className={styles.listItem} key={id}>
                          {experience}
                        </li>
                      );
                    })}
                  </ul>
                  {historyItem.details && (
                    <button type="button" className={styles.seeMore} onClick={() => setSelected(id)}>
                      {t("experience.seeMore")}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <ProjectModal project={selectedItem} onClose={() => setSelected(null)} />
    </section>
  );
};
