import React from 'react';
import { bagImg, searchImg } from '../utils'; // Still using your icon imports
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black">
      <nav className="flex screen-max-width w-full items-center">
        {/* Logo */}
        <a href="/" className="text-4xl font-bold text-gray-600">
          Nexure
        </a>

        {/* Center Nav Links */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          <a
            href="/"
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-200"
          >
            Home
          </a>
          <Link to={'/All-Products'}>
          <p
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-200"
          >
            Store
          </p>
          
          
          </Link>
          <a
            href="/about"
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-200"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

