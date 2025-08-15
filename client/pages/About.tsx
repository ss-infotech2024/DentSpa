import React from "react";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import FeaturedLogos from "../components/FeaturedLogos";
import Footer from "../components/Footer";
import PatientDentistSection from "../components/PatientDentistSection";

export default function About() {
  return (
    <div className="bg-black text-muted-foreground font-sans">
      <PlaceholderPage
        title="About Dant Spa Dental Clinic"
        description="Experience world-class dental care in Nagpur at Dant Spa Dental Clinic, led by Dr. Debashree Chandak. We blend advanced technology, artistry, and compassion to create healthy, confident smiles."
      />

      {/* Clinic Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-light text-[#d1b571] mb-4 pt-32">
          Dant Spa Dental Clinic
        </h1>
        <p className="text-lg text-gray-400">
          ⭐ 4.9 (181 Google reviews) · Dental Clinic in Nagpur, Maharashtra
        </p>
        <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
          Address: DantSpa C/O Dr. Debashree Chandak, 371- Ashish Apartment, LAD Chowk, Pole 216, Opposite old Wockheart Hospital, Gandhi Nagar, LAD Metro Station, Nagpur, Maharashtra 440010
        </p>
      </header>

      {/* About Dr. Debashree Chandak */}
      <section className="max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative group w-[400px] h-[400px] overflow-hidden rounded-full border-[1px] border-[#d1b571] shadow-lg">
            <img
              src="/ds2.png"
              alt="Dr. Debashree Chandak"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-transparent to-[#C8A97E33] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="font-semibold text-[#d1b571]">
            Dr. Debashree Chandak is a trusted name in cosmetic and restorative dentistry, combining artistic expertise with advanced dental science to transform smiles with precision and care.
          </p>
          <p>
            At Dant Spa Dental Clinic, we believe dental visits should be stress-free, comfortable, and result in a smile you’re proud of. With modern facilities, cutting-edge equipment, and a compassionate team, we provide everything from preventive care to advanced smile makeovers.
          </p>
          <p>
            Specializing in minimally invasive treatments, Dr. Chandak ensures natural aesthetics and long-lasting results, creating smiles that look beautiful and feel healthy.
          </p>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-light text-[#d1b571] mb-8 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-gray-700 rounded-lg hover:border-[#d1b571] transition-colors">
            <h3 className="text-xl font-medium text-muted-foreground mb-3">
              Cosmetic Dentistry
            </h3>
            <p className="text-gray-400">Smile design, veneers, teeth whitening, and aesthetic restorations.</p>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg hover:border-[#d1b571] transition-colors">
            <h3 className="text-xl font-medium text-muted-foreground mb-3">
              Dental Implants
            </h3>
            <p className="text-gray-400">Permanent solutions for missing teeth with advanced implant protocols.</p>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg hover:border-[#d1b571] transition-colors">
            <h3 className="text-xl font-medium text-muted-foreground mb-3">
              Preventive & Family Care
            </h3>
            <p className="text-gray-400">Comprehensive oral checkups, cleaning, and preventive treatments for all ages.</p>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="max-w-4xl mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-light text-[#d1b571] mb-8">Our Philosophy</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          We believe that every patient deserves a confident smile. Our approach is patient-focused, ensuring transparency, comfort, and customized treatment for every individual who walks through our doors.
        </p>
        <p className="font-medium text-[#d1b571]">
          "Your smile is our masterpiece." – Dr. Debashree Chandak
        </p>
      </section>

      <FeaturedLogos />
      <div className="w-full bg-black">
        <PatientDentistSection />
      </div>
      <Footer />
    </div>
  );
}
