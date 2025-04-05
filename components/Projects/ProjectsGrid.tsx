"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project, ProjectCard } from "./ProjectCard";
import { projectsData } from "./projectsData";

// Obtener todas las categorías únicas de los proyectos
const allCategories = [
  "todos",
  "frontend",
  "backend",
  "database",
  "devops",
  "iot",
  "tools",
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar proyectos cuando cambia la categoría activa o el término de búsqueda
  useEffect(() => {
    let result = projectsData;

    // Filtrar por categoría
    if (activeCategory !== "todos") {
      result = result.filter((project: Project) =>
        project.category.includes(activeCategory)
      );
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (project: Project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.technologies.some((tech) =>
            tech.name.toLowerCase().includes(term)
          )
      );
    }

    setFilteredProjects(result);
  }, [activeCategory, searchTerm]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="my-16">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Mis Proyectos
        </h2>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className="w-full md:w-64 px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-teal-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {category === "todos"
              ? "Todos"
              : category === "frontend"
              ? "Frontend"
              : category === "backend"
              ? "Backend"
              : category === "database"
              ? "Bases de Datos"
              : category === "devops"
              ? "DevOps"
              : category === "iot"
              ? "IoT"
              : "Herramientas"}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-slate-400"
        >
          No se encontraron proyectos que coincidan con tu búsqueda.
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
