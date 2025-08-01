import { Mail, MapPin, Phone } from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Ariunjargal Ochirpurev",
  nickname: "Arii",
  title: "Full Stack Developer",
  email: "ariunjargal.ochirpurev@gmail.com",
  phone: "+976 86981230",
  location: "Ulaanbaatar, Mongolia",
  bio: "A passionate Full Stack Developer with international experience, currently enhancing my skills at Pinecone Academy.",
  longBio:
    "I am a versatile professional with experience in restaurant management, office administration, and now pursuing a career in full stack development. With a background in economic management from Nagaoka University in Japan, I bring a unique perspective to problem-solving and project development. My journey in web development started recently, and I'm excited to combine my diverse experience with new technical skills.",
  availability: "Currently studying, open to opportunities",
  resumeLink: "#",
  birthday: "December 30, 1998",
};

// Social Media Links
export const socialLinks = {
  github: "https://github.com/Ariunjargal-O",
  linkedin: "https://www.linkedin.com/in/ariunjargal-ochirpurev-28ba30300/",
  instagram: "https://www.instagram.com/opti.ari/",
  facebook:
    "https://www.facebook.com/profile.php?id=100010655025939&locale=ja_JP",
  // Add more social links as needed
};

// Skills Configuration
export const skills = [
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Prisma", level: 65 },
      { name: "REST APIs", level: 75 },
      { name: "GraphQL", level: 60 },
    ],
  },
  {
    category: "Tools & Testing",
    icon: "Code",
    items: [
      { name: "Git/GitHub", level: 80 },
      { name: "Vercel", level: 75 },
      { name: "Postman", level: 70 },
      { name: "Render", level: 65 },
      { name: "Jest", level: 60 },
      { name: "Cypress", level: 60 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "Briefcase",
    items: [
      { name: "Fast Learning", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Time Management", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Teamwork", level: 95 },
      { name: "Responsibility", level: 90 },
    ],
  },
];

// Technologies you work with
export const technologies = [
  { name: "HTML5", icon: "Globe" },
  { name: "CSS3", icon: "Layers" },
  { name: "JavaScript", icon: "Code" },
  { name: "TypeScript", icon: "Code" },
  { name: "React", icon: "Code" },
  { name: "Next.js", icon: "Server" },
  { name: "Node.js", icon: "Server" },
  { name: "MongoDB", icon: "Database" },
  { name: "Mongoose", icon: "Database" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "Tailwind CSS", icon: "Palette" },
  { name: "Prisma", icon: "Database" },
  { name: "Neon", icon: "Database" },
  { name: "SuperBase", icon: "Database" },
  { name: "GraphQL", icon: "Network" },
  { name: "Git", icon: "GitBranch" },
  { name: "Figma", icon: "Figma" },
  { name: "Jest", icon: "TestTube" },
  { name: "Cypress", icon: "TestTube" },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience.",
    longDescription:
      "This responsive portfolio website was built using Next.js and Tailwind CSS. It features smooth animations, dark/light mode, and a contact form. The project helped me strengthen my React skills and learn about responsive design principles.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1749557796/Screen_Shot_2025-06-10_at_20.16.15_d8cvq2.png",
    category: "frontend",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    demoUrl: "https://ariunjargal.vercel.app/",
    githubUrl: "https://github.com/Ariunjargal-O/Ariunjargal-portfolioo9",
    features: [
      "Responsive design for all devices",
      "Dark/light mode toggle",
      "Smooth scroll animations",
      "Interactive UI components",
      "Contact form with validation",
      "Project showcase section",
    ],
  },
  {
    id: 2,
    title: "To-Do list",
    description:
      "A simple and intuitive to-do list app for organizing daily tasks and boosting productivity. ",
    longDescription:
      "This task management application helps users organize their work with features like task creation, due dates, priority levels, and status tracking. It was built as part of my learning journey at Pinecone Academy.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1752035209/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A_ffelvh.png",
    category: "frontend",
    technologies: ["React", "Next,js", "Tailwind Css", "JavaScript"],
    demoUrl: "https://to-do-list-mocha-five-54.vercel.app/",
    githubUrl: "https://github.com/Ariunjargal-O/To-Do-list",
    features: [
      "Task creation and management",
      "Due dates and priority levels",
      "Task filtering and sorting",
      "User authentication",
      "Data persistence with MongoDB",
      "Responsive UI for mobile and desktop",
    ],
  },

  {
    id: 3,
    title: "Weather application",
    description:
      "A weather application showing current conditions and forecasts.",
    longDescription:
      "This weather dashboard provides current conditions and forecasts with features like location search, hourly and daily forecasts, and weather alerts. It uses a third-party weather API to fetch real-time data.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1746350140/g43kt4h2ydt51mmzmajh.png",
    category: "frontend",
    technologies: [
      "React",
      "JavaScript",
      "Weather API",
      "Tailwind Css",
      "Typescript",
      "Next,js",
    ],
    demoUrl: "https://weather-app-silk-kappa.vercel.app/",
    githubUrl: "https://github.com/Ariunjargal-O/Weather-app.git",
    features: [
      "Current weather conditions",
      "5-day forecast",
      "Location search",
      "Responsive design",
      "Weather icons and visualizations",
      "Temperature unit conversion",
    ],
  },
  {
    id: 4,
    title: "Movie websait",
    description:
      "A modern movie website showcasing popular films, trailers, and essential movie details using dynamic UI and API integration.",
    longDescription:
      "",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: [
      "Next.js",
      "TypeScript",
      "Movie API",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Ariunjargal-O",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 5,
    title: "Tesla Front-end",
    description:
      "My very first website, built to practice basic HTML, CSS, and layout structure. A simple project that helped me start my web development journey.",
    longDescription:
      "",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1752033792/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A_zdvosr.png",
    category: "frontend",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://ariunjargal-o.github.io/Tesla/",
    githubUrl: "https://github.com/Ariunjargal-O/Tesla.git",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 6,
    title: "Apple Front-End",
    description:
      "A modern and responsive Apple front-end clone. My third project, where I learned layout structuring and responsive design techniques.",
    longDescription:
      "My third website project — a front-end clone of Apple’s homepage. Through this project, I learned how to build responsive layouts and apply modern UI principles using clean design and smooth interactions.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1749556915/Screen_Shot_2025-06-10_at_19.59.18_vxrjcr.png",
    category: "frontend",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://ariunjargal-o.github.io/Apple/",
    githubUrl: "https://github.com/Ariunjargal-O/Apple.git",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 7,
    title: "Food delivery",
    description:
      "A simple yet functional food delivery platform developed with React and Node/Express. This project introduced me to full-stack development and API communication.",
    longDescription:
      "A full-stack food delivery web application built with React for the front-end and Express.js for the back-end. This was my first backend project, where I learned to connect APIs, manage data, and handle user interactions across the stack.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1749557366/Screen_Shot_2025-06-10_at_20.07.34_ym7eyd.png",
    category: "fullstack",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "React",
      "PostMan",
      "Cloudinary",
      "Render",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
    ],
    demoUrl: "https://front-food-delivery.vercel.app/",
    githubUrl: "https://github.com/Ariunjargal-O/frontEnd-food-delivery",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 8,
    title: "By me coffee",
    description:
      "A full-stack clone of the By Me Coffee website built with React and SQL database. ",
    longDescription:
      "Developed a full-stack clone of the By Me Coffee website using React for the front-end and SQL for the back-end database management. The application includes user-friendly navigation, product displays, and real-time data handling. This project helped me strengthen my skills in connecting front-end interfaces with SQL databases and building scalable web applications.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1749557364/Screen_Shot_2025-06-10_at_20.07.15_qohrvv.png",
    category: "fullstack",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Neon",
      "PostgreSql",
      "Tailwind CSS",
      "PostMan",
      "Cloudinary",
      "Shadcn UI",
      "React",
      "Express.js",
    ],
    demoUrl: "https://front-end-by-me-coffee.vercel.app/",
    githubUrl: "https://github.com/Ariunjargal-O/FrontEnd-ByMe-Coffee",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 9,
    title: "Edulab LMS",
    description:
      " I developed independently. I designed and implemented all UI components, focusing on user-friendly and responsive learning management system features.",
    longDescription:
      "Edulab LMS is my personal full-stack project, built entirely by myself from design to deployment. I created all the UI/UX elements from scratch, ensuring a clean and intuitive experience. This learning management system includes core features such as course management, user authentication, and progress tracking, demonstrating my ability to handle both front-end and back-end development independently.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1749556925/Screen_Shot_2025-06-10_at_20.00.19_kmfm4q.png",
    category: "fullstack",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "Render",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "Neon",
      "Vercel",
      "Shadcn UI",
      "React",
      "SuperBase",
      "Git"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Ariunjargal-O",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },  {
    id: 10,
    title: "Multi-Steps-Form",
    description:
      "A multi-step form project focused on practicing form validation and user input management. ",
    longDescription:
      "Developed a multi-step form to enhance my skills in form validation and state management. The form guides users through multiple stages, validating inputs at each step to ensure data accuracy and improve UX.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1749556907/Screen_Shot_2025-06-10_at_20.00.49_xa2pph.png",
    category: "frontend",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Git",
    ],
    demoUrl: "https://multi-steps-form-iota.vercel.app/",
    githubUrl: "https://github.com/Ariunjargal-O/Multi-Steps-Form.git",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 11,
    title: "Snake game",
    description:
      "A classic Snake game built with React, demonstrating state management, event handling, and dynamic rendering.",
    longDescription:
      "",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1749556907/Screen_Shot_2025-06-10_at_20.00.55_oluzby.png",
    category: "frontend",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Git"
    ],
    demoUrl: "https://snake1-cyan.vercel.app/",
    githubUrl: "https://github.com/Ariunjargal-O/Snake-Game.git",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 12,
    title: "Solar-system",
    description:
      "A solar system animation project created to learn and practice CSS and JavaScript animations, illustrating planetary orbits and rotations.",
    longDescription:
      "This e-commerce platform allows users to browse products, add items to cart, and complete the checkout process. It includes user authentication, product filtering, and order management features.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1752033665/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A_weaolg.png",
    category: "frontend",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://ariunjargal-o.github.io/Solar-system/",
    githubUrl: "https://github.com/Ariunjargal-O/Solar-system.git",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 13,
    title: "Pine-Tour Landing page",
    description:
      "A landing page project built to practice CSS flexbox and positioning techniques, including hover effects for interactive UI elements.",
    longDescription:
      "This e-commerce platform allows users to browse products, add items to cart, and complete the checkout process. It includes user authentication, product filtering, and order management features.",
    image: "https://res.cloudinary.com/drhm9rfyi/image/upload/v1752033585/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A_tnbgot.png",
    category: "frontend",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://ariunjargal-o.github.io/PineTour/",
    githubUrl: "https://github.com/Ariunjargal-O/PineTour.git",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 14,
    title: "Workplacce2.0",
    description:
      "WorkPlace 2.0 is a full-stack e-commerce platform that allows users to browse products, add items to cart, and complete the checkout process. It includes user authentication, product filtering, and order management features.",
    longDescription:
      "This e-commerce platform allows users to browse products, add items to cart, and complete the checkout process. It includes user authentication, product filtering, and order management features.",
    image: "",
    category: "fullstack",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://workplace-2-0.vercel.app/",
    githubUrl: "https://github.com/anhnii-7/workplace-2.0",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
];

