import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faPhp, faIntercom, faPython, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import skillsData from '../../data/skills.json';

library.add(faJsSquare, faReact, faPhp, faIntercom, faPython, faAws, faGitAlt);

const iconMap = {
    "js-square": faJsSquare,
    "react": faReact,
    "php": faPhp,
    "database": faIntercom,
    "python": faPython,
    "aws": faAws,
    "git-alt": faGitAlt
  };
  
  const Skills: React.FC = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <FontAwesomeIcon icon={iconMap[skill.icon]} size="6x" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;
  