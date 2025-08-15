import React from "react";
import "./InstituteSection.css";
import instituteBg from "../assets/institute-bg1.jpg";

const InstituteSection = () => {
  return (
    <section
      className="institute-section"
      style={{ backgroundImage: `url(${instituteBg})` }}
    >
      <div className="overlay">
        <div className="text-content">
          <div className="text-background">
            <h2>
              Dr. Debashree Chandak <br />
              Dant Spa Dental Clinic <br />
              Nagpur, Maharashtra
            </h2>
            <p className="google-reviews">
              ⭐ 4.9&nbsp;·&nbsp;181 Google Reviews
            </p>
          </div>

          <div className="highlights">
            {[
              {
                title: "EXPERT DENTAL CARE",
                subtitle: "COMPREHENSIVE TREATMENTS",
                details: "Offering world-class dental solutions with advanced technology and personalized care.",
              },
              {
                title: "AESTHETIC & COSMETIC DENTISTRY",
                subtitle: "SMILE MAKEOVER SPECIALIST",
                details: "Transforming smiles with precision, artistry, and modern techniques.",
              },
              {
                title: "ADVANCED FACILITIES",
                subtitle: "STATE-OF-THE-ART CLINIC",
                details: "Equipped with the latest dental equipment for comfortable and effective treatments.",
              },
            ].map((highlight, index) => (
              <div key={index} className="highlight-card" style={{ "--index": index } as React.CSSProperties}>
                <span className="star">★</span>
                <strong>{highlight.title}</strong>
                <p>{highlight.subtitle}</p>
                <div className="highlight-details">{highlight.details}</div>
              </div>
            ))}
          </div>

          <a href="/contact">
            <button className="about-button">BOOK AN APPOINTMENT</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstituteSection;