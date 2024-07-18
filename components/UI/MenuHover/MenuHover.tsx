import React from 'react';
import './MenuHover.css';

interface IconButtonProps {
  iconPath: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconPath }) => (
  <button className="button">
    <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d={iconPath}></path>
    </svg>
  </button>
);

const MenuHover: React.FC = () => (
  <div className="button-container">
    <IconButton iconPath="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    <IconButton iconPath="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
    <IconButton iconPath="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </div>
);

export default MenuHover;
