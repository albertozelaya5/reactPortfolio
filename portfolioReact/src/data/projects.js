import { bankist, bankistApp, developerSite, guessNumber, mapty, pigGame } from "../assets";

export default [
  {
    title: "Project A",
    imageSrc: developerSite,
    description: "This project was made to explore different APIs and learn how to handle JSON data.",
    skills: ["React", "Shadcn/Ui", "Tailwind", "Strapi"],
    demo: "https://www.example.com",
    source: "https://github.com/albertozelaya5/developerSite",
  },
  {
    title: "Project B",
    imageSrc: mapty,
    description:
      "This project was built to learn how to use the Leaflet library, logging workouts anywhere in the world.",
    skills: ["Javascript", "Leaflet", "LocalStorage"],
    demo: "https://www.example.com",
    source: "https://github.com/albertozelaya5/maptyApp",
  },
  {
    title: "Project C",
    imageSrc: bankist,
    description:
      "This project was created as a main page concept for a bank, exploring the benefits of a modern interface.",
    skills: ["Javascript", "DOM", "CSS"],
    demo: "https://www.example.com",
    source: "https://github.com/albertozelaya5/bakistApp",
  },
  {
    title: "Project D",
    imageSrc: bankistApp,
    description:
      "This project simulates a banking platform with login protection, allowing users to send and receive transfers, request loans, and with a logout timer.",
    skills: ["Javascript", "Intl API", "CSS"],
    demo: "https://www.example.com",
    source: "https://github.com/albertozelaya5/timerBankistApp",
  },
  {
    title: "Project E",
    imageSrc: pigGame,
    description: "This is a two-player dice game where the player with the highest score wins.",
    skills: ["Javascript", "HTML", "CSS"],
    demo: "https://www.example.com",
    source: "https://github.com/albertozelaya5/pigGame",
  },
  {
    title: "Project F",
    imageSrc: guessNumber,
    description: "This is a number guessing game based on scoring.",
    skills: ["Javascript", "HTML", "CSS"],
    demo: "https://www.example.com",
    source: "https://github.com/albertozelaya5/guessMyNumberApp",
  },
];
