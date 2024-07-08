import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { navLinks } from '../constants/content';


const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-between mx-auto px-4 py-4">
        <div className="flex items-center p-3">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="logo" className="w-12 h-12" />
            <span className="font-extrabold text-2xl text-yellow-500">Golds Gym</span>
          </Link>
        </div>

        <div className="flex items-center justify-between ml-8 px-6 space-x-12 pr-20 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-800 font-semibold px-8 ${
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
