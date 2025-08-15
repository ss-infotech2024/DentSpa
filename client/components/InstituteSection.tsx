import React from 'react';
import './InstituteSection.css'; // External styling
import instituteBg from '../assets/institute-bg1.jpg'; // Adjust the path if needed

const InstituteSection: React.FC = () => {
  return (
    <div
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
              <br />
              <strong>INTERNATIONAL LECTURER</strong>
              <br />
              AESTHETIC & RESTORATIVE DENTISTRY
              <div className="highlight-details">
                Over a decade of experience transforming smiles with artistic vision and scientific precision
              </div>
            </div>
            <div className="highlight-card">
              <span className="star">★</span>
              <br />
              <strong>TOP COSMETIC DENTIST</strong>
              <br />
              MULTIPLE AWARD WINNER
              <div className="highlight-details">
                Recognized for excellence in cosmetic dentistry and patient care
              </div>
            </div>
            <div className="highlight-card">
              <span className="star">★</span>
              <br />
              <strong>INVISALIGN</strong>
              <br />
              PLATINUM PROVIDER & GLOBAL TRAINER
              <div className="highlight-details">
                Specialist in minimally invasive techniques and digital smile design
              </div>
            </div>
          </div>

          <button className="about-button hover:bg-gold-light">MEET DR. CHANDAK</button>
        </div>
      </div>
    </div>
  );
};

export default InstituteSection;