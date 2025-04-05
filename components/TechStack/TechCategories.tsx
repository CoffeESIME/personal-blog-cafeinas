"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TechItem } from "./TechItem";

// Definición de las categorías y tecnologías
const techCategories = [
  {
    id: "frontend",
    title: "Desarrollo Frontend",
    description:
      "Tecnologías para crear interfaces de usuario interactivas y responsivas que mejoran la experiencia del usuario final.",
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
    title: "Desarrollo Backend",
    description:
      "Tecnologías para construir la lógica del servidor, procesar datos y conectar con bases de datos, APIs y servicios externos.",
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
    title: "Bases de Datos",
    description:
      "Sistemas para almacenar, organizar y recuperar datos de manera eficiente en aplicaciones y sistemas.",
    technologies: [
      { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#336791" },
      { name: "MySQL", icon: "/icons/mysql.svg", color: "#4479A1" },
      { name: "SQL", icon: "/icons/sql.svg", color: "#CC2927" },
    ],
  },
  {
    id: "devops",
    title: "DevOps e Infraestructura",
    description:
      "Herramientas y prácticas para la automatización, integración continua, despliegue y gestión de infraestructura.",
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
    title: "IoT y Sistemas Embebidos",
    description:
      "Tecnologías para desarrollar dispositivos conectados, automatizaciones y soluciones de Internet de las Cosas.",
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
    title: "Herramientas y Metodologías",
    description:
      "Herramientas para el desarrollo, pruebas, gestión de proyectos y mejora de la calidad del código.",
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

export default function TechCategories() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">
        Mi Stack Tecnológico
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.technologies.map((tech) => (
                <TechItem
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
