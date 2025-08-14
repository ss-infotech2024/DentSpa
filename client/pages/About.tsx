import React from "react";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import FeaturedLogos from "../components/FeaturedLogos";
import Footer from "../components/Footer";
import PatientDentistSection from "../components/PatientDentistSection";

export default function About() {
  return (
    <div className="bg-black text-muted-foreground font-sans">
      <PlaceholderPage
        title="About Dr. Debashree Chandak"
        description="Discover the journey, expertise, and philosophy of Dr. Debashree Chandak - a passionate cosmetic dentist dedicated to creating beautiful, healthy smiles."
      />

      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-light text-[#d1b571] mb-8 text-center pt-32">
          About Dr. Debashree Chandak
        </h1>
        <div className="mt-4 border-t border-gray-700 min-w-full mx-auto"></div>
      </header>

      <section className="max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative group w-[400px] h-[400px] overflow-hidden rounded-full border-[1px] border-[#d1b571] shadow-lg">
            <img
              src="/ds2.png"
              alt="Dr. Debashree Chandak"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(125,115,115,0.04)] via-transparent to-[#C8A97E33] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="font-semibold text-[#d1b571]">
            With over a decade of experience in cosmetic and restorative dentistry, 
            Dr. Debashree Chandak combines artistic vision with scientific precision 
            to transform smiles and lives.
          </p>
          
          <p className="text-muted-foreground">
            After graduating with honors from [Your Dental School] in [Year], 
            Dr. Chandak pursued advanced training in cosmetic dentistry, 
            implantology, and smile design. Her commitment to continuing education 
            has taken her across the globe to learn from leading dental innovators.
          </p>
          
          <p className="text-muted-foreground">
            Specializing in minimally invasive techniques, Dr. Chandak believes in 
            preserving natural tooth structure while achieving stunning aesthetic results. 
            Her approach blends the latest dental technologies with an artist's eye for 
            detail, creating smiles that look beautiful and feel completely natural.
          </p>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-light text-[#d1b571] mb-8 text-center">
          Professional Journey
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-[#d1b571] mb-2">Education</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#d1b571] mr-2">•</span>
                  <span className="text-muted-foreground">BDS - [University Name], [Year]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d1b571] mr-2">•</span>
                  <span className="text-muted-foreground">MDS in Cosmetic Dentistry - [University], [Year]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d1b571] mr-2">•</span>
                  <span className="text-muted-foreground">Advanced Certification in Digital Smile Design</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-[#d1b571] mb-2">Specialized Training</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#d1b571] mr-2">•</span>
                  <span className="text-muted-foreground">All-on-4/All-on-6 Implant Protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d1b571] mr-2">•</span>
                  <span className="text-muted-foreground">Laser Dentistry Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d1b571] mr-2">•</span>
                  <span className="text-muted-foreground">Invisalign Platinum Provider</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-[#d1b571] mb-2">Professional Philosophy</h3>
              <p className="text-muted-foreground">
                Dr. Chandak practices patient-centered dentistry, believing that 
                understanding each patient's unique needs and concerns is essential 
                for creating truly transformative results. She takes time to educate 
                patients about their options, ensuring they feel confident in their 
                treatment decisions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-[#d1b571] mb-2">Teaching & Mentorship</h3>
              <p className="text-muted-foreground">
                Passionate about advancing the field, Dr. Chandak regularly conducts 
                workshops on cosmetic dentistry techniques and serves as a clinical 
                instructor for [Professional Organizations]. She mentors young dentists 
                in mastering aesthetic principles and minimally invasive approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="max-w-6xl mx-auto px-4 mb-20 bg-black py-12 rounded-lg">
        <h2 className="text-3xl font-light text-[#d1b571] mb-12 text-center">
          Awards & Recognition
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-gray-700 rounded-lg hover:border-[#d1b571] transition-colors">
            <h3 className="text-xl font-medium text-muted-foreground mb-3">
              Best Cosmetic Dentist
            </h3>
            <p className="text-[#d1b571]">
              [Award Name], [Year]
            </p>
          </div>
          
          <div className="p-6 border border-gray-700 rounded-lg hover:border-[#d1b571] transition-colors">
            <h3 className="text-xl font-medium text-muted-foreground mb-3">
              Top Invisalign Provider
            </h3>
            <p className="text-[#d1b571]">
              Align Technology, [Year]
            </p>
          </div>
          
          <div className="p-6 border border-gray-700 rounded-lg hover:border-[#d1b571] transition-colors">
            <h3 className="text-xl font-medium text-muted-foreground mb-3">
              Excellence in Patient Care
            </h3>
            <p className="text-[#d1b571]">
              [Organization Name], [Year]
            </p>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-light text-[#d1b571] mb-8">
          Beyond the Dental Chair
        </h2>
        
        <div className="space-y-6 text-lg">
          <p className="text-muted-foreground">
            When not creating beautiful smiles, Dr. Chandak enjoys [personal interests 
            like travel, painting, etc.]. She believes this balance between professional 
            dedication and personal passions makes her a more compassionate and 
            well-rounded practitioner.
          </p>
          
          <p className="font-medium text-[#d1b571]">
            "My greatest reward is seeing the confidence that blossoms when patients 
            discover their new smile. That moment of transformation is why I do what I do."
          </p>
          
          <p className="text-muted-foreground">
            - Dr. Debashree Chandak
          </p>
        </div>
      </section>

      <FeaturedLogos />
      <div className="w-full bg-black">
        <PatientDentistSection />
      </div>
      <Footer />
    </div>
  );
}