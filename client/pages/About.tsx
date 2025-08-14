import React from "react";
import {PlaceholderPage} from "@/components/PlaceholderPage"; // update the path if needed
import FeaturedLogos from "../components/FeaturedLogos";
import Footer from "../components/Footer";
import PatientDentistSection from "../components/PatientDentistSection";
export default function About() {
  return (
    <div className="bg-background text-gray-200 font-sans">
      
      {/* PlaceholderPage at the top */}
      <PlaceholderPage
       title="About Dr. Monik Vasant"
      description="Learn more about Dr. Vasant's background, qualifications, and approach to dentistry."
      />

      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-2xl font-semibold tracking-widest uppercase text-white">About Me</h1>
        <div className="mt-4 inline-block border border-gray-600 px-4 py-1">
          <span className="text-xs text-yellow-500 tracking-widest">HOME / ABOUT ME</span>
        </div>
        <div className="mt-4 border-t border-gray-700 min-w-full mx-auto"></div>
      </header>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto text-center px-4 mb-16">
        <p className="mb-4 leading-relaxed">
          Dr. Monik is a highly experienced clinician who is qualified from a leading medical university...
        </p>
        <p className="mb-4 leading-relaxed">
          His passion for aesthetic and minimally invasive dentistry has led him to be recognised globally...
        </p>
        <p className="mb-4 leading-relaxed">
          Dr. Monik teaches internationally, runs courses in composite artistry, and mentors young dentists...
        </p>
      </section>
       <section className="max-w-4xl mx-auto text-center px-4 mb-16">
        <p className="mb-4 leading-relaxed">
          Dr. Monik is a highly experienced clinician who is qualified from a leading medical university...
        </p>
        <p className="mb-4 leading-relaxed">
          His passion for aesthetic and minimally invasive dentistry has led him to be recognised globally...
        </p>
        <p className="mb-4 leading-relaxed">
          Dr. Monik teaches internationally, runs courses in composite artistry, and mentors young dentists...
        </p>
      </section>
       <section className="max-w-4xl mx-auto text-center px-4 mb-16">
        <p className="mb-4 leading-relaxed">
          Dr. Monik is a highly experienced clinician who is qualified from a leading medical university...
        </p>
        <p className="mb-4 leading-relaxed">
          His passion for aesthetic and minimally invasive dentistry has led him to be recognised globally...
        </p>
        <p className="mb-4 leading-relaxed">
          Dr. Monik teaches internationally, runs courses in composite artistry, and mentors young dentists...
        </p>
      </section>
       <section className="max-w-4xl mx-auto text-center px-4 mb-16">
        <p className="mb-4 leading-relaxed">
          Dr. Monik is a highly experienced clinician who is qualified from a leading medical university...
        </p>
        <p className="mb-4 leading-relaxed">
          His passion for aesthetic and minimally invasive dentistry has led him to be recognised globally...
        </p>
        <p className="mb-4 leading-relaxed">
          Dr. Monik teaches internationally, runs courses in composite artistry, and mentors young dentists...
        </p>
      </section>
       <section className="max-w-4xl mx-auto text-center px-4 mb-16">
        <p className="mb-4 leading-relaxed">
          Dr. Monik is a highly experienced clinician who is qualified from a leading medical university...
        </p>
        <p className="mb-4 leading-relaxed">
          His passion for aesthetic and minimally invasive dentistry has led him to be recognised globally...
        </p>
        <p className="mb-4 leading-relaxed">
          Dr. Monik teaches internationally, runs courses in composite artistry, and mentors young dentists...
        </p>
      </section>

      {/* Awards / Memberships */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Column 1 */}
          <div>
            <h3 className="uppercase text-white font-semibold mb-1">University of Leeds</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Bachelor of Dental Surgery (BChD) – 2003</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Best Dentist</h3>
            <p className="text-yellow-500 text-xs tracking-wider">The Dental Awards</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Invisalign</h3>
            <p className="text-yellow-500 text-xs tracking-wider">UK Ambassador<br />Global GP Trainer</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Styleitaliano</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Silver Member</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">GIDE Institute</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Los Angeles<br />Faculty Member</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="uppercase text-white font-semibold mb-1">University of Manchester</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Master of Science (MSc) with Merit<br />Aesthetic Restorative Dentistry – 2013</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Private Dentistry Elite 20</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Dentistry Magazine Poll</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">American Academy of Cosmetic Dentistry</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Member</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">British Academy of Cosmetic Dentistry</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Full Member</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Slow Dentistry</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Honorary Global Ambassador</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="uppercase text-white font-semibold mb-1">University of Geneva</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Visiting Guest Lecturer<br />Masters in Micro-Invasive Aesthetic Dentistry</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Best Young Dentist</h3>
            <p className="text-yellow-500 text-xs tracking-wider">The Dentistry Awards</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Royal College of Surgeons</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Faculty of General Dental Practice – Member</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">50 Most Influential People in Dentistry</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Dentistry Magazine</p>
            <h3 className="uppercase text-white font-semibold mt-4 mb-1">Key Opinion Leader</h3>
            <p className="text-yellow-500 text-xs tracking-wider">Coltene, 3M, GC Deppeler,<br />White Dental Beauty, Align Technology</p>
          </div>
        </div>
      </section>

      {/* Featured images
      <section className="max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group overflow-hidden">
          <img src="/images/featured1.jpg" alt="For Patients" className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white uppercase tracking-widest">For Patients</span>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <img src="/images/featured2.jpg" alt="For Dentists" className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white uppercase tracking-widest">For Dentists</span>
          </div>
        </div>
      </section> */}
      <FeaturedLogos/>
      <div className="w-full bg-black"> <PatientDentistSection/></div>
     
      <Footer/>
    </div>
  );
}
