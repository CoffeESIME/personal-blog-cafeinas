import { Project, Technology } from "./ProjectCard";

// Colores para las tecnologías
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
  // Añadimos Bash que no estaba en la lista original
  Bash: "#4EAA25",
};

// Función para crear un objeto Technology
const createTech = (name: string): Technology => ({
  name,
  icon: `/icons/${name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s/g, "")}.svg`,
  color: techColors[name] || "#999999",
});

export const projectsData: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Sitio web de portfolio moderno construido con Next.js y Tailwind CSS, con animaciones y diseño responsivo.",
    image: "/images/portfolio.jpg",
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
      "Aplicación móvil para blog de desarrollo con React Native que proporciona una experiencia nativa con capacidades offline.",
    image: "/images/devlogz.jpg",
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
      "API RESTful para gestión de tareas desarrollada con Node.js, Express y MongoDB, con autenticación JWT.",
    image: "/images/task-api.jpg",
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
      "Plataforma de comercio electrónico completa con frontend en React, backend en Node.js y base de datos PostgreSQL.",
    image: "/images/ecommerce.jpg",
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
      "Sistema de monitoreo IoT para dispositivos industriales utilizando Raspberry Pi, MQTT y Node-RED para visualización en tiempo real.",
    image: "/images/iot-monitoring.jpg",
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
      "Controlador de domótica para automatización del hogar con Arduino y una interfaz web para control remoto.",
    image: "/images/smart-home.jpg",
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
      "Pipeline de integración y despliegue continuo utilizando GitHub Actions, Docker y AWS para aplicaciones web.",
    image: "/images/devops.jpg",
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
      "Sistema de gestión de inventario con backend en Python/Django y frontend en React, con bases de datos relacionales.",
    image: "/images/inventory.jpg",
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
      "Sistema de gestión de contenidos para blogs con editor WYSIWYG, gestión de usuarios y análisis de tráfico.",
    image: "/images/blog-cms.jpg",
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
      "Colección de utilidades de desarrollo para optimizar el flujo de trabajo, incluyendo herramientas CLI y extensiones.",
    image: "/images/dev-toolbox.jpg",
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
      "Script para automatizar actualizaciones del sistema y tareas de mantenimiento en servidores Linux.",
    image: "/images/update-script.jpg",
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
      "Herramienta de Python para descargar música utilizando la biblioteca yt-dlp con una interfaz sencilla.",
    image: "/images/music-downloader.jpg",
    technologies: [
      createTech("Python"),
      createTech("HTML/CSS"),
      createTech("JavaScript"),
    ],
    githubUrl: "https://github.com/fabian-romero/music-downloader",
    category: ["tools", "frontend"],
  },
];
