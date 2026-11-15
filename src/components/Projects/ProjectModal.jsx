import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./ProjectModal.module.css";

ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  // Block page scroll while the modal is open
  useEffect(() => {
    if (!project) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [project]);

  // Close when clicking the backdrop (outside the panel)
  const handleClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  const details = project?.details;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      onClick={handleClick}
      aria-labelledby="project-modal-title"
    >
      {project && details && (
        <div className={styles.panel}>
          <button type="button" className={styles.close} onClick={onClose} aria-label={t("modal.close")}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <img className={styles.cover} src={project.imageSrc} alt={`${t("modal.screenshotOf")} ${project.title}`} />

          <div className={styles.body}>
            <header className={styles.header}>
              {details.eyebrow && <p className={styles.eyebrow}>{details.eyebrow}</p>}
              <h3 id="project-modal-title" className={styles.title}>
                {project.title}
              </h3>
              {details.subtitle && <p className={styles.subtitle}>{details.subtitle}</p>}
            </header>

            {details.meta?.length > 0 && (
              <dl className={styles.meta}>
                {details.meta.map(({ label, value }) => (
                  <div key={label} className={styles.metaItem}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {details.stats?.length > 0 && (
              <ul className={styles.stats} aria-label={t("modal.results")}>
                {details.stats.map(({ value, label }) => (
                  <li key={label} className={styles.stat}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.columns}>
              <div className={styles.main}>
                <section>
                  <h4 className={styles.heading}>{t("modal.overview")}</h4>
                  {details.overview.map((paragraph, i) => (
                    <p key={i} className={styles.text}>
                      {paragraph}
                    </p>
                  ))}
                </section>

                {details.highlights?.length > 0 && (
                  <section>
                    <h4 className={styles.heading}>{t("modal.delivers")}</h4>
                    <ul className={styles.list}>
                      {details.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <aside className={styles.aside}>
                {details.role && (
                  <section>
                    <h4 className={styles.heading}>{t("modal.role")}</h4>
                    <p className={styles.textSmall}>{details.role}</p>
                  </section>
                )}

                {details.stack?.length > 0 && (
                  <section>
                    <h4 className={styles.heading}>{t("modal.stack")}</h4>
                    <ul className={styles.stack}>
                      {details.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {(project.demo || project.source) && (
                  <div className={styles.actions}>
                    {project.demo && (
                      <a className={styles.action} href={project.demo} target="_blank" rel="noreferrer">
                        {t("modal.visit")}
                      </a>
                    )}
                    {project.source && (
                      <a className={styles.actionGhost} href={project.source} target="_blank" rel="noreferrer">
                        {t("projects.source")}
                      </a>
                    )}
                  </div>
                )}
              </aside>
            </div>

            {details.gallery?.length > 0 && (
              <section className={styles.gallerySection}>
                <h4 className={styles.heading}>{t("modal.screens")}</h4>
                <div className={styles.gallery}>
                  {details.gallery.map(({ src, alt }) => (
                    <a key={src} href={src} target="_blank" rel="noreferrer" title={t("modal.openFull")}>
                      <img loading="lazy" src={src} alt={alt} />
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
