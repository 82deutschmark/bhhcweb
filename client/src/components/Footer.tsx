
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Big Happy Holding Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/privacy-policy.html" className="text-sm hover:text-blue-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie-policy.html" className="text-sm hover:text-blue-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
