// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import hcltechLogo from './assets/company_logo/hcltech-new-logo.svg';
import sparksLogo from './assets/company_logo/sparks-logo.png';

// Education Section Logo's
import schoolLogo from './assets/education_logo/school_logo_new.png';
import vtuLogo from './assets/education_logo/vtu_logo_new.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: hcltechLogo,
      role: "Senior Software Developer",
      company: "HCLTech",
      date: "August 2022 - Present",
      desc: "Developed an innovative E-Learning platform to improve remote education, integrating interactive assessments, dynamic learning resources, and AI-driven technologies for question generation and PDF analysis.Solely developed an Admin Portal for an E-learning platform with features for question pool generation , assessment scheduling , and training creation , including a dashboard for usage analysis , resulting in a 30% increase in efficiency.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: sparksLogo,
      role: "Fullstack Developer Intern",
      company: "The Sparks Foundation",
      date: "July 2021 - Aug 2021",
      desc: "Developed a comprehensive web application that serves as a basic banking system using HTML, CSS, JavaScript, PHP, and MySQL. Key features include :- User Management, Transaction Processing, User and Transaction overview.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: vtuLogo,
      school: "Visvesvaraya Technological University",
      date: "Aug 2018 - Jul 2022",
      grade: "7.5 CGPA",
      desc: "I completed my Bachelor's degree in B.E. (Electronics and Telecommunication) from Visvesvaraya Technological University, Belgavi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Visvesvaraya Technological University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "B.E. (Electronics and Telecommunication)",
    },
    {
      id: 1,
      img: schoolLogo,
      school: "Gyan Niketan School",
      date: "Apr 2016 - March 2017",
      grade: "70%",
      desc: "I completed my class 12 education from Gyan Niketan School, Patna, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "CBSE(XII)",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Gyan Niketan School",
      date: "Apr 2014 - March 2015",
      grade: "84%",
      desc: "I completed my class 10 education from Gyan Niketan School, Patna, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/KrPriyam/github-profile-detection",
      webapp: "https://github-profile-detection.vercel.app/",
    },
    {
      id: 1,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/KrPriyam/movie-recommendation-app",
      webapp: "https://movie-recommendation-app-xi.vercel.app/",
    },
    {
      id: 2,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/KrPriyam/task-reminder",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 3,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/KrPriyam/image-search",
      webapp: "https://image-search-ten-rust.vercel.app/",
    },
    {
      id: 4,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/KrPriyam/image-background-remover",
      webapp: "https://image-background-remover-alpha.vercel.app/",
    },
  ];  