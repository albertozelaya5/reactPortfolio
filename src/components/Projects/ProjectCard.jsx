import PropTypes from "prop-types";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./ProjectCard.module.css";

// Cards show the first few skills so they all keep the same height; the modal lists the full stack
const MAX_SKILLS = 4;

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
      <img loading="lazy" decoding="async" width="1200" height="750" className={styles.img} src={imageSrc} alt={`${t("projects.imageOf")} ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.slice(0, MAX_SKILLS).map((skill) => (
          <li className={styles.skill} key={skill}>
            {skill}
          </li>
        ))}
        {skills.length > MAX_SKILLS && (
          <li className={styles.skill} title={skills.slice(MAX_SKILLS).join(", ")}>
            +{skills.length - MAX_SKILLS}
          </li>
        )}
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
