import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faPhp, faIntercom, faPython, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, SizeProp, library } from '@fortawesome/fontawesome-svg-core';
import skillsData from '../../data/skills.json';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

library.add(faJsSquare, faReact, faPhp, faIntercom, faPython, faAws, faGitAlt, faDatabase);

const iconMap: { [key: string]: IconDefinition } = {
  "js-square": faJsSquare,
  "react": faReact,
  "php": faPhp,
  "database": faDatabase,
  "python": faPython,
  "aws": faAws,
  "git-alt": faGitAlt
};

interface ISkills {
  size?: string;
}

const Skills: React.FC<ISkills> = ({ size = '2x' }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {skillsData.map((skill, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md">
            <FontAwesomeIcon icon={iconMap[skill.icon]} size={size as SizeProp} />
          </div>
          <span className="mt-2">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
