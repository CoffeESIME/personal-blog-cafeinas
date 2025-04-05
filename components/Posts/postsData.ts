import { Post, Tag } from "./PostCard";

// Define colors for different sources
const sourceColors: Record<string, string> = {
  blog: "#60A5FA", // Blue
  tiktok: "#FF0050", // TikTok Red
  instagram: "#E1306C", // Instagram Pink
  youtube: "#FF0000", // YouTube Red
  tumblr: "#36465D", // Tumblr Blue
  medium: "#000000", // Medium Black
};

// Create function to generate tags with predefined colors
const createTag = (name: string): Tag => ({
  name,
  color: getRandomPastelColor(),
});

// Function to generate random pastel colors for tags
function getRandomPastelColor(): string {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
}

// Placeholder image path
const placeholderImagePath = "/images/post-placeholder.svg";

// Example data for posts
export const postsData: Post[] = [
  {
    id: "blog-post-1",
    title: "How to optimize performance in your React applications",
    description:
      "Complete guide on best practices to improve performance in React",
    image: placeholderImagePath,
    source: "blog",
    sourceUrl: "#",
    publishDate: "2023-12-15",
    tags: [
      createTag("React"),
      createTag("Performance"),
      createTag("JavaScript"),
    ],
  },
  {
    id: "tiktok-post-1",
    title: "Quick tutorial: CSS Grid in 60 seconds",
    description: "Learn the basics of CSS Grid in less than a minute",
    image: placeholderImagePath,
    source: "tiktok",
    sourceUrl: "https://tiktok.com/@username/video/123456789",
    publishDate: "2024-01-05",
    tags: [createTag("CSS"), createTag("Design"), createTag("FrontEnd")],
  },
  {
    id: "instagram-post-1",
    title: "Before vs after: Dashboard UI redesign",
    description:
      "Complete transformation of an outdated user interface to a modern one",
    image: placeholderImagePath,
    source: "instagram",
    sourceUrl: "https://instagram.com/p/abcdefg",
    publishDate: "2024-02-10",
    tags: [createTag("UI"), createTag("Design"), createTag("UX")],
  },
  {
    id: "youtube-post-1",
    title: "Creating a complete REST API with Node.js and Express",
    description: "Step-by-step tutorial to develop a robust and scalable API",
    image: placeholderImagePath,
    source: "youtube",
    sourceUrl: "https://youtube.com/watch?v=abcdefg",
    publishDate: "2024-03-01",
    tags: [createTag("Node.js"), createTag("API"), createTag("Backend")],
  },
  {
    id: "tumblr-post-1",
    title: "The future of programming: Web Assembly",
    description: "Analysis on how WASM is changing web development",
    image: placeholderImagePath,
    source: "tumblr",
    sourceUrl: "https://username.tumblr.com/post/123456789",
    publishDate: "2024-01-22",
    tags: [
      createTag("WebAssembly"),
      createTag("Future"),
      createTag("Technology"),
    ],
  },
  {
    id: "medium-post-1",
    title: "Microservices vs Monoliths: Which one to choose?",
    description: "Detailed comparison of modern software architectures",
    image: placeholderImagePath,
    source: "medium",
    sourceUrl: "https://medium.com/@username/microservices-vs-monoliths",
    publishDate: "2024-02-18",
    tags: [
      createTag("Architecture"),
      createTag("Microservices"),
      createTag("DevOps"),
    ],
  },
  {
    id: "blog-post-2",
    title: "TypeScript: Advanced types you should know",
    description: "Exploring advanced features of TypeScript's type system",
    image: placeholderImagePath,
    source: "blog",
    sourceUrl: "#",
    publishDate: "2024-03-10",
    tags: [
      createTag("TypeScript"),
      createTag("Programming"),
      createTag("JavaScript"),
    ],
  },
  {
    id: "instagram-post-2",
    title: "Minimalist setup for programmers",
    description: "My desk configuration for maximum productivity",
    image: placeholderImagePath,
    source: "instagram",
    sourceUrl: "https://instagram.com/p/hijklmn",
    publishDate: "2024-03-15",
    tags: [
      createTag("Setup"),
      createTag("Productivity"),
      createTag("Workspace"),
    ],
  },
];

// Get all unique tags from posts
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();

  postsData.forEach((post) => {
    post.tags.forEach((tag: Tag) => {
      tagsSet.add(tag.name);
    });
  });

  return Array.from(tagsSet).sort();
};

// Get unique sources with their colors
export const getSourcesWithColors = (): { name: string; color: string }[] => {
  return Object.entries(sourceColors).map(([name, color]) => ({
    name,
    color,
  }));
};
