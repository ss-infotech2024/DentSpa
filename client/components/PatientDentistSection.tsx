import React from "react";
import patientImg from "../assets/thumb1-for-patients.jpg";
import dentistImg from "../assets/for-dentists.jpg";

const PatientDentistSection: React.FC = () => {
  const blocks = [
    {
      title: "FOR PATIENTS",
      img: patientImg,
    },
    {
      title: "FOR DENTISTS",
      img: dentistImg,
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-black">
      {blocks.map((block, index) => (
        <div
          key={index}
          className="relative group h-[400px] w-full overflow-hidden border border-white  shadow-md cursor-pointer"
        >
          <img
            src={block.img}
            alt={block.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#C8A97E66] via-transparent to-[#C8A97E33] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-semibold tracking-widest">
              {block.title}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PatientDentistSection;
