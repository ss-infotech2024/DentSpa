import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";
import React from "react";
import { InView } from "react-intersection-observer";
import FeaturedLogos from "@/components/FeaturedLogos";

export default function Treatments() {
  const treatments = [
    {
      title: "Cleaning & Polishing",
      description: "Professional cleaning and polishing for a healthy, sparkling smile.",
      image: "https://patnadentalhospital.com/wp-content/uploads/2020/08/Dental-cleaning.jpg",
      link: "https://docs.google.com/document/d/1ZqCxTf8y3Nbr3G03asDRr517QYt0UGnVlY_hJPQm-gg/edit?usp=sharing",
    },
    {
      title: "Deep Cleaning & Polishing",
      description: "Advanced deep cleaning and polishing to maintain optimal oral health.",
      image: "https://dentistryonpark.com/wp-content/uploads/deep-teeth-cleaning-2111.jpg",
      link: "https://docs.google.com/document/d/1W19wVIWYGev6ZSANI9rSzl9ApsubXKFAdCQoG7tiLCo/edit?usp=sharing",
    },
    {
      title: "Bad Breath Management",
      description: "Effective solutions to treat and manage bad breath issues.",
      image: "https://images.ctfassets.net/6azfn76zuilv/7nUlwCdaBuchJGfBnNnVXW/14c0fb6b6a7ec75fe5ac6f7cd12b95fe/BadBreathCauses_Solutions_01.png",
      link: "https://docs.google.com/document/d/1-Oh9z8wbXcP4jQdB_uReYkhQqwT-tymYXNPYApt2rF0/edit?usp=sharing",
    },
    {
      title: "Simple Tooth Extraction",
      description: "Painless and efficient tooth extraction services for optimal oral health.",
      image: "https://tse2.mm.bing.net/th/id/OIP.bAHOFwjBoQVe182E6MdVVAHaE7?pid=Api&P=0&h=180",
      link: "https://tse2.mm.bing.net/th/id/OIP.bAHOFwjBoQVe182E6MdVVAHaE7?pid=Api&P=0&h=180",
    },
    {
      title: "Bleaching (Yellow Teeth Management)",
      description: "Professional bleaching for a brighter, whiter smile.",
      image: "https://dentarana.net.au/wp-content/uploads/2017/08/How-To-Treat-Yellow-Teeth-in-5-Steps-arana-hills-dentist.jpg",
      link: "https://docs.google.com/document/d/1Zq6TGQSZuNu4t4dGsvFWZ2gxVMqjOy5wJCtKg_yyAS8/edit?usp=sharing",
    },
    {
      title: "Smile Makeovers",
      description: "Comprehensive smile makeover treatments to achieve your dream smile.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://docs.google.com/document/d/1O8CRn3QTDX3pRJMd9d44U7sJud7MirbGWwA2fp0sJpo/edit?usp=sharing",
    },
    {
      title: "Ceramic/Porcelain Veneers",
      description: "Enhance your smile with durable, natural-looking porcelain veneers.",
      image: "https://www.drmarkhughes.co.uk/wp-content/uploads/2020/10/veneers-b-a-1.jpg",
      link: "https://ballantynedentistry.com/porcelain-veneers/",
    },
    {
      title: "Composite Veneers",
      description: "Affordable composite veneers for a flawless smile.",
      image: "https://tse2.mm.bing.net/th/id/OIP.14K3r80F20ONBpnvlsf6nAHaEK?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1vbzVJ-GJSYklSu1JlDXC3xUUz-QvnKhBUlqFMoAv9HQ/edit?usp=sharing",
    },
    {
      title: "Fracture Teeth Repair",
      description: "Expert repair of fractured or broken teeth for restored function and aesthetics.",
      image: "https://tse3.mm.bing.net/th/id/OIP.ESAC_LdLfrDw17lr_VkC3gHaEc?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1FVyZq8HMc8Gv-SMc3E7kZKDYKk4FgjEey_FM4gk8Mgo/edit?usp=sharing",
    },
    {
      title: "Smile Correction Without Braces",
      description: "Non-invasive smile correction techniques for a confident smile without braces.",
      image: "https://apospublications.com/content/9/2020/10/2/img/APOS-10-120-g008.png",
      link: "https://docs.google.com/document/d/1kJD6FZoCtHz8bqNo1f4e2b24n0LWX9Q8_3tjVN2jN88/edit?usp=sharing",
    },
    {
      title: "Gummy Smile Correction",
      description: "Correct gummy smiles with advanced techniques for balanced aesthetics.",
      image: "https://drkormeilidermatology.com/wp-content/uploads/sites/150/2023/08/gummy-smiles-001-2-slider.jpg",
      link: "https://docs.google.com/document/d/1HFPkO7SmUxkU-d_Xc6v6tl3GZlKhUiMseacJwLURE5Q/edit?usp=sharing",
    },
    {
      title: "Gap Closures",
      description: "Effective treatments to close gaps between teeth for a uniform smile.",
      image: "https://tse4.mm.bing.net/th/id/OIP.AYKxbgyn7E0pEkfB09FTpgHaE8?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1xeUuf5hQTuL4J5oazuFAZ_kyUFnQfPuKyjcVEmUjaJo/edit?usp=sharing",
    },
    {
      title: "Digital Smile Design",
      description: "Advanced 3D smile designing for personalized smile transformations.",
      image: "https://tse3.mm.bing.net/th/id/OIP.1K4WY24O4cUAMLaPn7kSHQHaEf?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1urjErN2lJ-fLcwGsKLSs3fBrif2OTcN_vAlmJ26TFEs/edit?usp=sharing",
    },
    {
      title: "Black Gums Correction",
      description: "Specialized treatments to address and correct black gums for a healthier smile.",
      image: "https://tse1.mm.bing.net/th/id/OIP.0_G28HGBnJGui393gMA2sgAAAA?pid=Api&P=0&h=180",
      link: "https://ballantynedentistry.com/gum-bleaching/",
    },
    {
      title: "Wisdom Tooth Removal",
      description: "Safe and effective wisdom tooth removal for improved oral health.",
      image: "https://theelitedental.com/wp-content/uploads/2019/05/WisdomTeeth-Removal.jpg",
      link: "https://docs.google.com/document/d/1IA5s4Ul0iTuSXuLExgzBnEiqLejVIsGEnJ_7XM-k05U/edit?usp=sharing",
    },
    {
      title: "Root Canal Treatment",
      description: "Effective root canal treatments to save and restore damaged teeth.",
      image: "https://tse4.mm.bing.net/th/id/OIP.fHtV0OPLGGuIg-WDgZBOSgHaEK?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1voiwPAgcgzTIFMKHy2NeSG00XOfect15f6q0dQ6_u0I/edit?usp=sharing",
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening treatments for a brighter, more confident smile.",
      image: "https://tse2.mm.bing.net/th/id/OIP.14599maLFawpfoFBb5QIagHaE-?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1Bus6gT8Ly8by6Zd5_d2-iPoUI_fO5YeJHfIappyEOXI/edit?usp=sharing",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Comprehensive cosmetic dental treatments for a stunning smile.",
      image: "https://tse4.mm.bing.net/th/id/OIP.qN0BuDqA1m1HpoDkb4NvrgHaEo?pid=Api&P=0&h=180",
      link: "https://ballantynedentistry.com/cosmetic-dentistry/",
    },
    {
      title: "Dental Veneers",
      description: "Enhance your smile with custom dental veneers for a flawless, natural look.",
      image: "https://tse2.mm.bing.net/th/id/OIP.tLSra1EhCJ1orKE7AWCVWgHaHa?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1sE_8Lfo5kUWy90scUEa9q4Gih7qnJPvc5d5mCZhPZ-k/edit?usp=sharing",
    },
    {
      title: "Teeth Bonding",
      description: "Durable teeth bonding treatments for minor repairs and enhancements.",
      image: "https://tse1.mm.bing.net/th/id/OIP.Jxu4rUBlxddNIIjPSBgsHgHaHa?pid=Api&P=0&h=180",
      link: "https://my.clevelandclinic.org/health/treatments/10922-dental-bonding",
    },
    {
      title: "Tooth Crystal",
      description: "Add a sparkling touch to your smile with tooth crystal treatments.",
      image: "https://tse4.mm.bing.net/th/id/OIP.KRsrANr_KRcbQoEkWQ7gSwHaE1?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1xIR23_y2MzKajlGnZFlPWLb3AVuZ-dpss1hO-5kWTSI/edit?usp=sharing",
    },
    {
      title: "Tooth Colored Fillings",
      description: "Natural-looking tooth-colored fillings for seamless dental restorations.",
      image: "https://tse1.mm.bing.net/th/id/OIP.KG7LQFy9EftNUIptaLDn3gHaFu?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1JXAFicxHvXexpbEt071Qrn2mO2RWim_6AClbzFglogg/edit?usp=sharing",
    },
    {
      title: "Gum Depigmentation",
      description: "Safe and effective gum depigmentation to enhance your smile’s appearance.",
      image: "https://tse2.mm.bing.net/th/id/OIP.5EZxWjZe0sS1nfWmHAEZDQHaCU?pid=Api&P=0&h=180",
      link: "https://docs.google.com/document/d/1h8kKsegFem2lY2zhyu0RwQbbB2JHY0VlpE20GBnl870/edit?usp=sharing",
    },
  ];

    const handleCardClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <section className="bg-black py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Treatments
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <InView key={index} triggerOnce threshold={0.15}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`group relative cursor-pointer overflow-hidden border border-white rounded-lg shadow-lg transition-all duration-300 hover:border-[#C8A97E] ${
                    inView ? "animate-smoothSlideUp" : "opacity-0"
                  } ${!treatment.link ? "cursor-default" : ""}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => handleCardClick(treatment.link)}
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-300">{treatment.description}</p>
                  </div>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes smoothSlideUp {
            0% {
              opacity: 0;
              transform: translateY(60px) scale(0.95);
            }
            60% {
              opacity: 0.6;
              transform: translateY(20px) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-smoothSlideUp {
            animation: smoothSlideUp 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
          }
          .group:hover .animate-smoothSlideUp {
            transform: scale(1.03);
            box-shadow: 0 8px 16px rgba(200, 169, 126, 0.25);
          }
        `}
      </style>
    </section>
  );
}