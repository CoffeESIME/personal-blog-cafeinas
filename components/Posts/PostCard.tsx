"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTiktok,
  faInstagram,
  faTumblr,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faCalendarAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Tag {
  name: string;
  color: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  source: string;
  sourceUrl: string;
  publishDate: string;
  tags: Tag[];
}

// Icons for each content source
const sourceIcons: Record<string, IconProp> = {
  youtube: faYoutube as IconProp,
  tiktok: faTiktok as IconProp,
  instagram: faInstagram as IconProp,
  tumblr: faTumblr as IconProp,
  medium: faMedium as IconProp,
  blog: faGlobe as IconProp,
};

export function PostCard({ post }: { post: Post }) {
  const [imgError, setImgError] = useState(false);

  // Get the icon corresponding to the source
  const sourceIcon = sourceIcons[post.source] || (faGlobe as IconProp);

  // Format the publication date
  const publishDate = new Date(post.publishDate);
  const formattedDate = `${publishDate.getDate().toString().padStart(2, "0")} ${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][publishDate.getMonth()]
  } ${publishDate.getFullYear()}`;

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
      {/* Source indicator badge */}
      <div
        className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
        style={{
          backgroundColor: getSourceColor(post.source),
          color: "#ffffff",
        }}
      >
        <FontAwesomeIcon icon={sourceIcon} className="text-white" />
        <span>
          {post.source.charAt(0).toUpperCase() + post.source.slice(1)}
        </span>
      </div>

      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgError ? "/images/post-placeholder.svg" : post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectFit: "cover" }}
          onError={() => setImgError(true)}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
      </div>

      {/* Post content */}
      <div className="flex-1 p-5">
        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{post.description}</p>

        {/* Publication date */}
        <div className="flex items-center text-slate-400 text-xs mb-4">
          <FontAwesomeIcon icon={faCalendarAlt as IconProp} className="mr-1" />
          <span>{formattedDate}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300"
              style={{
                backgroundColor: `${tag.color}20`, // Color with 20% opacity
                color: tag.color,
                border: `1px solid ${tag.color}`,
              }}
            >
              #{tag.name}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Link to original source */}
      <div className="border-t border-slate-700">
        <motion.a
          href={post.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-3 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt as IconProp}
            className="mr-2"
          />
          <span className="text-sm">View original</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

// Function to get source color
function getSourceColor(source: string): string {
  const colors: Record<string, string> = {
    blog: "#60A5FA",
    tiktok: "#FF0050",
    instagram: "#E1306C",
    youtube: "#FF0000",
    tumblr: "#36465D",
    medium: "#000000",
  };

  return colors[source] || "#60A5FA";
}
