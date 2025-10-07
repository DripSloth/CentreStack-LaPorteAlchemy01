
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl font-bold font-serif text-white mb-2">La Porte Alchemy</p>
        <p className="mb-4">Crafting Enduring Outdoor Sanctuaries</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Houzz</a>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} La Porte Alchemy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
