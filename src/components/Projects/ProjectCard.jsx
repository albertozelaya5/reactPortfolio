import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }),
};

export function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className={styles.container}>
      <img
        loading="lazy"
        className={styles.img}
        src={imageSrc}
        alt={`Image of ${title}`}
      />
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
          <a target="_blank" className={styles.link} href={demo}>
            Demo
          </a>
        )}
        <a target="_blank" className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
}
