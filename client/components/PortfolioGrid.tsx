import React, { useState } from "react";

const filters = [
  "ALL",
  "GUM LIFT",
  "TEETH WHITENING",
  "COMPOSITE BONDING",
  "INVISALIGN®",
  "PORCELAIN VENEERS",
  "DENTAL IMPLANTS",
  "CROWNS / BRIDGES",
];
import logo1 from "../assets/1.jpg";
import logo2 from "../assets/3.jpg";  
import logo3 from "../assets/2.jpg";
import logo4 from "../assets/5.jpg";
import logo5 from "../assets/7.jpg";
import logo6 from "../assets/11.jpg"
// replace with your real images
const images = [
 logo1,
 logo2,
 logo3,
 logo4,
 logo5,
 logo6
];

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  return (
    <section className="bg-black py-10 px-4 md:px-8">
      {/* Breadcrumb or title */}
      <div className="text-center mb-6">
        <span className="text-gold text-sm font-light">
          HOME / PORTFOLIO / {activeFilter.replace("®", "")}
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`border border-gold px-3 py-1 text-xs md:text-sm text-gold tracking-wide
              transition-colors duration-200 hover:bg-gold hover:text-black
              ${activeFilter === filter ? "bg-gold text-black" : "bg-transparent"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
   <div className="grid grid-cols-2 md:grid-cols-4 mb-8">
  {images.map((src, idx) => (
    <div key={idx} className="overflow-hidden">
      <img
        src={src}
        alt={`Smile ${idx + 1}`}
        className= "ml-10 w-[200px] h-[200px] object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>

      {/* Show more button */}
      <div className="flex justify-center">
        <button
          className="border border-gold px-6 py-2 text-xs md:text-sm text-gold tracking-wide
            hover:bg-gold hover:text-black transition-colors duration-200"
        >
          SHOW MORE
        </button>
      </div>
    </section>
  );
};

export default PortfolioGrid;
