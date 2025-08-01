import React from "react";
import "./FeaturedLogos.css";
import logo1 from "../assets/logo1-this-morning.png";
import logo2 from "../assets/logo3-the-one-show.png";
import logo3 from "../assets/logo4-private-dentistry.png";
import logo4 from "../assets//logo5-british-academy-of-cosmetic-dentistry-full-member.png";
import logo5 from "../assets/logo6-dentistry-top-50.png";
import logo6 from "../assets/logo6-dentistry-top-50.png";
import logo7 from "../assets/logo7-invisalign.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const FeaturedLogos: React.FC = () => {
  return (
    <section className="bg-black py-6 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex animate-slide whitespace-nowrap">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mx-4 sm:mx-6 object-contain"
            />
          ))}
          {/* duplicate to make seamless loop */}
          {logos.map((logo, idx) => (
            <img
              key={`duplicate-${idx}`}
              src={logo}
              alt={`Logo duplicate ${idx + 1}`}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mx-4 sm:mx-6 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLogos;
