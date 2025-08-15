import React from "react";
import { useNavigate } from "react-router-dom";
// import patientImg from ""; // Image for patients
import dentistImg from "../assets/doctor1.png"; // Image for dentists

const PatientDentistSection: React.FC = () => {
  const navigate = useNavigate();

  const blocks = [
    {
      title: "FOR PATIENTS",
      img: "https://tse3.mm.bing.net/th/id/OIP.epl19AEk8GEkIFvG6f0jgwHaEc?pid=Api&P=0&h=180",
      link: "/treatments",
    },
    {
      title: "FOR DENTISTS",
      img: dentistImg,
      link: "/treatments",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-black">
      {blocks.map((block, index) => (
        <div
          key={index}
          onClick={() => navigate(block.link)}
          className="relative group h-[350px] sm:h-[400px] w-full overflow-hidden border border-white shadow-md cursor-pointer rounded-lg"
        >
          {/* Background Image */}
          <img
            src={block.img}
            alt={block.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#C8A97E66] via-transparent to-[#C8A97E33] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-widest drop-shadow-lg">
              {block.title}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PatientDentistSection;
