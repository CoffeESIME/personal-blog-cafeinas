import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://facebook.com" className="hover:text-gray-300 w-10">
          <FontAwesomeIcon icon={faFacebook} size="xs" />
        </a>
        <a href="https://twitter.com" className="hover:text-gray-300 w-10">
          <FontAwesomeIcon icon={faTwitter} size="xs" />
        </a>
        <a href="https://linkedin.com" className="hover:text-gray-300 w-10">
          <FontAwesomeIcon icon={faLinkedin} size="xs" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
