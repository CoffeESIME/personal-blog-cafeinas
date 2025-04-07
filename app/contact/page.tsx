import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-6">Contact</h1>
        <p className="text-xl mb-16">
          I&apos;m looking forward to connecting with you! Choose the option you
          prefer to get in touch.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Email Card */}
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center">
            <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p className="text-gray-400">heromfabian@gmail.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center">
            <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-gray-400">México, CDMX</p>
          </div>
        </div>

        {/* Social Media Section */}
        <h2 className="text-4xl font-bold mb-6">Social Media</h2>
        <p className="text-xl mb-12">Connect with me on my social networks</p>

        <div className="flex justify-center space-x-12 mb-16">
          <a href="https://github.com/CoffeESIME" className="block">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-2">
              <i className="fab fa-github text-2xl"></i>
            </div>
            <p className="mt-2">GitHub</p>
          </a>

          <a
            href="https://www.linkedin.com/in/fabian-romero-hern%C3%A1ndez/"
            className="block"
          >
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-2">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </div>
            <p className="mt-2">LinkedIn</p>
          </a>
        </div>

        <p className="text-lg mb-8">
          Prefer a more direct contact? Send me an email or give me a call.
        </p>

        <a
          href="mailto:heromfabian@gmail.com"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block"
        >
          Send Email Now
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
