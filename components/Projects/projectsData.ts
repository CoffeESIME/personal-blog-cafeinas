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
  arduino: "#00979D",
  MQTT: "#660066",
  Modbus: "#5D7286",
  "Embedded C": "#283593",
  Vite: "#646CFF",
  "Framer Motion": "#0055FF",
  Expo: "#4630EB",
  Mapbox: "#4264FB",
  "Node.js": "#339933",
  "Three.js": "#000000",
  "Mapbox GL": "#4264FB",
  "Old React": "#61DAFB",
  Leaflet: "#199900",
  Django: "#092E20",
  Weaviate: "#FA0171",
  Ollama: "#FFFFFF",
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
    id: "flyby-hiking",
    title: "FlyBy Hiking",
    description:
      "Cinematic 3D GPX route viewer featuring real terrain generation, animated flyovers, and an integrated photo gallery.",
    image: "/images/fly-by.png",
    technologies: [
      createTech("Next.js"),
      createTech("React"),
      createTech("TypeScript"),
      createTech("Three.js"),
      createTech("Mapbox GL"),
      createTech("Tailwind"),
    ],
    category: ["frontend", "3d", "gis"],
    githubUrl: "https://github.com/CoffeESIME/mapbox-gpx-viewer",
  },
  {
    id: "categorizador-backend",
    title: "Categorizador Backend",
    description:
      "Django-based API for multimodal content management, integrating Neo4j for knowledge graphs and Weaviate for vector embeddings with local LLM support via Ollama.",
    image: "/images/rag.png",
    technologies: [
      createTech("Django"),
      createTech("Python"),
      createTech("Neo4j"),
      createTech("Weaviate"),
      createTech("Ollama"),
    ],
    category: ["backend", "database", "ai"],
    githubUrl: "https://github.com/CoffeESIME/categorizador-backend",
  },
  {
    id: "mixtlinder",
    title: "Mixtlinder",
    description:
      "Cross-platform mobile hiking app featuring Tinder-style swipe mechanics for guide discovery, interactive maps, and gamified route tracking.",
    image: "/images/mixtinder.png",
    technologies: [
      createTech("Expo"),
      createTech("React"),
      createTech("TypeScript"),
      createTech("Mapbox"),
      createTech("Node.js"),
    ],
    category: ["mobile", "frontend", "gis"],
    githubUrl: "https://github.com/CoffeESIME/mixtlinder",
  },
  {
    id: "paper-animator",
    title: "Paper Animator",
    description:
      "Web-based stop-motion animation tool that transforms static images into animated paper cutouts with custom trajectory paths and video export.",
    image: "/images/paper-animation.png",
    technologies: [
      createTech("React"),
      createTech("Vite"),
      createTech("Framer Motion"),
      createTech("Tailwind"),
      createTech("JavaScript"),
    ],
    category: ["frontend", "creative", "tools"],
    githubUrl: "https://github.com/CoffeESIME/paper-animator",
  },
  {
    id: "scada-telemetry",
    title: "SCADA/Telemetry",
    description:
      "SCADA project for real-time monitoring and control aimed at degree certification.",
    image: "/images/scada-system.jpg",
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
  {
    id: "knowledge-graph-app - Categorizer",
    title: "Knowledge Graph Visualization",
    description: "Interactive app for exploring knowledge graphs using Neo4j.",
    image: "/images/categorizer.png",
    technologies: [
      createTech("Neo4j"),
      createTech("React"),
      createTech("TypeScript"),
    ],
    category: ["frontend", "database"],
    githubUrl: "https://github.com/CoffeESIME/categorizer",
  },
  {
    id: "hiking-backend",
    title: "Hiking Routes Backend",
    description:
      "NestJS API for uploading, storing, and processing GPX hiking files.",
    image: "/images/routes-be.png",
    technologies: [createTech("NestJS"), createTech("TypeScript")],
    category: ["backend"],
    githubUrl: "https://github.com/CoffeESIME/creatormaps",
  },
  {
    id: "routes-frontend",
    title: "Routes Visualization Frontend",
    description:
      "Next.js application with TypeScript for interactive map visualization of routes.",
    image: "/images/visual-maps.jpeg",
    technologies: [
      createTech("Old React"),
      createTech("Leaflet"),
      createTech("Tailwind"),
    ],
    category: ["frontend"],
    githubUrl: "https://github.com/CoffeESIME/personalized-map",
  },
];