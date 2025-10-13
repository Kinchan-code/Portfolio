import projectResolve from '@/public/web-project-resolve.png';
import pasigLogin from '@/public/pasig-login.jpg';
import pasigLanding from '@/public/pasig-landing-page.jpg';
import pasigAppointment from '@/public/pasig-make-an-appointment.jpg';
import pasigTrack from '@/public/pasig-track-ticket.jpg';
import pasigTransactions from '@/public/pasig-transactions.jpg';
import pasigProfile from '@/public/pasig-profile.jpg';
import discussionWeb from '@/public/discussion-platform-web.png';

export const workExperience = [
  {
    date: 'Aug 2025 - Present',
    title: 'Full Stack Developer',
    path: 'https://optimasolutions.io',
    company: 'Optimas Solutions Inc.',
    description:
      'As a Full Stack Developer at Optima Solutions, I build and maintain end-to-end web applications. I design user-friendly, accessible interfaces with React and Next.js while developing robust backend systems to ensure scalability and performance. I work across the full stack to deliver seamless digital experiences from database to user interface. This role was project-based under a full-time contract for a specific client project, focusing on both frontend and backend development',
    links: [],
    technologies: [
      { name: 'Next.js' },
      { name: 'SASS' },
      { name: 'TypeScript' },
      { name: 'Git' },
      { name: 'Scrum' },
      { name: 'State Management' },
      { name: 'Axios' },
      { name: 'API Integration' },
      { name: 'API Development' },
      { name: 'Laravel' },
      { name: 'PHP' },
      { name: 'MySQL' },
    ],
  },
  {
    date: 'June 2024 - Sept 2025',
    title: 'Frontend Engineer',
    path: 'https://www.simplevia.com/',
    company: 'Dreamforge Innovations Inc.',
    description:
      'As a Frontend Engineer at Dreamforge Innovations Inc., I developed and optimized user interfaces to deliver smooth and engaging digital experiences. I utilized React.js and modern CSS libraries to build intuitive, responsive designs while ensuring seamless API integration. My focus was on performance, usability, and applying best practices to create efficient and user-friendly applications.',
    links: [],
    technologies: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'TypeScript' },
      { name: 'Git' },
      { name: 'State Management' },
      { name: 'Axios' },
      { name: 'API Integration' },
      { name: 'Unit Testing' },
      { name: 'Progressive Web App' },
    ],
  },
];

export const projects = [
  {
    date: 'July 2025 - August 2025',
    images: [discussionWeb],
    title: 'Discussion Platform',
    path: 'https://discussion-platform-seven.vercel.app/',
    description:
      'A comprehensive medical protocols platform that enables healthcare professionals to collaborate through interactive discussions, peer reviews, and detailed comments. Users can create, share, and evaluate medical protocols while fostering knowledge exchange and best practice development within the medical community.',
    technologies: [
      { name: 'React.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Shadcn UI' },
      { name: 'React Query' },
      { name: 'Axios' },
      { name: 'Zustand' },
      { name: 'Laravel' },
      { name: 'Typesense' },
      { name: 'MySQL' },
    ],
  },
  {
    date: 'November 2024 - March 2025',
    images: [
      pasigLogin,
      pasigLanding,
      pasigAppointment,
      pasigTrack,
      pasigTransactions,
      pasigProfile,
    ],
    title: 'Pasig Queuing Management System',
    path: '',
    company: 'Dreamforge Innovations Inc.',
    description:
      "Pasig Queuing Management System is a queuing system for Pasig City Hall's everyday transactions per offices and services. Pasig QMS consists of three interfaces: a kiosk app, an admin interface, and a mobile appointment interface. The kiosk and admin interfaces are used within Pasig City Hall, while the mobile appointment interface is available for public use. All interfaces are Progressive Web Apps (PWA).",
    technologies: [
      { name: 'React.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Mantine' },
      { name: 'React Query' },
      { name: 'Axios' },
      { name: 'MySQL' },
      { name: 'Context API' },
      { name: 'API Integration' },
      { name: 'Unit Testing' },
      { name: 'PWA' },
    ],
  },
  {
    date: 'June 2024 - Sept 2024',
    images: [projectResolve],
    title: 'DSWD Project Resolve',
    company: 'Dreamforge Innovations Inc.',
    description:
      'Project Resolve is a web application for DSWD and public use, featuring interfaces for EOC/LGU, Regional Director/Mayor, public incident reporting, and the Quick Response Team. It ensures transparent disaster assistance distribution through a workflow where public reports are validated, approved by the Regional Director, and monitored by the Mayor.',
    technologies: [
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
      { name: 'TypeScript' },
      { name: 'MySQL' },
      { name: 'Zustand' },
      { name: 'API Integration' },
      { name: 'Unit Testing' },
      { name: 'PWA' },
    ],
  },
  // Additional projects can be added here
];

export const education = [
  {
    date: '2020 - 2024',
    title: 'Bachelor of Science in Computer Science',
    company: 'Pamantasan ng Lungsod ng Maynila',
    path: 'http://plm.edu.ph/',
    description:
      'Relevant courses included Data Structures and Algorithms, Computer Networks, and Software Engineering.',
    links: [],
    technologies: [
      { name: 'Project Management' },
      { name: 'Frontend Development' },
      { name: 'Software Engineering' },
      { name: 'Data Structures and Algorithms' },
      { name: 'Computer Networks' },
    ],
  },
  {
    date: '2018 - 2020',
    title: 'Senior High School',
    company: 'La Consolacion College Manila',
    path: 'https://www.lccm.edu.ph/',
    description:
      'Relevant courses included Computer Programming, Computer Systems, and Computer Networks.',
    links: [],
    technologies: [
      { name: 'HTML/CSS' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'Java' },
      { name: '.NET' },
      { name: 'Database Management' },
    ],
  },
];
