import { useMemo, useState } from "react";
import projects from "../../data/projects";
import { localize, useLanguage } from "../../i18n/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import styles from "./Projects.module.css";

export const Projects = () => {
  const { lang, t } = useLanguage();
  const items = useMemo(() => localize(projects, lang), [lang]);
  // Keep the index, not the project, so an open modal follows a language change
  const [selected, setSelected] = useState(null);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("projects.title")}</h2>
      <div className={styles.projects}>
        {items.map((project, id) => {
          return <ProjectCard key={id} project={project} onMoreInfo={() => setSelected(id)} />;
        })}
      </div>
      <ProjectModal project={selected === null ? null : items[selected]} onClose={() => setSelected(null)} />
    </section>
  );
};
