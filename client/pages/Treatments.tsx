import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";
import React from "react";
import FeaturedLogos from "@/components/FeaturedLogos";

export default function Treatments() {
  const treatments = [
    {
      title: "Dental Clinic in Nagpur",
      description: "Visit our top-rated dental clinic in Nagpur for comprehensive dental care.",
      image: "https://patnadentalhospital.com/wp-content/uploads/2020/08/Dental-clinic.jpg",
      link: "",
    },
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
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Tooth-Extraction.jpg",
      link: "https://docs.google.com/document/d/14512W3e3_TingKZcUF5kMO_uYYQY-QytuelF7OfuD4U/edit?usp=sharing",
    },
    {
      title: "Bleaching (Yellow Teeth Management)",
      description: "Professional bleaching for a brighter, whiter smile.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
      image: "https://ballantynedentistry.com/wp-content/uploads/2020/03/Porcelain-Veneers.jpg",
      link: "https://ballantynedentistry.com/porcelain-veneers/",
    },
    {
      title: "Composite Veneers",
      description: "Affordable composite veneers for a flawless smile.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Composite-Veneers.jpg",
      link: "https://docs.google.com/document/d/1vbzVJ-GJSYklSu1JlDXC3xUUz-QvnKhBUlqFMoAv9HQ/edit?usp=sharing",
    },
    {
      title: "Fracture Teeth Repair",
      description: "Expert repair of fractured or broken teeth for restored function and aesthetics.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Broken-Tooth-Repair.jpg",
      link: "https://docs.google.com/document/d/1FVyZq8HMc8Gv-SMc3E7kZKDYKk4FgjEey_FM4gk8Mgo/edit?usp=sharing",
    },
    {
      title: "Smile Correction Without Braces",
      description: "Non-invasive smile correction techniques for a confident smile without braces.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Smile-Correction.jpg",
      link: "https://docs.google.com/document/d/1kJD6FZoCtHz8bqNo1f4e2b24n0LWX9Q8_3tjVN2jN88/edit?usp=sharing",
    },
    {
      title: "Gummy Smile Correction",
      description: "Correct gummy smiles with advanced techniques for balanced aesthetics.",
      image: "https://ballantynedentistry.com/wp-content/uploads/2020/03/Gummy-Smile-Correction.jpg",
      link: "https://docs.google.com/document/d/1HFPkO7SmUxkU-d_Xc6v6tl3GZlKhUiMseacJwLURE5Q/edit?usp=sharing",
    },
    {
      title: "Gap Closures",
      description: "Effective treatments to close gaps between teeth for a uniform smile.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Gap-Closure.jpg",
      link: "https://docs.google.com/document/d/1xeUuf5hQTuL4J5oazuFAZ_kyUFnQfPuKyjcVEmUjaJo/edit?usp=sharing",
    },
    {
      title: "Digital Smile Design",
      description: "Advanced 3D smile designing for personalized smile transformations.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Digital-Smile-Design.jpg",
      link: "https://docs.google.com/document/d/1urjErN2lJ-fLcwGsKLSs3fBrif2OTcN_vAlmJ26TFEs/edit?usp=sharing",
    },
    {
      title: "Black Gums Correction",
      description: "Specialized treatments to address and correct black gums for a healthier smile.",
      image: "https://ballantynedentistry.com/wp-content/uploads/2020/03/Gum-Bleaching.jpg",
      link: "https://ballantynedentistry.com/gum-bleaching/",
    },
    {
      title: "Wisdom Tooth Removal",
      description: "Safe and effective wisdom tooth removal for improved oral health.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Wisdom-Tooth-Extraction.jpg",
      link: "https://docs.google.com/document/d/1IA5s4Ul0iTuSXuLExgzBnEiqLejVIsGEnJ_7XM-k05U/edit?usp=sharing",
    },
    {
      title: "Root Canal Treatment",
      description: "Effective root canal treatments to save and restore damaged teeth.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Root-Canal.jpg",
      link: "https://docs.google.com/document/d/1voiwPAgcgzTIFMKHy2NeSG00XOfect15f6q0dQ6_u0I/edit?usp=sharing",
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening treatments for a brighter, more confident smile.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://docs.google.com/document/d/1Bus6gT8Ly8by6Zd5_d2-iPoUI_fO5YeJHfIappyEOXI/edit?usp=sharing",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Comprehensive cosmetic dental treatments for a stunning smile.",
      image: "https://ballantynedentistry.com/wp-content/uploads/2020/03/Cosmetic-Dentistry.jpg",
      link: "https://ballantynedentistry.com/cosmetic-dentistry/",
    },
    {
      title: "Dental Veneers",
      description: "Enhance your smile with custom dental veneers for a flawless, natural look.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Dental-Veneers.jpg",
      link: "https://docs.google.com/document/d/1sE_8Lfo5kUWy90scUEa9q4Gih7qnJPvc5d5mCZhPZ-k/edit?usp=sharing",
    },
    {
      title: "Teeth Bonding",
      description: "Durable teeth bonding treatments for minor repairs and enhancements.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Dental-Bonding.jpg",
      link: "https://my.clevelandclinic.org/health/treatments/10922-dental-bonding",
    },
    {
      title: "Tooth Crystal",
      description: "Add a sparkling touch to your smile with tooth crystal treatments.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Tooth-Jewelry.jpg",
      link: "https://docs.google.com/document/d/1xIR23_y2MzKajlGnZFlPWLb3AVuZ-dpss1hO-5kWTSI/edit?usp=sharing",
    },
    {
      title: "Tooth Colored Fillings",
      description: "Natural-looking tooth-colored fillings for seamless dental restorations.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Tooth-Colored-Fillings.jpg",
      link: "https://docs.google.com/document/d/1JXAFicxHvXexpbEt071Qrn2mO2RWim_6AClbzFglogg/edit?usp=sharing",
    },
    {
      title: "Gum Depigmentation",
      description: "Safe and effective gum depigmentation to enhance your smile’s appearance.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Gum-Depigmentation.jpg",
      link: "https://docs.google.com/document/d/1h8kKsegFem2lY2zhyu0RwQbbB2JHY0VlpE20GBnl870/edit?usp=sharing",
    },
    {
      title: "Gummy Smile Treatment",
      description: "Advanced treatments to correct gummy smiles for a balanced look.",
      image: "https://ballantynedentistry.com/wp-content/uploads/2020/03/Gummy-Smile-Correction.jpg",
      link: "https://docs.google.com/document/d/1RKXyFBgzsbi5P2yPdWgaj_VrSfzVjInwT1GM3wxJDzQ/edit?usp=sharing",
    },
    {
      title: "Beach Gums Correction",
      description: "Specialized treatments for gum corrections to improve aesthetics.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Gum-Correction.jpg",
      link: "",
    },
    {
      title: "Sleep Apnea Device",
      description: "Custom devices to manage sleep apnea and improve your quality of life.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Sleep-Apnea-Device.jpg",
      link: "https://docs.google.com/document/d/1xqv5mGJ3-EG1e8ViXS-hIU45wWlkHPumLII9Rt-Y9Nk/edit?usp=sharing",
    },
    {
      title: "Sportsguard",
      description: "Protect your teeth with custom-fitted sportsguards for active lifestyles.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Sports-Guard.jpg",
      link: "https://docs.google.com/document/d/1dOJYA0MYgRersJgrfadCotDMEEeAhWupWgYdJON0cbg/edit?usp=sharing",
    },
    {
      title: "Complete Dentures",
      description: "High-quality complete dentures for full mouth restoration and comfort.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Complete-Dentures.jpg",
      link: "https://docs.google.com/document/d/1pLf4G9S24l7tx5WCAD56Du9X7pSh0hcsx1_B5084Lks/edit?usp=sharing",
    },
    {
      title: "Tooth Extractions",
      description: "Safe and efficient tooth extraction services for various dental needs.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Tooth-Extraction.jpg",
      link: "https://docs.google.com/document/d/1wvT-aUed4egPdltgJAKLZRXjCroC5bDu3rzvOM2R2_A/edit?usp=sharing",
    },
    {
      title: "Braces, Crowns And Bridges",
      description: "Comprehensive orthodontic and restorative treatments for a perfect smile.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Braces-Crowns-Bridges.jpg",
      link: "https://docs.google.com/document/d/1IYlVfqGWPINCw4yB57bWkgSD46d9mpikNxTcja-Ll8A/edit?usp=sharing",
    },
    {
      title: "Dental Crown – Zirconia, Metal Ceramic And E Max Crowns",
      description: "Durable and aesthetic dental crowns for tooth restoration.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Dental-Crowns.jpg",
      link: "https://docs.google.com/document/d/16YGHn0air240pVKdlT7zAZVWF9L_tQD4dqeaJQnddKc/edit?usp=sharing",
    },
    {
      title: "BruxZir Zirconia Crowns",
      description: "High-strength BruxZir zirconia crowns for lasting restorations.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/BruxZir-Crowns.jpg",
      link: "https://docs.google.com/document/d/1HvNg_qKEKeGbWiTCUkqf0AXvoFVvJz0m3Ws8y1t2H6A/edit?usp=sharing",
    },
    {
      title: "Invisible Braces / Clear Aligners",
      description: "Discreet clear aligners for straightening teeth without traditional braces.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://docs.google.com/document/d/15f0xeKLSmYL9QmrfmFvvR42UBjpNkQED0v41RAwsZy8/edit?usp=sharing",
    },
    {
      title: "Braces For Kids – Invisalign Teens",
      description: "Invisalign aligners designed specifically for teenagers.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://docs.google.com/document/d/1wCQzBlE-GBSAcpCtUiTxaQkO3PB5w8xi1Z8Czd4fmGM/edit?usp=sharing",
    },
    {
      title: "Lingual Braces",
      description: "Hidden lingual braces for discreet orthodontic treatment.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Lingual-Braces.jpg",
      link: "https://docs.google.com/document/d/1_X_Gpf5C51eMNnWDQebQUxBdBbuwLXTmwvgMjqvBgeM/edit?usp=sharing",
    },
    {
      title: "Damon Braces",
      description: "Advanced Damon braces for faster and comfortable orthodontic treatment.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Damon-Braces.jpg",
      link: "https://docs.google.com/document/d/1RfkX5ngLtbEShrnApASa9Ff_Z1SN9vhF2wJ1vbkn_cw/edit?usp=sharing",
    },
    {
      title: "Metal Or Ceramic Braces",
      description: "Traditional metal or aesthetic ceramic braces for effective teeth alignment.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Metal-Ceramic-Braces.jpg",
      link: "https://docs.google.com/document/d/1XpJmCnz53j6jZPAep0gvZitj5cyDJ8YnKxavwAK-XfY/edit?usp=sharing",
    },
    {
      title: "Metal Braces",
      description: "Reliable and cost-effective metal braces for orthodontic correction.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Metal-Braces.jpg",
      link: "https://docs.google.com/document/d/1S9NgSSj0DmClL37OTZ8F7errce1j7XPPxU5WtdTynXc/edit?usp=sharing",
    },
    {
      title: "Inman Aligners",
      description: "Fast-acting Inman aligners for minor teeth straightening.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Inman-Aligners.jpg",
      link: "https://docs.google.com/document/d/1CxsDNtLEWkfuexsSQ0PyQRPfiRlrMs4Rs_gp8DdtBCQ/edit?usp=sharing",
    },
    {
      title: "Dental Implants",
      description: "Durable and natural-looking dental implants to restore missing teeth.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Dental-Implants.jpg",
      link: "https://docs.google.com/document/d/1BdAZAv1m9u7V27j7FYZZs6xxI77PSFNiBy_pAV7ZRnU/edit?usp=sharing",
    },
    {
      title: "Multiple Implant",
      description: "Multiple dental implants for comprehensive tooth replacement.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Multiple-Implants.jpg",
      link: "https://docs.google.com/document/d/1cqCLdOoP5aMDaWZ42cSMpe_PjDVf92YRN62j2Uqla5E/edit?usp=sharing",
    },
    {
      title: "Single Tooth Implant",
      description: "Individual implants for precise replacement of single missing teeth.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Single-Tooth-Implant.jpg",
      link: "https://docs.google.com/document/d/1Wq6b-rcP8Z87ybgASTDZtnA2B1vJfURCrEKfskWkoHk/edit?usp=sharing",
    },
    {
      title: "All On Four Implants",
      description: "Innovative All-on-4 implants for full-arch restoration.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/All-On-Four-Implants.jpg",
      link: "https://docs.google.com/document/d/1EmtKjXXSVsNz9CuhGCo3iMGvJ2OAStbUj6o1pYxCQpE/edit?usp=sharing",
    },
    {
      title: "All On Six / Eight Implants",
      description: "Advanced implant solutions for full-mouth restoration.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/All-On-Six-Eight-Implants.jpg",
      link: "https://docs.google.com/document/d/1Rj1QRd8IlB0_2kX99rp4CLUNHB-zHx6YUHaGr_azO6I/edit?usp=sharing",
    },
    {
      title: "Mini Implants",
      description: "Minimally invasive mini implants for specific dental needs.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Mini-Implants.jpg",
      link: "https://docs.google.com/document/d/1toPvQca3Oh6BK4gf_oNxh6XHeXam9x02NFPJPvS4njE/edit?usp=sharing",
    },
    {
      title: "Bone Grafting",
      description: "Bone grafting procedures to support dental implants and restorations.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Bone-Grafting.jpg",
      link: "https://docs.google.com/document/d/1OBGxxhtfuWXHLhxlMjroB6SR3dGKuW_8rT7qgJASdZ4/edit?usp=sharing",
    },
    {
      title: "Semi Fixed Teeth",
      description: "Semi-fixed teeth solutions for stable and functional restorations.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Semi-Fixed-Teeth.jpg",
      link: "https://docs.google.com/document/d/15xSLx0O0LSHphHyAcIKzt-Ipgq2KOAGuO7-PPGfWGxg/edit?usp=sharing",
    },
    {
      title: "Fully Fixed Teeth",
      description: "Permanent fixed teeth solutions for a natural look and feel.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Fully-Fixed-Teeth.jpg",
      link: "https://docs.google.com/document/d/1XD7qNt2yTvAw4sr35vQFvWX7FWPwoOaQHggjQp8RD1U/edit?usp=sharing",
    },
    {
      title: "Child Dentistry",
      description: "Specialized dental care tailored for children’s unique needs.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://docs.google.com/document/d/1GxdX7TJ1a7gM8ClcIwUKLhRuzb56p_2bB3W3R1cSgps/edit?usp=sharing",
    },
    {
      title: "Kid Root Canal Treatment",
      description: "Gentle root canal treatments designed for children.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Kid-Root-Canal.jpg",
      link: "https://docs.google.com/document/d/1nKHBJRkVNDr86vz6q9Fb8lQJLSJBwP16ns6vZNaXp4A/edit?usp=sharing",
    },
    {
      title: "Fluoride Application Preventive Fluorides",
      description: "Preventive fluoride treatments to strengthen children’s teeth.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Fluoride-Treatment.jpg",
      link: "https://docs.google.com/document/d/1sWSwd9wR_QU1zGfL461l0CP7tMz9qMTJ7bA7O19LE6A/edit?usp=sharing",
    },
    {
      title: "Brushing Techniques",
      description: "Educational guidance on effective brushing techniques for optimal oral health.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Brushing-Techniques.jpg",
      link: "https://docs.google.com/document/d/1xTA7d8ZY_nvwv5EeD3HYnSbBld5rKr7JHe3uBla08QY/edit?usp=sharing",
    },
    {
      title: "Milk Tooth Fillings",
      description: "Safe fillings for children’s milk teeth to restore dental health.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Milk-Tooth-Fillings.jpg",
      link: "https://docs.google.com/document/d/1V0Xnc1a7TA0M1sSgu9EMvgsYm3XbSYXVKoYBtHjyLug/edit?usp=sharing",
    },
    {
      title: "Kids Habit Breaking Appliance",
      description: "Devices to help children break harmful oral habits.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Habit-Breaking-Appliance.jpg",
      link: "https://docs.google.com/document/d/1_NqJNeLa2D-XHbguZLtU4_jIPMzRx_tkcW2NA9RPmSg/edit?usp=sharing",
    },
    {
      title: "Laser Tongue Tie Correction",
      description: "Precise laser treatments for tongue tie correction in children.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Tongue-Tie-Correction.jpg",
      link: "https://docs.google.com/document/d/1gDK7GVPwh6-0O2qn_09rzxLG2sKdNTX9fCCZkz8-wAs/edit?usp=sharing",
    },
    {
      title: "Space Maintainer Sedation",
      description: "Comfortable space maintainer treatments with sedation for children.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Space-Maintainer.jpg",
      link: "https://docs.google.com/document/d/1u1OWPnwfFuaQpGQa0QqP0xOEDxGuSLQMSUGRKvrTldU/edit?usp=sharing",
    },
    {
      title: "Teeth Bleaching",
      description: "Safe and effective teeth bleaching for a brighter smile.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://docs.google.com/document/d/1S5ezLxxv5qohv_p5XV466l2VxNWDqC4X4MhnyfbE5q8/edit?usp=sharing",
    },
    {
      title: "Teeth Cleaning",
      description: "Thorough teeth cleaning services for a healthy smile.",
      image: "https://patnadentalhospital.com/wp-content/uploads/2020/08/Dental-cleaning.jpg",
      link: "https://docs.google.com/document/d/1YOpU5APP7qQCWNIJaPYx73Zl09ujeT-u5g0sKJulDIk/edit?usp=sharing",
    },
    {
      title: "Gums Treatment",
      description: "Comprehensive treatments for healthy gums and oral wellness.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Gum-Treatment.jpg",
      link: "",
    },
    {
      title: "Laser Gummy Smile Correction",
      description: "Laser-based correction for gummy smiles with minimal discomfort.",
      image: "https://ballantynedentistry.com/wp-content/uploads/2020/03/Gummy-Smile-Correction.jpg",
      link: "https://ballantynedentistry.com/",
    },
    {
      title: "Deep Cleaning / Curettage",
      description: "Deep cleaning and curettage for advanced gum health.",
      image: "https://dentistryonpark.com/wp-content/uploads/deep-teeth-cleaning-2111.jpg",
      link: "",
    },
    {
      title: "Flap Surgery",
      description: "Surgical treatment for advanced gum disease and restoration.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Flap-Surgery.jpg",
      link: "",
    },
    {
      title: "Pinhole Surgery",
      description: "Minimally invasive pinhole surgery for gum recession treatment.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Pinhole-Surgery.jpg",
      link: "",
    },
    {
      title: "Bad Breath Treatment",
      description: "Targeted treatments to eliminate chronic bad breath.",
      image: "https://images.ctfassets.net/6azfn76zuilv/7nUlwCdaBuchJGfBnNnVXW/14c0fb6b6a7ec75fe5ac6f7cd12b95fe/BadBreathCauses_Solutions_01.png",
      link: "",
    },
    {
      title: "Mobile Tooth Solution With Splinting",
      description: "Splinting solutions to stabilize mobile teeth and improve function.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Tooth-Splinting.jpg",
      link: "",
    },
    {
      title: "Socket Preservation Therapy",
      description: "Preserve bone structure after tooth extraction with socket preservation.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Socket-Preservation.jpg",
      link: "",
    },
    {
      title: "Super Specialty Dentistry",
      description: "Advanced dental procedures for complex oral health needs.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Super-Specialty-Dentistry.jpg",
      link: "",
    },
    {
      title: "TMJ Treatment",
      description: "Specialized care for temporomandibular joint (TMJ) disorders.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/TMJ-Treatment.jpg",
      link: "",
    },
    {
      title: "Full Mouth Rehabilitation",
      description: "Comprehensive restoration for complete oral health and aesthetics.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Full-Mouth-Rehabilitation.jpg",
      link: "",
    },
    {
      title: "Jaw Cyst Or Tumor",
      description: "Expert diagnosis and treatment of jaw cysts and tumors.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Jaw-Cyst-Tumor.jpg",
      link: "",
    },
    {
      title: "Orthognathic Surgery",
      description: "Corrective jaw surgery for improved function and aesthetics.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Orthognathic-Surgery.jpg",
      link: "",
    },
    {
      title: "GTR – Guided Tissue Regeneration",
      description: "Advanced tissue regeneration for periodontal health.",
      image: "https://www.dentaleh.com/wp-content/uploads/2020/04/Guided-Tissue-Regeneration.jpg",
      link: "",
    },
    {
      title: "Sinus Lift",
      description: "Sinus lift procedures to support dental implants in the upper jaw.",
      image: "https://ballantynedentistry.com/wp-content/uploads/2020/03/Sinus-Lift.jpg",
      link: "https://ballantynedentistry.com/sinus-lift/",
    },
  ];

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: "#070707" }}>
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-8">
            TREATMENTS
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-base">
            <p>
              At our dental clinic, we are committed to providing a comprehensive and personalized oral health experience.
            </p>
            <p>
              Our multi-disciplinary team employs cutting-edge techniques to deliver exceptional results, ensuring both the health and aesthetics of your smile.
            </p>
            <p>
              With decades of experience, we combine advanced technology and patient-centered care to offer a wide range of dental treatments tailored to your needs.
            </p>
            <p>
              Explore our services to discover how we can help you achieve a confident, healthy smile.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#C8A97E]">
          Our Treatments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden border border-white shadow-lg transition-all duration-500 hover:border-[#C8A97E] ${!treatment.link ? 'cursor-default' : ''}`}
              onClick={() => handleCardClick(treatment.link)}
            >
              {/* Image */}
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h3 className="text-white group-hover:text-[#C8A97E] text-xl font-semibold text-center tracking-wide transition-colors duration-300">
                  {treatment.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeaturedLogos />
      <Footer />
    </div>
  );
}