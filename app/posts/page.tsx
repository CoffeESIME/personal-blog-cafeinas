import PostsGrid from "@/components/Posts/PostsGrid";

export const metadata = {
  title: "Posts | Personal Blog",
  description:
    "Explore my posts, articles, and content from various platforms.",
};

export default function PostsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PostsGrid />
    </main>
  );
}
