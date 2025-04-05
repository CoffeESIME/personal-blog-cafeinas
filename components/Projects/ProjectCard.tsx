"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  category: string[];
}

export function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="relative bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgError ? "/images/project-placeholder.svg" : project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          style={{ objectFit: "cover" }}
          onError={() => setImgError(true)}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
      </div>

      <div className="flex-1 p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech.name}
              className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300"
              style={{
                borderLeft: `3px solid ${tech.color}`,
              }}
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      <div className="flex border-t border-slate-700 divide-x divide-slate-700">
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 p-3 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          <span className="text-sm">GitHub</span>
        </motion.a>

        {(project.demoUrl || project.videoUrl) && (
          <motion.a
            href={project.demoUrl || project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-3 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-colors"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            <span className="text-sm">
              {project.demoUrl ? "Demo" : "Video"}
            </span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
