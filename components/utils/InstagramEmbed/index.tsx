// components/InstagramEmbed.tsx
import React, { useEffect } from 'react';

interface InstagramEmbedProps {
    embedCode: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ embedCode }) => {
    useEffect(() => {
        // Carga el script de Instagram si aún no está cargado
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                window.instgrm.Embeds.process();
            };
        } else {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    );
};

export default InstagramEmbed;
