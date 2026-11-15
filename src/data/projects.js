import {
  SiAxios,
  SiDevexpress,
  SiJavascript,
  SiReact,
  SiReacthookform,
  SiReactrouter,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { imgSrc } from "../assets";

export default [
  //* REAL WORLD PROJECTS
  {
    title: "Enterprise Requirements & Workflow Manager",
    imageSrc: imgSrc("projects/requirements-program"),
    description: "Bank-wide task management system with multi-level nested subtasks and dynamic roles.",
    skills: [
      { label: "", icon: SiReact },
      { label: "", icon: SiTypescript },
      { label: "", icon: SiDevexpress },
      { label: "Styled Components", icon: SiStyledcomponents },
      { label: "RTK Query", icon: SiRedux },
      { label: "Redux Toolkit", icon: SiRedux },
    ],

    demo: "",
    source: "",
  },
  {
    title: "Legal Portfolio & Analytics System",
    imageSrc: imgSrc("projects/demands-program"),
    description: "Tracks multi-stage legal lawsuits and visualizes recovery metrics by branch.",
    skills: [
      { label: "", icon: SiReact },
      { label: "", icon: SiDevexpress },
      { label: "", icon: SiJavascript },
      { label: "Styled Components", icon: SiStyledcomponents },
      { label: "React Hook Form", icon: SiReacthookform },
    ],
    demo: "",
    source: "",
  },
  {
    title: "Banhcafe Open API Portal",
    imageSrc: imgSrc("projects/developerSite"),
    description: "Accelerates fintech integration by securely exposing and documenting internal banking APIs.",
    skills: [
      { label: "", icon: SiReact },
      { label: "", icon: SiVite },
      { label: "", icon: SiTailwindcss },
      { label: "Shadcn", icon: SiShadcnui },
      { label: "Axios", icon: SiAxios },
      { label: "Zustand", icon: null },
    ],
    demo: "",
    source: "https://github.com/albertozelaya5/developerSite",
  },

  // //* PROJECTS FROM COURSES
  {
    title: "Fast React Pizza Co.",
    imageSrc: imgSrc("projects/reactPizza"),
    description: "Streamlines custom pizza ordering and automates delivery locations via GPS.",
    skills: [
      { label: "", icon: SiReact },
      { label: "", icon: SiTypescript },
      { label: "", icon: SiTailwindcss },
      { label: "React Router", icon: SiReactrouter },
      { label: "Zustand", icon: null },
    ],
    demo: "https://react-pizza-zustand.netlify.app/",
    source: "https://github.com/albertozelaya5/react-pizza-zustand",
  },
  {
    title: "React Quiz App",
    imageSrc: imgSrc("projects/reactQuiz"),
    description: "Simulates timed dynamic test environments with persistent score tracking.",
    skills: [
      { label: "", icon: SiReact },
      { label: "useReducer", icon: null },
      { label: "JSON Server", icon: null },
      { label: "State Management", icon: null },
    ],
    demo: "https://reactquizappal.netlify.app/",
    source: "https://github.com/albertozelaya5/reactQuizApp",
  },
];
