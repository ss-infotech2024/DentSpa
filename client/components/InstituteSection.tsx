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
            <div className="highlight-card">
              <span className="star">★</span>
              <strong>EXPERT DENTAL CARE</strong>
              <p>COMPREHENSIVE TREATMENTS</p>
              <div className="highlight-details">
                Offering world-class dental solutions with advanced technology and personalized care.
              </div>
            </div>

            <div className="highlight-card">
              <span className="star">★</span>
              <strong>AESTHETIC & COSMETIC DENTISTRY</strong>
              <p>SMILE MAKEOVER SPECIALIST</p>
              <div className="highlight-details">
                Transforming smiles with precision, artistry, and modern techniques.
              </div>
            </div>

            <div className="highlight-card">
              <span className="star">★</span>
              <strong>ADVANCED FACILITIES</strong>
              <p>STATE-OF-THE-ART CLINIC</p>
              <div className="highlight-details">
                Equipped with the latest dental equipment for comfortable and effective treatments.
              </div>
            </div>
          </div>

  <a href="/contact"><button className="about-button">BOOK AN APPOINTMENT</button></a>
          
        </div>
      </div>
    </section>
  );
};

export default InstituteSection;
