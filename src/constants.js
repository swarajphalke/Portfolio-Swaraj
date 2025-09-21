// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import visualstudioLogo from "./assets/tech_logo/visualstudio.png";
import renderLogo from "./assets/tech_logo/render.png";

// Experience Section Logo's
import i_soft from "./assets/company_logo/i-soft.png";

// Education Section Logo's
import agceLogo from "./assets/education_logo/agce_logo.png";
import kvmLogo from "./assets/education_logo/kvm_logo.png";
import stLogo from "./assets/education_logo/st_logo.png";

// Project Section Logo's
import coderevLogo from "./assets/work_logo/code_reviewer.png";
import geminiLogo from "./assets/work_logo/gemini.png";
import forecastLogo from "./assets/work_logo/forecast.png";
import lotteryLogo from "./assets/work_logo/lottery.png";
import todolistLogo from "./assets/work_logo/todo_list.png";
import notetakerLogo from "./assets/work_logo/note_taker.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Visual Studio", logo: visualstudioLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Render", logo: renderLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: i_soft,
    role: "Frontend Developer",
    company: "I-Soft Software Solution",
    date: "January 2023 - March 2023",
    desc: "Built and deployed responsive web applications using HTML, CSS and JavaScript enhancing UI performance by 30%. Optimized responsiveness and reduced load time by 30%, while improving SEO and accessibility, which led to a 15% increase in website traffic.",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Git", "GitHub"],
  },
  {
    id: 1,
    img: i_soft,
    role: "JavaScript Developer",
    company: "I-Soft Software Solution",
    date: "March 2024 - April 2024",
    desc: "Developed interactive and responsive web applications using HTML, CSS and JavaScript enhancing UI performance by 30%. Optimized the codebase to reduce load time by 25%, and collaborated with designers and backend teams to ensure seamless cross-platform functionality.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "JQuery",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: agceLogo,
    school: "AGCE, Satara",
    date: "Sept 2021 - Aug 2025",
    grade: "7.00 CGPA",
    desc: "I completed my B.Tech in Computer Science and Engineering from Arvind Gavali College of Engineering, Satara (AGCE), where I gained a strong foundation in programming and core computer science subjects such as Data Structures, Algorithms, Operating Systems, Computer Networks, and DBMS. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at AGCE has been instrumental in shaping my technical abilities and professional growth.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    img: kvmLogo,
    school: "Kisanveer Mahavidyalaya, Wai",
    date: "July 2020 - Aug 2021",
    grade: "79.00%",
    desc: "I completed my class 12 education from Kisanveer Mahavidyalaya, Wai, under the HSC board, where I studied Physics, Chemistry, Mathematics and Electronics (PCM) with Computer Science.",
    degree: "HSC(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: stLogo,
    school: "St. Thomas Highschool, Wai",
    date: "Apr 2018 - March 2019",
    grade: "59.00%",
    desc: "I completed my class 10 education from St. Thomas Highschool, Wai, under the SSC board, where I studied Science with Computer.",
    degree: "SSC(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Code Reviewer",
    description:
      "Code Reviewer is a powerful and user-friendly AI-powered web application that helps developers instantly improve their code. Simply paste your code, and the app provides feedback, highlights bugs, suggests optimizations, and recommends best practices. Its intuitive interface makes it an essential tool for writing cleaner, efficient, and error-free code.",
    image: coderevLogo,
    tags: [
      "Node JS",
      "Express JS",
      "React JS",
      "Framer Motion",
      "REST API",
      "Axios",
      "Tailwind CSS",
      "Responsive Design",
      "OpenAI API",
    ],
    github: "https://github.com/swarajphalke/Code-Reviewer",
    webapp: "https://code-reviewerx.vercel.app/",
  },
  {
    id: 1,
    title: "Gemini Clone - UI",
    description:
      "A Gemini Clone UI built with React and REST APIs to replicate the design and flow of the original app. It features a clean and modern interface with responsive layouts, smooth navigation, and efficient component structure. The focus is on simplicity, usability, and providing a seamless user experience across devices.",
    image: geminiLogo,
    tags: [
      "Node Js",
      "React JS",
      "Tailwind CSS",
      "REST API",
      "Responsive Design",
    ],
    github: "https://github.com/swarajphalke/Gemini-UI-Replica",
    webapp: "https://gemini-ui-replica.vercel.app/",
  },
  {
    id: 2,
    title: "Forecast App",
    description:
      "A weather app built with React and REST APIs, providing real-time weather updates for any location. It offers a clean and responsive interface with dynamic data fetching to ensure accurate forecasts. The app ensures smooth navigation and a seamless user experience across different devices.",
    image: forecastLogo,
    tags: [
      "React JS",
      "REST API",
      "Material UI",
      "Responsive Design",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/swarajphalke/Forecast-App",
    webapp: "https://forecast-appx.vercel.app/",
  },
  {
    id: 3,
    title: "Lottery Simulator",
    description:
      "Developed a dynamic lottery game in React with an engaging and interactive user interface. The project features random number generation, smooth gameplay, and a user-friendly design that ensures accessibility. It provides an enjoyable experience for users while demonstrating core React concepts.",
    image: lotteryLogo,
    tags: ["Node JS", "React JS", "NPM", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/swarajphalke/Lottery-Simulator",
    webapp: "https://lottery-simulatorx.vercel.app/",
  },
  {
    id: 4,
    title: "React Todo App",
    description:
      "A responsive to-do list app built with React for efficient task management. Users can add, edit, and delete tasks with real-time updates. The app features a clean, intuitive interface, ensuring smooth interaction and helping users stay organized across devices.",
    image: todolistLogo,
    tags: ["Node JS", "React JS", "Material UI", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/swarajphalke/React-Todo-App",
    webapp: "https://react-todo-appx.vercel.app/",
  },
  {
    id: 5,
    title: "Note Taker",
    description:
      "A responsive note-taking app built with HTML, CSS, and JavaScript for easy note organization. It features a simple interface, real-time updates, and optional browser storage, allowing users to quickly create, edit, and save notes across sessions.",
    image: notetakerLogo,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/swarajphalke/Note-Taker",
    webapp: "https://note-takerx.vercel.app/",
  },
];
