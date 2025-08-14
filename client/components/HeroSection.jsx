import React from "react";
import doctorImg from "../assets/doctorbg.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">
      {/* Full Background Image */}
      <img
        src={doctorImg}
        alt="Doctor Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Empty for Desktop */}
        <div className="hidden md:block"></div>

        {/* Right Side Text */}
        <div className="text-white font-dancing text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Your Health, Our Priority
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-300 py-5">
            "Dentistry is not just work for me, it is my passion. I practice all
            aspects of dentistry in my clinics but my work is based around the
            philosophy of minimally invasive aesthetic dentistry. This belief
            system means that we recognise the importance of having a beautiful,
            natural smile."
          </p>
          <p className="text-[#c5a253] italic font-signature text-xl sm:text-2xl underline-offset-4">
            Dr Debashree Chandak
          </p>
        </div>
      </div>
    </section>
  );
}
