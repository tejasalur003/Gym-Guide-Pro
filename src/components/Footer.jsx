import React from 'react';
import { sections } from '../constants/content';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterSection = ({ title, links }) => (
  <div>
    <h5 className="text-lg font-semibold mb-4">{title}</h5>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a href="/" className="text-gray-400 hover:text-white">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center  md:flex-row md:justify-around mb-8">
          {sections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Gym Guide Pro</h1>
          <p className="mb-4">© 2024 Gym-Guide-Pro. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="/" className="text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="/" className="text-white">
              <FaTwitter size={24} />
            </a>
            <a href="/" className="text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
