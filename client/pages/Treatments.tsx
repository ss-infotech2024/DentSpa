import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";
import React from "react";
import { Navigate } from "react-router-dom";

export default function Treatments() {
  const treatments = [
    {
      title: "COMPOSITE BONDING",
      description:
        "Transform your smile with our advanced composite bonding techniques for natural-looking results.",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "INVISALIGN",
      description:
        "Straighten your teeth discreetly with Invisalign clear aligners, personally overseen by Dr. Monik Vasant.",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "ORAL HEALTH",
      description:
        "Comprehensive oral health assessments and preventive care to maintain your beautiful smile.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfdb7ee46c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "DENTAL EDUCATION",
      description:
        "Educational programs and consultations to help you understand and maintain optimal oral health.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "FACIAL AESTHETICS",
      description:
        "Non-surgical facial aesthetic treatments to complement your beautiful smile.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "TOOTH WHITENING",
      description:
        "Professional teeth whitening treatments for a brighter, more confident smile.",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation/>
      {/* Hero Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-8">
            TREATMENTS
          </h1>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-base">
            <p>
              Our mission is to build a complete and stable oral experience
              based on the principles of a multi-disciplinary team to not only
              treat, but to grow the upper bound.
            </p>
            <p>
              Alternative financial suitability develops a significantly based
              on describing work-based beautiful results, which also considering
              the health of the teeth and entire.
            </p>
            <p>
              This philosophy has taken 28 years to be defining, is the
              combination of thousands of dental times and the lense and
              highlights to help patients and colleagues give the life
              possibilities of modern day surgical dentistry.
            </p>
            <p>
              All the changes are found at new prospects with totally different
              to see free final photographs as a chance of this world be
              provided without them. They know they refuse and they know what
              you bring with for them.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center px-4">
                      {treatment.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-8">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a consultation with Dr. Monik Vasant to discuss which
            treatment is right for you.
          </p>
          <button className="border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-background transition-all duration-300">
            Book Consultation
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
