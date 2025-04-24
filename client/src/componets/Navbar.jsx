import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { bagImg, searchImg } from '../utils';

const Navbar = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black">
      <nav className="flex screen-max-width w-full items-center">
        {/* Logo with animation */}
        <a
          href="/"
          ref={logoRef}
          className="text-4xl font-bold text-gray-200"
        >
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
          <a
            href="/store"
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-200"
          >
            Store
          </a>
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


