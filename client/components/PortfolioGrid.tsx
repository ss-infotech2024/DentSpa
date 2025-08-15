import React, { useState, useMemo, useCallback } from "react";
import { filters, portfolioData } from "./data/data";

// Define interfaces for type safety
interface PortfolioItem {
  src: string;
  alt: string;
}

interface PortfolioData {
  [key: string]: PortfolioItem[];
}

// Component for individual filter buttons
const FilterButton: React.FC<{
  filter: string;
  isActive: boolean;
  onClick: (filter: string) => void;
}> = ({ filter, isActive, onClick }) => (
  <button
    onClick={() => onClick(filter)}
    className={`px-3 py-1.5 text-xs sm:text-sm md:text-base font-medium text-[#d1b571] border border-[#d1b571] rounded-md
      transition-all duration-300 hover:bg-[#d1b571] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#d1b571] focus:ring-offset-2
      ${isActive ? "bg-[#d1b571] text-black" : "bg-transparent"}`}
    aria-pressed={isActive}
  >
    {filter.replace("®", "")}
  </button>
);

// Component for individual portfolio items
const PortfolioItem: React.FC<{ item: PortfolioItem; index: number }> = ({ item, index }) => (
  <div
    className="relative group w-full aspect-square overflow-hidden rounded-lg border border-[#d1b571] shadow-lg
      transition-all duration-300 hover:shadow-xl"
    role="button"
    tabIndex={0}
  >
    <img
      src={item.src}
      alt={item.alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div
      className="absolute inset-0 bg-gradient-to-t from-[#C8A97E66] via-transparent to-[#C8A97E33] 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />
  </div>
);

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Memoize filtered images to prevent unnecessary re-renders
  const images = useMemo(() => {
    setIsLoading(true);
    const data = portfolioData[activeFilter] || [];
    setTimeout(() => setIsLoading(false), 300); // Simulate loading
    return data.map((src, idx) => ({
      src,
      alt: `Portfolio item ${idx + 1} - ${activeFilter}`,
    }));
  }, [activeFilter]);

  // Handle filter change with callback
  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.png')" }}
        role="banner"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <h1
          className="relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10
            tracking-tight text-center px-4"
        >
          {/* {activeFilter === "ALL" ? "Our Portfolio" : activeFilter.replace("®", "")} */}
        </h1>
      </div>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-center mb-6 sm:mb-8" aria-label="Breadcrumb">
          <span className="text-[#d1b571] text-sm sm:text-base font-light uppercase tracking-wide">
            Home / {activeFilter.replace("®", "")}
          </span>
        </nav>

        {/* Filters */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 px-2 sm:px-4"
          role="tablist"
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              filter={filter}
              isActive={activeFilter === filter}
              onClick={handleFilterChange}
            />
          ))}
        </div>

        {/* Image Grid */}
        {isLoading ? (
          <div className="text-center text-[#d1b571] animate-pulse">
            Loading portfolio...
          </div>
        ) : images.length === 0 ? (
          <div className="text-center text-[#d1b571]">
            No items found for this category.
          </div>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
            role="grid"
          >
            {images.map((item, idx) => (
              <PortfolioItem key={idx} item={item} index={idx} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PortfolioGrid;