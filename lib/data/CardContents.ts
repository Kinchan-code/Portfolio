import projectResolve from "@/public/web-project-resolve.png";
import haribon from "@/public/haribon-e-wall.png";
import orasan from "@/public/ojt-orasan.png";
import mapa from "@/public/mapa.png";

export const workExperience = [
  {
    date: "June 2024 - Present",
    title: "Junior Frontend Engineer",
    path: "https://www.simplevia.com/",
    company: "Dreamforge Innovations Inc.",
    description:
      "Responsible for transforming the user interface and enhancing the overall user experience. Leveraging React JS and various CSS libraries to create intuitive, efficient, and engaging front    end interfaces. Additionally, accountable for seamless API integration, ensuring a smooth and responsive user experience by employing the latest technologies and industry best practices.",
    links: [],
    technologies: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Git" },
      { name: "State Management" },
      { name: "Axios" },
      { name: "API Integration" },
      { name: "Unit Testing" },
      { name: "Progressive Web App" },
    ],
  },
  {
    date: "July 2023 - Aug 2023",
    title: "Web Developer Intern",
    path: "https://gothong.com/",
    company: "Gothong Southern Shipping Lines Inc.",
    description: "A 240-hour on the job training",
    links: [],
    technologies: [
      { name: "HTML/CSS" },
      { name: "React" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Git" },
      { name: "Project Management" },
      { name: "Scrum" },
    ],
  },
];

export const projects = [
  {
    image: projectResolve,
    title: "DSWD Project Resolve",
    path: "https://ncr-dswd.ph/",
    company: "Dreamforge Innovations Inc.",
    description:
      "Project Resolve is a web application for DSWD and public use, featuring interfaces for EOC/LGU, Regional Director/Mayor, public incident reporting, and the Quick Response Team. It ensures transparent disaster assistance distribution through a workflow where public reports are validated, approved by the Regional Director, and monitored by the Mayor.",
    links: [],
    technologies: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Git" },
      { name: "MySQL" },
      { name: "Zustand" },
      { name: "API Integration" },
      { name: "Unit Testing" },
      { name: "PWA" },
    ],
  },
  {
    image: haribon,
    title: "Haribon E-Wall",
    path: "https://haribon-e-wall.web.app/",
    company: "Pamantasan ng Lungsod ng Maynila",
    description:
      "Haribon E-Wall is a grievance forum designed for students within the university. Developed as a final project for a Software Engineering course, it served as a platform for students to voice concerns and feedback, facilitating communication between the student body and university administration. Despite its initial success and adoption by the school, the project was discontinued due to budget constraints.",
    links: [],
    technologies: [
      { name: "React.js" },
      { name: "Mantine" },
      { name: "JavaScript" },
      { name: "Git" },
      { name: "Firebase" },
      { name: "API Integration" },
    ],
  },
  {
    image: orasan,
    title: "InternConnect: ORASAN",
    company: "Gothong Southern Shipping Lines Inc.",
    description:
      "InternConnect: ORASAN is an in-house web application developed for Gothong Southern Shipping Lines Inc. to efficiently manage and monitor the daily time records of their interns. Originally created as a requirement for an On-the-Job Training (OJT) program, this application served as a vital tool for tracking intern attendance and performance. It facilitated seamless communication and collaboration between interns and supervisors, ensuring transparency and accountability. The application was actively used for nearly a year, significantly enhancing the internship experience, until it was recently discontinued due to server limitations.",
    links: [],
    technologies: [
      { name: "React.js" },
      { name: "Mantine" },
      { name: "TypeScript" },
      { name: "Git" },
      { name: "Axios" },
      { name: "API Integration" },
      { name: "Firebase" },
      { name: "Project Management" },
    ],
  },
  {
    image: mapa,
    title: "MAPA",
    company: "Gothong Southern Shipping Lines Inc.",
    description:
      "MAPA is a web application designed to provide real-time information about the location of the company's vessels. It utilizes the Leaflet API to display the vessels' positions on a map, allowing for easy visualization and monitoring of their whereabouts. The application also includes features for displaying vessel details, such as name, type, and current location, providing users with comprehensive information at a glance.",
    links: [],
    technologies: [
      { name: "React.js" },
      { name: "Mantine" },
      { name: "TypeScript" },
      { name: "Git" },
      { name: "Leaflet API" },
      { name: "Project Management" },
    ],
  },
];

export const education = [
  {
    date: "2020 - 2024",
    title: "Bachelor of Science in Computer Science",
    company: "Pamantasan ng Lungsod ng Maynila",
    path: "http://plm.edu.ph/",
    description:
      "Relevant courses included Data Structures and Algorithms, Computer Networks, and Software Engineering.",
    links: [],
    technologies: [
      { name: "Project Management" },
      { name: "Frontend Development" },
      { name: "Software Engineering" },
      { name: "Data Structures and Algorithms" },
      { name: "Computer Networks" },
    ],
  },
  {
    date: "2018 - 2020",
    title: "Senior High School",
    company: "La Consolacion College Manila",
    path: "https://www.lccm.edu.ph/",
    description:
      "Relevant courses included Computer Programming, Computer Systems, and Computer Networks.",
    links: [],
    technologies: [
      { name: "HTML/CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "Java" },
      { name: ".NET" },
      { name: "Database Management" },
    ],
  },
];
