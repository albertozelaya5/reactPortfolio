import PropTypes from "prop-types";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          loading="lazy"
          src={getImageLocation("./about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <Icon iconName="cursor" />

            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m Frontend Developer especializad in crafting responsive,
                scalable web applications using React and JavaScript/TypeScript.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <Icon iconName="clock" />

            <div className={styles.aboutItemText}>
              <h3>Best Practices</h3>
              <p>
                Strong focus on clean design, reusable components, and
                performance optimization. Experienced in team collaboration,
                agile development, and API integration.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <Icon iconName="layout" />
            <div className={styles.aboutItemText}>
              <h3>UX Designer</h3>
              <p>
                Experienced in working with UX designs in Figma to build
                intuitive and responsive user interfaces
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

function Icon({ iconName }) {
  if (iconName === "cursor")
    return (
      <div>
        <svg
          className={styles.icons}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M7.92098 2.29951C6.93571 1.5331 5.5 2.23523 5.5 3.48349V20.4923C5.5 21.9145 7.2945 22.5382 8.17661 21.4226L12.3676 16.1224C12.6806 15.7267 13.1574 15.4958 13.6619 15.4958H20.5143C21.9425 15.4958 22.5626 13.6887 21.4353 12.8119L7.92098 2.29951Z"></path>{" "}
          </g>
        </svg>
      </div>
    );

  if (iconName === "layout")
    return (
      <div>
        <svg
          className={styles.icons}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M21,11H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM4,21h7V13H3v7A1,1,0,0,0,4,21Zm16,0a1,1,0,0,0,1-1V13H13v8Z"></path>
          </g>
        </svg>
      </div>
    );

  if (iconName === "clock")
    return (
      <div>
        <svg
          className={styles.icons}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.4999 11.7929V6.96997C12.4999 6.69383 12.2761 6.46997 11.9999 6.46997C11.7238 6.46997 11.4999 6.69383 11.4999 6.96997V11.97C11.4999 11.975 11.5 11.9801 11.5002 11.9851C11.4962 12.118 11.545 12.2521 11.6464 12.3535L14.4748 15.1819C14.6701 15.3772 14.9867 15.3772 15.1819 15.1819C15.3772 14.9867 15.3772 14.6701 15.1819 14.4748L12.4999 11.7929Z"
            ></path>{" "}
          </g>
        </svg>
      </div>
    );
}
