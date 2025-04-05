"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project, ProjectCard } from "./ProjectCard";
import { projectsData } from "@/components/Projects/projectsData";

// Get all unique categories for the projects
const allCategories = [
  "all",
  "frontend",
  "backend",
  "database",
  "devops",
  "iot",
  "tools",
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects when active category or search term changes
  useEffect(() => {
    let result = projectsData;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((project: Project) =>
        project.category.includes(activeCategory)
      );
    }

    // Filter by search term
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
          My Projects
        </h2>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search projects..."
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
            {category === "all"
              ? "All"
              : category === "frontend"
              ? "Frontend"
              : category === "backend"
              ? "Backend"
              : category === "database"
              ? "Databases"
              : category === "devops"
              ? "DevOps"
              : category === "iot"
              ? "IoT"
              : "Tools"}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-slate-400"
        >
          No projects found matching your search.
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
