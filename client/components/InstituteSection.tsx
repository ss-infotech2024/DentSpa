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
          <h2>
            New state of the art dental clinic <br />
            and dental training institute <br />
            in the heart of central London
          </h2>

          <div className="highlights">
            <div>
              <span className="star">★</span>
              <br />
              <strong>INTERNATIONAL LECTURER</strong>
              <br />
              AESTHETIC DENTISTRY
            </div>
            <div>
              <span className="star">★</span>
              <br />
              <strong>PRIVATE DENTISTRY ELITE</strong>
              <br />
              DENTISTRY MAGAZINE POLL
            </div>
            <div>
              <span className="star">★</span>
              <br />
              <strong>INVISALIGN</strong>
              <br />
              UK AMBASSADOR
              <br />
              GLOBAL GP TRAINER
            </div>
          </div>

          <button className="about-button">ABOUT ME</button>
        </div>
      </div>
    </div>
  );
};

export default InstituteSection;
