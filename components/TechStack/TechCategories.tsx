"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TechItem } from "@/components/TechStack/TechItem";

// Technology categories definition and data
const techCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Technologies for creating interactive and responsive user interfaces that enhance the end-user experience.",
    technologies: [
      { name: "React", icon: "/icons/React.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/Next.js.svg", color: "#000000" },
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "TypeScript", icon: "/icons/TypeScript.svg", color: "#3178C6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#06B6D4" },
      { name: "Astro", icon: "/icons/Astro.svg", color: "#FF5D01" },
      { name: "p5.js", icon: "/icons/p5JS.svg", color: "#ED225D" },
      { name: "Redux", icon: "/icons/Redux.svg", color: "#764ABC" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Technologies for building server logic, processing data, and connecting with databases, APIs, and external services.",
    technologies: [
      { name: "Node.js", icon: "/icons/Node.js.svg", color: "#339933" },
      { name: "Express", icon: "/icons/default.svg", color: "#000000" },
      { name: "NestJS", icon: "/icons/Nest.js.svg", color: "#E0234E" },
      { name: "Django", icon: "/icons/Django.svg", color: "#092E20" },
      { name: "Django REST", icon: "/icons/DjangoREST.svg", color: "#A30000" },
      { name: "Python", icon: "/icons/Python.svg", color: "#3776AB" },
      { name: "GraphQL", icon: "/icons/graph-ql.svg", color: "#E10098" },
      { name: "Socket.io", icon: "/icons/Socket.io.svg", color: "#010101" },
      { name: "PHP", icon: "/icons/PHP.svg", color: "#777BB4" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Systems for efficiently storing, organizing, and retrieving data in applications and systems.",
    technologies: [
      { name: "MongoDB", icon: "/icons/MongoDB.svg", color: "#47A248" },
      { name: "Neo4j", icon: "/icons/Neo4j.svg", color: "#018BFF" },
      { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg", color: "#336791" },
      { name: "MySQL", icon: "/icons/MySQL.svg", color: "#4479A1" },
      {
        name: "Graph Theory",
        icon: "/icons/graph-theory.svg",
        color: "#FF6D6A",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Technologies and frameworks for building intelligent systems, implementing machine learning models, and developing AI applications.",
    technologies: [
      { name: "DeepSeek", icon: "/icons/deepseek.svg", color: "#3D7CF9" },
      { name: "Ollama", icon: "/icons/ollama.svg", color: "#FFFFFF" },
      { name: "LLaVA", icon: "/icons/llava.svg", color: "#10A37F" },
      { name: "Hunyuan", icon: "/icons/hunyuan.svg", color: "#0084FF" },
      { name: "LLM", icon: "/icons/llm.svg", color: "#8B5CF6" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description:
      "Tools and practices for automation, continuous integration, deployment, and infrastructure management.",
    technologies: [
      { name: "AWS", icon: "/icons/AWS.svg", color: "#FF9900" },
      { name: "Docker", icon: "/icons/default.svg", color: "#2496ED" },
      {
        name: "GitHub Actions",
        icon: "/icons/GitHubActions.svg",
        color: "#2088FF",
      },
      {
        name: "Terraform",
        icon: "/icons/HashiCorpTerraform.svg",
        color: "#7B42BC",
      },
      { name: "Linux", icon: "/icons/Linux.svg", color: "#FCC624" },
      { name: "Ubuntu", icon: "/icons/Ubuntu.svg", color: "#E95420" },
      { name: "NGINX", icon: "/icons/NGINX.svg", color: "#009639" },
      { name: "ESLint", icon: "/icons/ESLint.svg", color: "#4B32C3" },
      { name: "NPM", icon: "/icons/NPM.svg", color: "#CB3837" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Embedded Systems",
    description:
      "Technologies for developing connected devices, automations, and Internet of Things solutions.",
    technologies: [
      { name: "Node-RED", icon: "/icons/node-red.svg", color: "#8F0000" },
      { name: "MQTT", icon: "/icons/Mqtt.svg", color: "#660066" },
      { name: "Arduino", icon: "/icons/Arduino.svg", color: "#00979D" },
      {
        name: "Raspberry Pi",
        icon: "/icons/RaspberryPi.svg",
        color: "#A22846",
      },
      { name: "Siemens", icon: "/icons/siemens.svg", color: "#009999" },
      { name: "SCADA", icon: "/icons/scada.svg", color: "#FF5722" },
      { name: "Drone", icon: "/icons/drone.svg", color: "#00AEEF" },
      { name: "Embedded C", icon: "/icons/EmbeddedC.svg", color: "#A8B9CC" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Methodologies",
    description:
      "Tools for development, testing, project management, and code quality improvement.",
    technologies: [
      { name: "Git", icon: "/icons/Git.svg", color: "#F05032" },
      { name: "GitHub", icon: "/icons/GitHub.svg", color: "#181717" },
      { name: "BitBucket", icon: "/icons/BitBucket.svg", color: "#0052CC" },
      { name: "Jira", icon: "/icons/Jira.svg", color: "#0052CC" },
      { name: "Confluence", icon: "/icons/Confluence.svg", color: "#172B4D" },
      { name: "SonarQube", icon: "/icons/SonarQube.svg", color: "#4E9BCD" },
      { name: "Postman", icon: "/icons/Postman.svg", color: "#FF6C37" },
      { name: "Figma", icon: "/icons/Figma.svg", color: "#F24E1E" },
      { name: "Blender", icon: "/icons/Blender.svg", color: "#F5792A" },
      { name: "GIMP", icon: "/icons/GIMP.svg", color: "#5C5543" },
      { name: "PuTTY", icon: "/icons/PuTTY.svg", color: "#0000CE" },
      { name: "FileZilla", icon: "/icons/FileZilla.svg", color: "#BF0000" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages & Shells",
    description:
      "Core programming languages and command-line interfaces used across projects.",
    technologies: [
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "TypeScript", icon: "/icons/TypeScript.svg", color: "#3178C6" },
      { name: "Python", icon: "/icons/Python.svg", color: "#3776AB" },
      { name: "Bash", icon: "/icons/Bash.svg", color: "#4EAA25" },
      { name: "PowerShell", icon: "/icons/Powershell.svg", color: "#5391FE" },
      { name: "MATLAB", icon: "/icons/matlab.svg", color: "#0076A8" },
    ],
  },
  {
    id: "design",
    title: "Design & 3D Modeling",
    description:
      "Tools for creating visual designs, 3D models, and technical drawings.",
    technologies: [
      { name: "Figma", icon: "/icons/Figma.svg", color: "#F24E1E" },
      { name: "Blender", icon: "/icons/Blender.svg", color: "#F5792A" },
      { name: "GIMP", icon: "/icons/GIMP.svg", color: "#5C5543" },
      { name: "SolidWorks", icon: "/icons/solidworks.svg", color: "#D82526" },
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id
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
