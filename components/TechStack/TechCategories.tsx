"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TechItem } from "@/components/TechStack/TechItem";

// Technology categories definition and data
// Technology categories definition and data
const techCategories = [
  {
    id: "languages",
    title: "Core Languages",
    description:
      "The fundamental programming languages used for scripting, application logic, and systems programming.",
    technologies: [
      { name: "TypeScript", icon: "/icons/TypeScript.svg", color: "#3178C6" },
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "Python", icon: "/icons/Python.svg", color: "#3776AB" },
      { name: "Java", icon: "/icons/Java.svg", color: "#ED8B00" }, // Agregado por tu CV
      { name: "C / Embedded C", icon: "/icons/C.svg", color: "#A8B9CC" },
      { name: "SQL", icon: "/icons/SQL.svg", color: "#4479A1" },
      { name: "Bash", icon: "/icons/Bash.svg", color: "#4EAA25" },
      { name: "MATLAB", icon: "/icons/matlab.svg", color: "#0076A8" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Creative Web",
    description:
      "Libraries and frameworks for building responsive UIs, 3D visualizations, and interactive maps.",
    technologies: [
      { name: "React", icon: "/icons/React.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/Next.js.svg", color: "#000000" },
      { name: "React Native", icon: "/icons/React.svg", color: "#61DAFB" }, // Agregado por tu CV
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
      { name: "Three.js", icon: "/icons/Three.js.svg", color: "#000000" }, // Del proyecto FlyBy
      { name: "Mapbox GL", icon: "/icons/Mapbox.svg", color: "#4264FB" }, // Del proyecto FlyBy
      { name: "Zustand", icon: "/icons/Zustand.svg", color: "#443E38" }, // Del proyecto SCADA
      { name: "D3.js", icon: "/icons/D3.svg", color: "#F9A03C" }, // Del proyecto SCADA
      { name: "Astro", icon: "/icons/Astro.svg", color: "#FF5D01" },
    ],
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description:
      "Server-side architectures, API design (REST/GraphQL), and real-time communication.",
    technologies: [
      { name: "Node.js", icon: "/icons/Node.js.svg", color: "#339933" },
      { name: "NestJS", icon: "/icons/Nest.js.svg", color: "#E0234E" },
      { name: "Django", icon: "/icons/Django.svg", color: "#092E20" },
      { name: "Express", icon: "/icons/Express.svg", color: "#000000" },
      { name: "GraphQL", icon: "/icons/graph-ql.svg", color: "#E10098" },
      { name: "Socket.io", icon: "/icons/Socket.io.svg", color: "#010101" },
      { name: "MQTT Broker", icon: "/icons/Mqtt.svg", color: "#660066" }, // Mosquitto mencionado en SCADA
      { name: "PHP", icon: "/icons/PHP.svg", color: "#777BB4" },
    ],
  },
  {
    id: "iot",
    title: "Industrial IoT & Embedded",
    description:
      "Integration of hardware, sensors, and industrial protocols for automation and telemetry.",
    technologies: [
      { name: "Node-RED", icon: "/icons/node-red.svg", color: "#8F0000" },
      { name: "Arduino", icon: "/icons/Arduino.svg", color: "#00979D" },
      { name: "Raspberry Pi", icon: "/icons/RaspberryPi.svg", color: "#A22846" },
      { name: "PLC (Siemens)", icon: "/icons/siemens.svg", color: "#009999" },
      { name: "Modbus TCP/RTU", icon: "/icons/Modbus.svg", color: "#E31E24" }, // Clave en tu CV
      { name: "SCADA Systems", icon: "/icons/scada.svg", color: "#FF5722" },
      { name: "ESP32/8266", icon: "/icons/Espressif.svg", color: "#E7352C" },
      { name: "TIA Portal", icon: "/icons/siemens.svg", color: "#009999" }, // Herramienta clave mencionada
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Storage",
    description:
      "Solutions for relational, document-based, graph, and time-series data management.",
    technologies: [
      { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg", color: "#336791" },
      { name: "MongoDB", icon: "/icons/MongoDB.svg", color: "#47A248" },
      { name: "Neo4j", icon: "/icons/Neo4j.svg", color: "#018BFF" },
      { name: "MySQL", icon: "/icons/MySQL.svg", color: "#4479A1" },
      { name: "Redis", icon: "/icons/Redis.svg", color: "#DC382D" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud Infrastructure",
    description:
      "Tools for CI/CD pipelines, containerization, and cloud resource management.",
    technologies: [
      { name: "AWS", icon: "/icons/AWS.svg", color: "#FF9900" },
      { name: "Terraform", icon: "/icons/HashiCorpTerraform.svg", color: "#7B42BC" },
      { name: "Docker", icon: "/icons/Docker.svg", color: "#2496ED" },
      { name: "GitHub Actions", icon: "/icons/GitHubActions.svg", color: "#2088FF" },
      { name: "Linux / Ubuntu", icon: "/icons/Linux.svg", color: "#FCC624" },
      { name: "NGINX", icon: "/icons/NGINX.svg", color: "#009639" },
      { name: "Vite", icon: "/icons/Vite.svg", color: "#646CFF" }, // Build tool moderno
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Integration of LLMs and frameworks for intelligent data processing.",
    technologies: [
      { name: "DeepSeek", icon: "/icons/deepseek.svg", color: "#3D7CF9" },
      { name: "Ollama", icon: "/icons/ollama.svg", color: "#FFFFFF" },
      { name: "LangChain", icon: "/icons/LangChain.svg", color: "#1C3C3C" }, // Asumido por uso de LLMs
      { name: "LLaVA", icon: "/icons/llava.svg", color: "#10A37F" },
      { name: "Python ML Stack", icon: "/icons/Python.svg", color: "#3776AB" },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Design",
    description:
      "Tools for UI design, 3D modeling, and mechanical engineering (CAD).",
    technologies: [
      { name: "Figma", icon: "/icons/Figma.svg", color: "#F24E1E" },
      { name: "Blender", icon: "/icons/Blender.svg", color: "#F5792A" },
      { name: "SolidWorks", icon: "/icons/solidworks.svg", color: "#D82526" },
      { name: "Fusion 360", icon: "/icons/Fusion360.svg", color: "#0696D7" }, // De tus certificados
      { name: "Postman", icon: "/icons/Postman.svg", color: "#FF6C37" },
      { name: "SonarQube", icon: "/icons/SonarQube.svg", color: "#4E9BCD" },
    ],
  },
];

// Get all unique category IDs for filtering
const allCategories = techCategories.map((category) => category.id);

export default function TechCategories() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTechnologies, setFilteredTechnologies] = useState<any[]>([]);

  // Filter technologies when activeCategory or searchTerm changes
  useEffect(() => {
    // Find the active category
    const category = techCategories.find((cat) => cat.id === activeCategory);

    if (!category) return;

    let result = [...category.technologies];

    // Filter by search term if it exists
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((tech) => tech.name.toLowerCase().includes(term));
    }

    setFilteredTechnologies(result);
  }, [activeCategory, searchTerm]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="my-16">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          My Tech Stack
        </h2>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search technologies..."
            className="w-full md:w-64 px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {techCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
              ? "bg-teal-500 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {techCategories.map((category) => (
        <div
          key={category.id}
          className={`${activeCategory === category.id ? "block" : "hidden"}`}
        >
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              {category.title}
            </h3>
            <p className="text-slate-400 mb-6">{category.description}</p>

            {filteredTechnologies.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-slate-400"
              >
                No technologies found matching your search.
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {filteredTechnologies.map((tech) => (
                  <TechItem
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
