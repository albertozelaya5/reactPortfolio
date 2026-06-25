import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Alberto</h1>
        <p className={styles.description}>
          I&apos;m a Frontend Engineer specialized in building high-performance, enterprise-grade web applications with
          React and TypeScript.
        </p>
        <a href="mailto:albertolaniman@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
