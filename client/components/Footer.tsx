import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div
      className="relative bg-background text-white py-10"
      style={{
        backgroundImage: `url('https://monikvasant.co.uk/wp-content/themes/monikvasant/images/footer-bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <FaInstagram size={32} className="text-pink-500 mb-2" />
        <p className="text-sm tracking-wider mb-4">@DR DEBASHREE CHANDAK</p>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-widest border-t border-white pt-2 mb-6"
        >
          View on Instagram
        </a>

        <div className="flex flex-wrap justify-center space-x-6 uppercase text-sm font-medium mb-6">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/treatments">Treatments</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact Us</a>
        </div>

        <p className="text-xs text-gray-400 mb-4">
          Copyright © 2025 DR DEBASHREE CHANDAK. Site last updated: 11 April 2024. All rights reserved. Made by
          Digimax Dental Marketing.
        </p>

        <div className="flex flex-wrap justify-center space-x-4 text-xs text-gray-400">
          <a href="#">Privacy Policy</a>
          <a href="#">Complaints Procedure</a>
          <a href="#">Cookie Settings</a>
        </div>

         {/* Center Logo */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Dr. Debashree Chandak Logo"
            className="h-24 md:h-28 object-contain" // Increased height
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
