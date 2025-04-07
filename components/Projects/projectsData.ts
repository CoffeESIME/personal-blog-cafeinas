import { Project, Technology } from "./ProjectCard";

const techColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#000000",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Tailwind: "#06B6D4",
  NestJS: "#E0234E",
  MongoDB: "#47A248",
  PostgreSQL: "#336791",
  Neo4j: "#4581C3",
  Docker: "#2496ED",
  Blender: "#F5792A",
  Python: "#3776AB",
  RaspberryPi: "#A22846",
  SQL: "#CC2927",
  Terraform: "#7B42BC",
  AWS: "#FF9900",
};

const createTech = (name: string): Technology => ({
  name,
  icon: `/icons/${name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s/g, "")}.svg`,
  color: techColors[name] || "#999999",
});

const projectImagePath = "/images/project-placeholder.svg";

export const projectsData: Project[] = [
  {
    id: "scada-telemetry",
    title: "SCADA/Telemetry",
    description:
      "SCADA project for real-time monitoring and control aimed at degree certification.",
    image: projectImagePath,
    technologies: [
      createTech("Next.js"),
      createTech("Typescript"),
      createTech("RaspberryPi"),
      createTech("arduino"),
      createTech("MQTT"),
      createTech("Modbus"),
      createTech("Embedded C"),
    ],
    category: ["iot", "backend", "frontend"],
    githubUrl: "https://github.com/CoffeESIME/react-scada-hmi",
  },

  {
    id: "hiking-backend",
    title: "Hiking Routes Backend",
    description:
      "NestJS API for uploading, storing, and processing GPX hiking files.",
    image: projectImagePath,
    technologies: [createTech("NestJS"), createTech("TypeScript")],
    category: ["backend"],
    githubUrl: "https://github.com/CoffeESIME/creatormaps",
  },
  {
    id: "routes-frontend",
    title: "Routes Visualization Frontend",
    description:
      "Next.js application with TypeScript for interactive map visualization of routes.",
    image: projectImagePath,
    technologies: [
      createTech("Next.js"),
      createTech("TypeScript"),
      createTech("Tailwind"),
    ],
    category: ["frontend"],
    githubUrl: "https://github.com/CoffeESIME/personalized-map",
  },
  {
    id: "knowledge-graph-app - Categorizer",
    title: "Knowledge Graph Visualization",
    description: "Interactive app for exploring knowledge graphs using Neo4j.",
    image: projectImagePath,
    technologies: [
      createTech("Neo4j"),
      createTech("React"),
      createTech("TypeScript"),
    ],
    category: ["frontend", "database"],
    githubUrl: "https://github.com/CoffeESIME/categorizer",
  },
  {
    id: "quotes-app-terraform",
    title: "Quotes App with Terraform",
    description:
      "Quotes application deployed and managed using Terraform and AWS, demonstrating Infrastructure as Code practices.",
    image: projectImagePath,
    technologies: [createTech("Terraform"), createTech("AWS")],
    category: ["devops"],
    githubUrl:
      "https://github.com/CoffeESIME/AWSTerraform-DevopsUpskilling-3pg",
  },
];
