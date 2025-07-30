import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about" },
    { name: "TREATMENTS", path: "/treatments" },
    { name: "PORTFOLIO", path: "/portfolio", hasDropdown: true },
    { name: "COURSES", path: "/courses", hasDropdown: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn("w-full px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6", className)}>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between">
        {/* Left Nav */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gold text-xs md:text-sm font-medium tracking-wide hover:text-gold-light transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center">
          <div className="text-gold text-3xl md:text-4xl font-thin mb-1">DC</div>
          <div className="text-gold text-[10px] md:text-xs tracking-[0.2em] font-light">
            DR DEBASHREE CHANDAK
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {navItems.slice(3).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gold text-xs md:text-sm font-medium tracking-wide hover:text-gold-light transition flex items-center"
            >
              {item.name}
              {item.hasDropdown && (
                <svg
                  className="ml-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M6 8L2 4h8L6 8z" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Top Row: Logo + Hamburger */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-start">
            <div className="text-gold text-2xl font-thin mb-1">DC</div>
            <div className="text-gold text-[10px] tracking-[0.2em] font-light">
              DR DEBASHREE CHANDAK
            </div>
          </div>
          <button onClick={toggleMobileMenu} className="text-gold focus:outline-none">
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <div className="grid grid-cols-2 gap-3 transition-all duration-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gold text-xs font-medium tracking-wide hover:text-gold-light transition-colors duration-200 text-center py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
