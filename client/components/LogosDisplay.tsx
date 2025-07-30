import React from 'react';

interface LogoItem {
  src: string;
  alt: string;
  link: string;
}

const logos: LogoItem[] = [
  {
    src: 'https://www.itv.com/thismorning/assets/logo.png', // Replace with actual logo if different
    alt: 'This Morning',
    link: 'https://www.itv.com/thismorning',
  },
  {
    src: 'https://monikvasant.co.uk/wp-content/uploads/2020/11/logo2-gmtv.png',
    alt: 'GMTV',
    link: '#',
  },
  {
    src: 'https://monikvasant.co.uk/wp-content/uploads/2020/11/logo3-the-one-show.png',
    alt: 'The One Show',
    link: '#',
  },
  {
    src: '/mnt/data/cc102b75-2378-4732-87c4-4cae2de2ef54.png', // Local upload as fallback
    alt: 'Private Dentistry',
    link: 'https://www.theprivatedentistryawards.com/',
  },
  {
    src: 'https://bacd.com/wp-content/uploads/2023/11/BACD-logo.svg',
    alt: 'BACD',
    link: 'https://bacd.com/',
  },
];

const LogosDisplay: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
      <div className="flex flex-col gap-8 items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
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
