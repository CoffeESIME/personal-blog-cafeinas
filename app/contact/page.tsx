import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-blue-800 mb-4">Contact Me</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
            </div>
            <button type="submit" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">Send</button>
          </form>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-800">Other Ways to Reach Me</h2>
          <p className="mt-2 text-gray-700">
            Email: heromfabian@gmail.com<br />
          </p>
          <p className="mt-4 text-gray-700">
            Follow me on my social media channels:
          </p>
          {/* Assume social media icons are available */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