// Experience
export const experiences = [
  {
    title: "Full Stack Developer Student",
    company: "Pinecone Academy",
    location: "Ulaanbaatar, Mongolia",
    date: "November 2024 - June 2025",
    description:
      "Currently studying full stack development, focusing on modern web technologies and best practices.",
    achievements: [
      "Learning MERN stack (MongoDB, Express, React, Node.js)",
      "Building responsive and interactive web applications",
      "Collaborating with peers on group projects",
      "Developing full-stack applications with TypeScript and Next.js",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Next.js",
      "Express.js",
      "Prisma",
      "Mongoose",
      "Shadcn UI",
      "Tailwind UI",
      "Framer-motion",
      "Daisy Ui",
      "GraphQL",
      "Neon",
      "Vercel",
      "Render",
      "Material UI",
      "Daisy UI",
      "Figma"
    ],
    type: "education",
  },
  {
    title: "Office Manager",
    company: "New-line Education Center",
    location: "Ulaanbaatar, Mongolia",
    date: "September 2024 - April 2025",
    description:
      "Managed office operations and administrative functions for an education center.",
    achievements: [
      "Streamlined administrative processes",
      "Coordinated with teaching staff and students",
      "Maintained office records and documentation",
      "Implemented time management systems",
    ],
    technologies: ["MS Office", "Administrative Systems", "Customer Service"],
    type: "work",
  },
  {
    title: "Restaurant Manager",
    company: "Restaurant",
    location: "Tokyo, Japan",
    date: "April 2023 - June 2024",
    description:
      "Managed daily operations of a restaurant, including staff supervision, customer service, and inventory management.",
    achievements: [
      "Supervised a team of 10+ staff members",
      "Improved customer satisfaction ratings",
      "Optimized inventory management processes",
      "Implemented marketing strategies to increase customer base",
    ],
    technologies: [
      "POS Systems",
      "Inventory Management",
      "Team Leadership",
      "Marketing",
    ],
    type: "work",
  },
  {
    title: "Bachelor's Degree in Economic Management",
    company: "Nagaoka University",
    location: "Niigata, Japan",
    date: "April 2020 - March 2023",
    description:
      "Studied Economic Management with a focus on business administration and international economics.",
    achievements: [
      "Completed coursework in business management, economics, and finance",
      "Participated in international student programs",
      "Developed analytical and problem-solving skills",
      "Gained cross-cultural communication experience",
    ],
    technologies: [],
    type: "education",
  },
  {
    title: "University Student",
    company: "Citi University",
    location: "Mongolia",
    date: "October 2016 - March 2020",
    description: "Studied at Citi University in Mongolia.",
    achievements: [
      "Completed foundational coursework",
      "Participated in student activities",
    ],
    technologies: [],
    type: "education",
  },
  {
    title: "High School Student",
    company: "NUM Lycee Baigali-Ekh High School",
    location: "Mongolia",
    date: "September 2013 - June 2016",
    description:
      "Completed high school education with a focus on general studies.",
    achievements: [
      "Graduated with good academic standing",
      "Participated in extracurricular activities",
    ],
    technologies: [],
    type: "education",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Instructor Name",
    role: "Instructor at Pinecone Academy",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Ariunjargal is a dedicated student who consistently demonstrates a strong work ethic and eagerness to learn. Their attention to detail and problem-solving skills are impressive, and they're always willing to help fellow students.",
    initials: "IN",
  },
  {
    id: 2,
    name: "Former Colleague",
    role: "New-line Education Center",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Arii was a pleasure. They brought organization and efficiency to our office operations and were always professional and friendly. Their ability to manage multiple tasks while maintaining quality is remarkable.",
    initials: "FC",
  },
  {
    id: 3,
    name: "Restaurant Owner",
    role: "Tokyo Restaurant",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Ariunjargal was an exceptional manager who consistently delivered high-quality service. Their leadership skills and attention to customer satisfaction helped our restaurant thrive. They have a natural talent for team management.",
    initials: "RO",
  },
];

// Stats
export const stats = [
  { value: "8+", label: "Years in Japan" },
  { value: "3", label: "Languages" },
  { value: "10+", label: "Projects" },
  { value: "3", label: "Countries Lived In" },
];

// Contact Information
export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ariunjargal.ochirpurev@gmail.com",
    link: "mailto:ariunjargal.ochirpurev@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+976 86981230",
    link: "tel:+97686981230",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ulaanbaatar, Mongolia",
    link: "https://maps.google.com/?q=Ulaanbaatar,+Mongolia",
  },
];

// Interests
export const interests = [
  "Learning new technologies",
  "International travel",
  "Languages and cultures",
  "Photography",
  "Outdoor activities",
];


 