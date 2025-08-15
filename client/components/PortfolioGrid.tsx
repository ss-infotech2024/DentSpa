import React, { useState } from "react";
import { filters, portfolioData } from "./data/data"; // Ensure path is correct

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const images = portfolioData[activeFilter] || [];

  return (
    <>
      {/* Hero Background Section */}
      <div
        className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-center bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/bg.png')", // replace with your image path
        }}
      >
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <h1 className="relative text-white text-lg sm:text-2xl md:text-4xl font-semibold z-10">
          {activeFilter.replace("®", "")}
        </h1>
      </div>

      <section className="bg-black py-10 px-4 md:px-8 max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <div className="text-center mb-6">
          <span className="text-[#d1b571] text-sm font-light">
            HOME / {activeFilter.replace("®", "")}
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 px-2 sm:px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`border border-[#d1b571] px-3 py-1 text-xs sm:text-sm text-[#d1b571] tracking-wide
                transition-colors duration-200 hover:text-black hover:bg-[#d1b571]
                ${activeFilter === filter ? "bg-[#d1b571] text-black" : "bg-transparent"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative group w-full aspect-square overflow-hidden border border-[#d1b571] shadow-md cursor-pointer"
            >
              <img
                src={src}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8A97E66] via-transparent to-[#C8A97E33] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioGrid;
