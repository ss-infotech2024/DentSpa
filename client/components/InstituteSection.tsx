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
              Dr. Debashree Chandak's State-of-the-Art Dental Clinic <br />
              and Advanced Training Institute <br />
              in the Heart of Central London
            </h2>
          </div>

          <div className="highlights">
            <div className="highlight-card">
              <span className="star">★</span>
              <strong>INTERNATIONAL LECTURER</strong>
              <p>AESTHETIC & RESTORATIVE DENTISTRY</p>
              <div className="highlight-details">
                Over a decade of experience transforming smiles with artistic
                vision and scientific precision
              </div>
            </div>

            <div className="highlight-card">
              <span className="star">★</span>
              <strong>TOP COSMETIC DENTIST</strong>
              <p>MULTIPLE AWARD WINNER</p>
              <div className="highlight-details">
                Recognized for excellence in cosmetic dentistry and patient care
              </div>
            </div>

            <div className="highlight-card">
              <span className="star">★</span>
              <strong>INVISALIGN</strong>
              <p>PLATINUM PROVIDER & GLOBAL TRAINER</p>
              <div className="highlight-details">
                Specialist in minimally invasive techniques and digital smile
                design
              </div>
            </div>
          </div>

          <button className="about-button">MEET DR. CHANDAK</button>
        </div>
      </div>
    </section>
  );
};

export default InstituteSection;
