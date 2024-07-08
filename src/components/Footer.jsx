import React from 'react';
import { sections } from '../constants/content'; // Assuming you have sections defined in a separate file
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing Facebook, Twitter, Instagram icons

const FooterSection = ({ title, links }) => (
  <div>
    <h5 className="text-lg font-semibold mb-4">{title}</h5>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a href="#" className="text-gray-400 hover:text-white">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-0 px-4">
        <div className="flex justify-around mb-8">
          {sections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Golds Gym</h1>
          <p className="mb-4">© 2024 Golds Gym. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
