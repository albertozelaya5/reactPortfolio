import PropTypes from "prop-types";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./ProjectCard.module.css";

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    details: PropTypes.object,
  }),
  onMoreInfo: PropTypes.func,
};

export function ProjectCard({ project, onMoreInfo }) {
  const { title, imageSrc, description, skills, demo, source, details } = project;
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <img loading="lazy" className={styles.img} src={imageSrc} alt={`${t("projects.imageOf")} ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a target="_blank" rel="noreferrer" className={styles.link} href={demo}>
            {t("projects.demo")}
          </a>
        )}
        {source && (
          <a target="_blank" rel="noreferrer" className={styles.link} href={source}>
            {t("projects.source")}
          </a>
        )}
        {details && (
          <button type="button" className={styles.moreInfo} onClick={() => onMoreInfo(project)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9.5" />
              <path d="M12 11v5.5M12 7.6v.1" />
            </svg>
            {t("projects.moreInfo")}
          </button>
        )}
      </div>
    </div>
  );
}
