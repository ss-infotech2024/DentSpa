import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about" },
    { name: "TREATMENTS", path: "/treatments" },
    { name: "CONTACT", path: "/contact" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "COURSES", path: "/courses" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 fixed top-0 left-0 z-50 transition-shadow duration-300",
        isScrolled ? "bg-black shadow-md" : "bg-black",
        className
      )}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Nav */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[#C8A97E] text-sm lg:text-base font-medium tracking-wide hover:text-[#D9C2A6] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Dr. Debashree Chandak Logo"
            className="h-10 sm:h-12 lg:h-14 object-contain"
          />
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {navItems.slice(3).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[#C8A97E] text-sm lg:text-base font-medium tracking-wide hover:text-[#D9C2A6] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 object-contain" />
        </div>
        {/* Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E] rounded"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-black p-3 rounded-lg max-w-7xl mx-auto overflow-x-auto scrollbar-hidden">
          <div className="flex flex-row space-x-4 whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#C8A97E] text-xs font-medium tracking-wide hover:text-[#D9C2A6] transition-colors duration-200 py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <style>
        {`.scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }`}
      </style>
    </nav>
  );
}