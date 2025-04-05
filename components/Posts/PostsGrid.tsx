"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Post, PostCard } from "./PostCard";
import { postsData, getAllTags, getSourcesWithColors } from "./postsData";

export default function PostsGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(postsData);
  const [searchTerm, setSearchTerm] = useState("");

  // Get all available tags and sources
  const allTags = getAllTags();
  const allSources = getSourcesWithColors();

  // Filter posts when any filter changes
  useEffect(() => {
    let result = postsData;

    // Filter by tag
    if (activeTag) {
      result = result.filter((post: Post) =>
        post.tags.some((tag) => tag.name === activeTag)
      );
    }

    // Filter by source
    if (activeSource) {
      result = result.filter((post: Post) => post.source === activeSource);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (post: Post) =>
          post.title.toLowerCase().includes(term) ||
          post.description.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.name.toLowerCase().includes(term))
      );
    }

    setFilteredPosts(result);
  }, [activeTag, activeSource, searchTerm]);

  // Event handlers for filters
  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag === activeTag ? null : tag);
  };

  const handleSourceClick = (source: string | null) => {
    setActiveSource(source === activeSource ? null : source);
  };

  return (
    <div className="my-16">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Posts
        </h2>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full md:w-64 px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Source filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => handleSourceClick(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeSource === null
              ? "bg-teal-500 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          All
        </button>

        {allSources.map((source) => (
          <button
            key={source.name}
            onClick={() => handleSourceClick(source.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeSource === source.name
                ? "text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
            style={{
              backgroundColor:
                activeSource === source.name ? source.color : undefined,
            }}
          >
            {source.name.charAt(0).toUpperCase() + source.name.slice(1)}
          </button>
        ))}
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <h3 className="text-md font-semibold text-white mr-2 flex items-center">
          Tags:
        </h3>

        {allTags.slice(0, 15).map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              activeTag === tag
                ? "bg-teal-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            #{tag}
          </button>
        ))}

        {allTags.length > 15 && (
          <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400">
            +{allTags.length - 15} more
          </span>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-slate-400"
        >
          No posts found with the applied filters.
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
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
