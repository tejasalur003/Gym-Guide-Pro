import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { navLinks } from '../constants/content';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center p-3">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="logo" className="w-12 h-12" />
            <span className="font-extrabold text-3xl text-orange-600">Gym Guide</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-800 font-semibold px-4 sm:px-8 ${
                location.pathname === link.to
                  ? 'border-b-4 border-orange-500'
                  : 'hover:text-orange-500'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
