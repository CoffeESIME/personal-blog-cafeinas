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

// Function to generate tags with random pastel colors
const createTag = (name: string): Tag => ({
  name,
  color: getRandomPastelColor(),
});

// Generates a random pastel color
function getRandomPastelColor(): string {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
}

// Placeholder image path
const placeholderImagePath = "/images/post-placeholder.svg";

// Updated post data according to requirements for CV
export const postsData: Post[] = [
  {
    id: "video-post-poetics-walking",
    title: "Poetics of Walking: Mountains and Trails",
    description:
      "Video exploring the poetry of walking through mountains and trails.",
    image: placeholderImagePath,
    source: "tiktok",
    sourceUrl: "https://www.tiktok.com/@drunkblic/video/7485832155671579909", // Update with real URL
    publishDate: "2024-04-01",
    tags: [createTag("Video"), createTag("Mountains"), createTag("Poetry")],
  },
  {
    id: "video-post-majestic-heights",
    title: "Majestic Heights: Mountain Video",
    description: "Visual exploration of the majesty and height of mountains.",
    image: placeholderImagePath,
    source: "tiktok",
    sourceUrl: "https://www.tiktok.com/@drunkblic/video/7412435105823739141", // Update with real URL
    publishDate: "2024-04-02",
    tags: [createTag("Video"), createTag("Mountains"), createTag("Height")],
  },
  {
    id: "video-post-the-walk",
    title: "The Path: Reflection on Walking",
    description: "A visual reflection on the experience and art of walking.",
    image: placeholderImagePath,
    source: "tiktok",
    sourceUrl: "https://www.tiktok.com/@drunkblic/video/7391241244950662405", // Update with real URL
    publishDate: "2024-04-03",
    tags: [createTag("Video"), createTag("Walking"), createTag("Reflection")],
  },
  {
    id: "video-post-measuring-mountains",
    title: "Measuring Mountains: Origins of Measurement",
    description:
      "Exploration of when and how we began measuring the height of mountains.",
    image: placeholderImagePath,
    source: "tiktok",
    sourceUrl: "https://www.tiktok.com/@drunkblic/video/7418021655647194373", // Update with real URL
    publishDate: "2024-04-04",
    tags: [createTag("Video"), createTag("History"), createTag("Mountains")],
  },
  {
    id: "medium-post-omar-khayyam",
    title: "Omar Khayyam: Verses and Reflections",
    description:
      "Poetic and philosophical analysis on the work and legacy of Omar Khayyam.",
    image: placeholderImagePath,
    source: "medium",
    sourceUrl: "https://medium.com/@heromfabian/a-poetic-toast-59406d3b51e5", // Update with real URL
    publishDate: "2024-04-05",
    tags: [createTag("Medium"), createTag("Omar Khayyam"), createTag("Poetry")],
  },
  {
    id: "tumblr-post-quotes",
    title: "Inspiring Quotes",
    description:
      "Collection of selected quotes to inspire, accessible via Tumblr with filters.",
    image: placeholderImagePath,
    source: "tumblr",
    sourceUrl: "https://drunkblic.tumblr.com/", // Update with real URL
    publishDate: "2024-04-08",
    tags: [createTag("Quotes"), createTag("Inspiration"), createTag("Sayings")],
  },
];

// Gets all unique tags from posts
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();

  postsData.forEach((post) => {
    post.tags.forEach((tag: Tag) => {
      tagsSet.add(tag.name);
    });
  });

  return Array.from(tagsSet).sort();
};

// Gets unique sources with their respective colors
export const getSourcesWithColors = (): { name: string; color: string }[] => {
  return Object.entries(sourceColors).map(([name, color]) => ({
    name,
    color,
  }));
};
