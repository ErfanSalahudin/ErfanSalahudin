import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-75 z-50 py-4 px-4 md:px-8 flex justify-center space-x-4 md:space-x-8 text-base md:text-lg font-serif flex-wrap">
      <a href="#hero" className="text-white hover:text-gray-400 transition duration-300">HOME</a>
      <a href="#profile" className="text-white hover:text-gray-400 transition duration-300">PROFILE</a>
      <a href="#certified" className="text-white hover:text-gray-400 transition duration-300">CERTIFIED</a>
      <a href="#project" className="text-white hover:text-gray-400 transition duration-300">PROJECT</a>
      <a href="#contact" className="text-white hover:text-gray-400 transition duration-300">CONTACT</a>
    </nav>
  );
};

export default Navbar;
