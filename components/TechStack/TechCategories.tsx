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
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#000000" },
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#06B6D4" },
      { name: "HTML/CSS", icon: "/icons/html5.svg", color: "#E34F26" },
      { name: "Material-UI", icon: "/icons/materialui.svg", color: "#0081CB" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Technologies for building server logic, processing data, and connecting with databases, APIs, and external services.",
    technologies: [
      { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
      { name: "Express", icon: "/icons/express.svg", color: "#000000" },
      { name: "NestJS", icon: "/icons/nestjs.svg", color: "#E0234E" },
      { name: "Django", icon: "/icons/django.svg", color: "#092E20" },
      { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
      { name: "Java", icon: "/icons/java.svg", color: "#007396" },
      { name: "GraphQL", icon: "/icons/graphql.svg", color: "#E10098" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Systems for efficiently storing, organizing, and retrieving data in applications and systems.",
    technologies: [
      { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#336791" },
      { name: "MySQL", icon: "/icons/mysql.svg", color: "#4479A1" },
      { name: "SQL", icon: "/icons/sql.svg", color: "#CC2927" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description:
      "Tools and practices for automation, continuous integration, deployment, and infrastructure management.",
    technologies: [
      { name: "AWS", icon: "/icons/aws.svg", color: "#FF9900" },
      { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
      {
        name: "GitHub Actions",
        icon: "/icons/githubactions.svg",
        color: "#2088FF",
      },
      { name: "Terraform", icon: "/icons/terraform.svg", color: "#7B42BC" },
      { name: "Linux", icon: "/icons/linux.svg", color: "#FCC624" },
      { name: "Apache", icon: "/icons/apache.svg", color: "#D22128" },
      { name: "Nginx", icon: "/icons/nginx.svg", color: "#009639" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Embedded Systems",
    description:
      "Technologies for developing connected devices, automations, and Internet of Things solutions.",
    technologies: [
      { name: "Node-RED", icon: "/icons/nodered.svg", color: "#8F0000" },
      { name: "MQTT", icon: "/icons/mqtt.svg", color: "#660066" },
      { name: "Arduino", icon: "/icons/arduino.svg", color: "#00979D" },
      {
        name: "Raspberry Pi",
        icon: "/icons/raspberrypi.svg",
        color: "#A22846",
      },
      { name: "PLC", icon: "/icons/plc.svg", color: "#FF5722" },
      {
        name: "Siemens TIA Portal",
        icon: "/icons/siemens.svg",
        color: "#009999",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Methodologies",
    description:
      "Tools for development, testing, project management, and code quality improvement.",
    technologies: [
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "Jira", icon: "/icons/jira.svg", color: "#0052CC" },
      { name: "SonarQube", icon: "/icons/sonarqube.svg", color: "#4E9BCD" },
      { name: "Swagger", icon: "/icons/swagger.svg", color: "#85EA2D" },
      { name: "Checkmarx", icon: "/icons/checkmarx.svg", color: "#D9232E" },
      { name: "MATLAB", icon: "/icons/matlab.svg", color: "#0076A8" },
      { name: "SolidWorks", icon: "/icons/solidworks.svg", color: "#DS2226" },
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
