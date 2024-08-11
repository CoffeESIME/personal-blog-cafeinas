import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface LinkCardProps {
  title: string;
  summary: string;
  imageUrl: string | StaticImageData;
  articleUrl: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, summary, imageUrl, articleUrl }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image 
        src={imageUrl} 
        alt={`Imagen de ${title}`} 
        className="w-full h-48 object-cover" 
        layout="responsive" 
        width={700} 
        height={300} 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          Read
        </a>
      </div>
    </div>
  );
};

export default LinkCard;
