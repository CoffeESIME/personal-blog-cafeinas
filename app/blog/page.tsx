import React from "react";
import LinkCard from "../../components/LinkedCard";
import PoeticToast from "../../public/blog/a-poetic-toast.webp";
import { PostsGrid } from "@/components/Posts";
const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PostsGrid />
    </div>
  );
};

export default BlogPage;
