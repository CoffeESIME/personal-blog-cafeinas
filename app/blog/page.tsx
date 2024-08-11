import React from 'react';
import LinkCard from '../../components/LinkedCard';
import PoeticToast from '../../public/blog/a-poetic-toast.webp';
const BlogPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Mi Blog</h1>
            <LinkCard
                title="A Poetic Toast"
                summary="In this post, we immerse ourselves in literature, poetry, and wine. Dive deep into the works of a poet who has forever marked history."
                imageUrl={PoeticToast}
                articleUrl="https://medium.com/p/59406d3b51e5"
            />
        </div>
    );
};

export default BlogPage;
