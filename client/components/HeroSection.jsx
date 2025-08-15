import React from "react";
import doctorImg from "../assets/doctorbg.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-end px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
      <picture className="absolute inset-0">
        <source srcSet="/ds2.png" media="(max-width: 1024px)" />
        <img
          src={doctorImg}
          alt="Doctor Background"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Text Content */}
      <div className="relative max-w-7xl w-full flex justify-center sm:justify-end pb-6 sm:pb-8 md:pb-10 lg:pb-12 animate-slideInRight">
        <div className="bg-black/60 lg:bg-transparent p-4 sm:p-6 md:p-8 rounded-lg w-full sm:w-1/2 lg:w-5/12 xl:w-1/2 lg:mr-12 text-white font-dancing text-center sm:text-right px-2 sm:px-4 md:px-6 animate-on-hover">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Your Health, Our Priority
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 text-gray-300 py-2 sm:py-3 md:py-4">
            Dentistry is not just work for me, it is my passion. I practice all
            aspects of dentistry in my clinics but my work is based around the
            philosophy of minimally invasive aesthetic dentistry. This belief
            system means that we recognise the importance of having a beautiful,
            natural smile.
          </p>
          <p className="text-[#c5a253] italic font-signature text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl underline-offset-4">
            Dr Debashree Chandak
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-on-hover:hover {
          animation: slideInRight 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
}
