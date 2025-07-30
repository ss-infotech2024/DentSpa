import React from 'react';

// Import local logo images
import logo1 from '../assets/logo1-this-morning.png';
import logo2 from '../assets/logo3-the-one-show.png';
import logo3 from "../assets/logo4-private-dentistry.png";
import logo4 from '../assets/logo5-british-academy-of-cosmetic-dentistry-full-member.png';
import logo5 from '../assets/logo6-dentistry-top-50.png';
import logo6 from '../assets/logo7-invisalign.png';


interface LogoItem {
  src: string;
  alt: string;
  link: string;
}

const logos: LogoItem[] = [
  {
    src: logo1,
    alt: 'This Morning',
    link: 'https://www.itv.com/thismorning',
  },
  {
    src: logo2,
    alt: 'GMTV',
    link: '#',
  },
  {
    src: logo3,
    alt: 'The One Show',
    link: '#',
  },
  {
    src: logo4,
    alt: 'Private Dentistry',
    link: 'https://www.theprivatedentistryawards.com/',
  },
  {
    src: logo5,
    alt: 'BACD',
    link: 'https://bacd.com/',
  },
  {
    src: logo6,
    alt: 'BACD',
    link: 'https://bacd.com/',
  },
];

const LogosDisplay: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#090613] flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-white text-2xl font-semibold mb-10 text-center">
        Featured On
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-20 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogosDisplay;
