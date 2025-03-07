import projectResolve from "@/public/web-project-resolve.png";
import orasan from "@/public/ojt-orasan.png";
import orasanlogin from "@/public/ojt-orasan-login.png";
import pasigLogin from "@/public/pasig-login.jpg";
import pasigLanding from "@/public/pasig-landing-page.jpg";
import pasigAppointment from "@/public/pasig-make-an-appointment.jpg";
import pasigTrack from "@/public/pasig-track-ticket.jpg";
import pasigTransactions from "@/public/pasig-transactions.jpg";
import pasigProfile from "@/public/pasig-profile.jpg";

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
    date: "July 2023 - August 2023",
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
    date: "November 2024 - March 2025",
    images: [
      pasigLogin,
      pasigLanding,
      pasigAppointment,
      pasigTrack,
      pasigTransactions,
      pasigProfile,
    ],
    title: "Pasig Queuing Management System",
    path: "",
    company: "Dreamforge Innovations Inc.",
    description:
      "Pasig Queuing Management System is a queuing system for Pasig City Hall's everyday transactions per offices and services. Pasig QMS consists of three interfaces: a kiosk app, an admin interface, and a mobile appointment interface. The kiosk and admin interfaces are used within Pasig City Hall, while the mobile appointment interface is available for public use. All interfaces are Progressive Web Apps (PWA).",
    links: [],
    technologies: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Mantine" },
      { name: "React Query" },
      { name: "Axios" },
      { name: "Git" },
      { name: "MySQL" },
      { name: "Context API" },
      { name: "API Integration" },
      { name: "Unit Testing" },
      { name: "PWA" },
    ],
  },
  {
    date: "June 2024 - Sept 2024",
    images: [projectResolve],
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
    date: "July 2023 - August 2023",
    images: [orasanlogin, orasan],
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
  // Additional projects can be added here
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
