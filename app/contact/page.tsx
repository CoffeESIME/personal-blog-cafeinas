import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <ContactSection></ContactSection>
    </div>
  );
};

export default ContactPage;


const ContactSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-700 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Hey there!</h1>
        <p className="mb-5">I&apos;m always up for a chat.</p>
        <p>Pop me an email at <a href="mailto:heromfabian@gmail.com" className="text-teal-300 hover:text-teal-500">heromfabian@gmail.com</a>
          or give me a shout on social media.</p>
        <div className="flex justify-center space-x-4 mt-5">
          <a href="https://linkedin.com" className="hover:text-gray-300 h-10 w-10">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com" className="hover:text-gray-300 h-10 w-10">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300 h-10 w-10">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};