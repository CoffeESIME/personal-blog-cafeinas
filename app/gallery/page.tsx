'use client'
import InstagramEmbed from "@/components/utils/InstagramEmbed";

const Gallery: React.FC = () => {
    const embedCode = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C8enLU5R5O0/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> ... </div></blockquote>`;

    return (
        <div>
            <h1>Publicación de Instagram</h1>
            <InstagramEmbed embedCode={embedCode} />
        </div>
    );
};

export default Gallery;
