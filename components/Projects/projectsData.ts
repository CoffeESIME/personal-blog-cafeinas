import { Project, Technology } from "./ProjectCard";

// Colors for technologies
const techColors: Record<string, string> = {
  // Frontend
  React: "#61DAFB",
  "Next.js": "#000000",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Tailwind: "#06B6D4",
  "HTML/CSS": "#E34F26",
  "Material-UI": "#0081CB",

  // Backend
  "Node.js": "#339933",
  Express: "#000000",
  NestJS: "#E0234E",
  Django: "#092E20",
  Python: "#3776AB",
  Java: "#007396",
  GraphQL: "#E10098",

  // Databases
  MongoDB: "#47A248",
  PostgreSQL: "#336791",
  MySQL: "#4479A1",
  SQL: "#CC2927",

  // DevOps
  AWS: "#FF9900",
  Docker: "#2496ED",
  "GitHub Actions": "#2088FF",
  Terraform: "#7B42BC",
  Linux: "#FCC624",

  // IoT
  "Node-RED": "#8F0000",
  MQTT: "#660066",
  Arduino: "#00979D",
  "Raspberry Pi": "#A22846",

  // Other
  Git: "#F05032",
  Firebase: "#FFCA28",
  Redux: "#764ABC",
  "Vue.js": "#4FC08D",
  Angular: "#DD0031",
  Sass: "#CC6699",
  Bash: "#4EAA25",
};

// Function to create a Technology object
const createTech = (name: string): Technology => ({
  name,
  icon: `/icons/${name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s/g, "")}.svg`,
  color: techColors[name] || "#999999",
});

// Since project images may not exist, we'll use a placeholder
const projectImagePath = "/images/project-placeholder.svg";

export const projectsData: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with Next.js and Tailwind CSS, featuring animations and responsive design.",
    image: projectImagePath,
    technologies: [
      createTech("React"),
      createTech("Next.js"),
      createTech("TypeScript"),
      createTech("Tailwind"),
    ],
    githubUrl: "https://github.com/fabian-romero/portfolio",
    demoUrl: "https://fabian-romero.com",
    category: ["frontend"],
  },
  {
    id: "devlogz-blog-app",
    title: "Devlogz Blog App",
    description:
      "Mobile blog application built with React Native providing a native experience with offline capabilities.",
    image: projectImagePath,
    technologies: [
      createTech("React"),
      createTech("JavaScript"),
      createTech("Firebase"),
    ],
    githubUrl: "https://github.com/fabian-romero/devlogz-blog-app",
    videoUrl: "https://youtube.com/watch?v=devlogz-demo",
    category: ["frontend"],
  },
  {
    id: "task-management-api",
    title: "Task Management API",
    description:
      "RESTful API for task management developed with Node.js, Express, and MongoDB, featuring JWT authentication.",
    image: projectImagePath,
    technologies: [
      createTech("Node.js"),
      createTech("Express"),
      createTech("MongoDB"),
      createTech("JavaScript"),
    ],
    githubUrl: "https://github.com/fabian-romero/task-api",
    category: ["backend", "database"],
  },
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description:
      "Complete e-commerce platform with React frontend, Node.js backend, and PostgreSQL database.",
    image: projectImagePath,
    technologies: [
      createTech("React"),
      createTech("Node.js"),
      createTech("Express"),
      createTech("PostgreSQL"),
      createTech("Redux"),
      createTech("Material-UI"),
    ],
    githubUrl: "https://github.com/fabian-romero/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.fabian-romero.com",
    category: ["frontend", "backend", "database"],
  },
  {
    id: "iot-monitoring-system",
    title: "IoT Monitoring System",
    description:
      "IoT monitoring system for industrial devices using Raspberry Pi, MQTT and Node-RED for real-time visualization.",
    image: projectImagePath,
    technologies: [
      createTech("Node-RED"),
      createTech("MQTT"),
      createTech("Raspberry Pi"),
      createTech("JavaScript"),
      createTech("Node.js"),
    ],
    githubUrl: "https://github.com/fabian-romero/iot-monitoring",
    videoUrl: "https://youtube.com/watch?v=iot-monitoring-demo",
    category: ["iot", "backend"],
  },
  {
    id: "smart-home-controller",
    title: "Smart Home Controller",
    description:
      "Home automation controller with Arduino and a web interface for remote control.",
    image: projectImagePath,
    technologies: [
      createTech("Arduino"),
      createTech("HTML/CSS"),
      createTech("JavaScript"),
      createTech("MQTT"),
    ],
    githubUrl: "https://github.com/fabian-romero/smart-home",
    category: ["iot", "frontend"],
  },
  {
    id: "devops-ci-cd-pipeline",
    title: "DevOps CI/CD Pipeline",
    description:
      "Continuous integration and deployment pipeline using GitHub Actions, Docker, and AWS for web applications.",
    image: projectImagePath,
    technologies: [
      createTech("Docker"),
      createTech("GitHub Actions"),
      createTech("AWS"),
      createTech("Terraform"),
      createTech("Linux"),
    ],
    githubUrl: "https://github.com/fabian-romero/devops-pipeline",
    category: ["devops"],
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "Inventory management system with Python/Django backend and React frontend, featuring relational databases.",
    image: projectImagePath,
    technologies: [
      createTech("Python"),
      createTech("Django"),
      createTech("React"),
      createTech("PostgreSQL"),
      createTech("TypeScript"),
    ],
    githubUrl: "https://github.com/fabian-romero/inventory-system",
    demoUrl: "https://inventory-demo.fabian-romero.com",
    category: ["frontend", "backend", "database"],
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description:
      "Content management system for blogs with WYSIWYG editor, user management, and traffic analytics.",
    image: projectImagePath,
    technologies: [
      createTech("Node.js"),
      createTech("React"),
      createTech("MongoDB"),
      createTech("Express"),
      createTech("JavaScript"),
    ],
    githubUrl: "https://github.com/fabian-romero/blog-cms",
    category: ["frontend", "backend", "database"],
  },
  {
    id: "dev-toolbox",
    title: "Dev Toolbox",
    description:
      "Collection of development utilities to optimize workflow, including CLI tools and extensions.",
    image: projectImagePath,
    technologies: [
      createTech("Node.js"),
      createTech("JavaScript"),
      createTech("Python"),
    ],
    githubUrl: "https://github.com/fabian-romero/dev-toolbox",
    category: ["tools"],
  },
  {
    id: "update-script",
    title: "Update Script",
    description:
      "Script to automate system updates and maintenance tasks on Linux servers.",
    image: projectImagePath,
    technologies: [
      createTech("Python"),
      createTech("Linux"),
      createTech("Bash"),
    ],
    githubUrl: "https://github.com/fabian-romero/update-script",
    category: ["devops", "tools"],
  },
  {
    id: "music-downloader",
    title: "Music Downloader",
    description:
      "Python tool for downloading music using the yt-dlp library with a simple interface.",
    image: projectImagePath,
    technologies: [
      createTech("Python"),
      createTech("HTML/CSS"),
      createTech("JavaScript"),
    ],
    githubUrl: "https://github.com/fabian-romero/music-downloader",
    category: ["tools", "frontend"],
  },
];
