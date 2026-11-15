import { useState } from "react";

import { imgSrc } from "../../assets";
import { LANGUAGES, useLanguage } from "../../i18n/LanguageContext";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {t("nav.portfolio")}
      </a>
      <div className={styles.menu}>
        <img
          //
          loading="lazy"
          className={styles.menuBtn}
          src={menuOpen ? imgSrc("nav/closeIcon") : imgSrc("nav/menuIcon")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          //
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a target="_blank" href="/Resume-Alberto-Zelaya.pdf">
              {t("nav.cv")}
            </a>
          </li>
          <li>
            <a href="#experience">{t("nav.experience")}</a>
          </li>
          <li>
            <a href="#projects">{t("nav.projects")}</a>
          </li>
          <li>
            <a href="#about">{t("nav.about")}</a>
          </li>
          <li>
            <a href="#contact">{t("nav.contact")}</a>
          </li>
          <li>
            <div className={styles.language} role="group" aria-label={t("nav.language")}>
              {LANGUAGES.map((code) => (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  className={`${styles.languageBtn} ${lang === code ? styles.languageActive : ""}`}
                  aria-pressed={lang === code}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
