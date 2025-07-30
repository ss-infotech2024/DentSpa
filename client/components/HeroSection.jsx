import React from "react";
import doctorImg from "../assets/doctor1.png";

export default function HeroSection() {
  return (
    <section
      className="w-full h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#090613" }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Doctor Image */}
        <div className="flex justify-center">
          <img
            src={doctorImg}
            alt="Doctor"
            className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-right text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Health, Our Priority
          </h1>
          <p className="text-lg mb-6 text-gray-300 leading-relaxed">
            Dentistry is not just work for me, it is my passion. I practice all
            aspects of dentistry in my clinics but my work is based around the
            philosophy of minimally invasive aesthetic dentistry. This belief
            system means that we recognise the importance of having a beautiful,
            natural smile.
          </p>
        </div>
      </div>
    </section>
  );
}
