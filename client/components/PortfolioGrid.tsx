import React, { useState } from "react";
import { filters, portfolioData } from "./data/data"; // Make sure the path is correct

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const images = portfolioData[activeFilter] || [];

  return (<>  <div
        className="relative w-full h-[500px] bg-center bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/bg.png')", // replace with your image path
        }}
      >
        
      </div>
    <section className="bg-black py-10 px-4 md:px-8 mx-[300px]">
      {/* Breadcrumb */}
     
      <div className="text-center mb-6">
        <span className="text-gold text-sm font-light">
          HOME / {activeFilter.replace("®", "")}
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 p-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`border border-[#d1b571] px-3 py-1 text-xs md:text-sm text-[#d1b571] tracking-wide
              transition-colors duration-200 hover:text-black hover:bg-[#d1b571]
              ${activeFilter === filter ? "" : "bg-transparent"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
  {images.map((src, idx) => (
    <div
      key={idx}
      className="relative group w-full aspect-square overflow-hidden border-1 border-[#d1b571] shadow-md cursor-pointer bottom-1"
    >
      <img
        src={src}
        alt={`Smile ${idx + 1}`}
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
