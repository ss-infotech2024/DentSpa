import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import Footer from "../components/Footer";
import fmrCourseImg from "../assets/course1.png";
// import crownCourseImg from "../assets/crown-course.png";
import photoshopCourseImg from "../assets/photoshop.png";

interface CourseItem {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  cases: string;
  videoDemos: string[];
  handsOn: string[];
  giveaways: string[];
  participantRequirements: string[];
  fees: string;
  postSupport: string;
  image: string;
  brochure: string;
}

interface CourseSection {
  heading: string;
  subheading?: string;
  courses: CourseItem[];
}

const courseSections: CourseSection[] = [
  {
    heading: "FMR WITH INDIRECT COMPOSITES – ONLINE PROGRAMME",
    subheading:
      "An advanced online training course designed to master Full Mouth Rehabilitation using Indirect Composites. Learn theory, treatment planning, and execution at your pace from anywhere. This is an online 5-day course from 3-7pm daily, teaching both theory and practical aspects. A complete hands-on kit will be sent, including a wear model, composites, and finishing polishing kit. Restore the wear case on your dental chair during the hands-on part.",
    courses: [
      {
        title: "FMR Indirect Composite – Online",
        description:
          "A comprehensive online learning experience covering diagnosis, case selection, occlusion principles, smile design, mock-ups, preparation techniques, bonding protocols, and finishing. This course is tailored for clinicians aiming to achieve predictable and aesthetic rehabilitations using indirect composite techniques. Includes interactive Q&A sessions and mentorship. Why register? Any FMR case gives you a minimum of 40K and above. Learning FMR is today's necessity due to increasing tooth wear in younger populations. Bonded dentistry reduces failures, increases confidence, and allows higher charging. FMR is the new need-of-the-hour treatment.",
        duration: "5 Days (3-7pm Daily, Self-paced Elements)",
        topics: [
          "Composite theory",
          "Bonding principles",
          "Which bonding to use and how to use",
          "Shade selection",
          "Finishing & Polishing",
          "Smile Design Principles",
          "How to order a full mouth wax up",
          "Things to check in a mock up",
          "Easiest clinical way to record Centric relation",
          "Which articulator to use and why",
          "What is Facebow",
          "How to record Facebow in 3 minutes",
          "How to mount casts in CR",
          "How to transfer the Facebow to articulator super simplified",
          "Deprogrammer – when to use",
          "How to make a chair side deprogrammer",
          "Overhyped Occlusion- super simplified in daily clinical practice",
          "Why do we need to give canine guidance?",
          "How to plan for it?",
          "Features of FMR occlusion",
          "How Occlusal analysis may change our treatment plan",
          "Tooth wear- Diagnosis & Management",
          "Attrition & Erosion",
          "Abrasion & Abfraction",
          "Generalised Wear Management",
          "Confirmative FMR approach- when to do and how to do",
          "Reorganised FMR approach- when to do and how to do",
          "How to plan for FMR",
          "Which case to be done with crowns and which with Composite",
          "How to convince patient for FMR",
          "What planning to be done before the patient comes",
          "Clinical steps for FMR- whole sequence",
          "How to manage FMR failures",
          "What instructions to be given to the FMR patient",
          "How to manage FMR recalls",
          "How to charge the FMR patient",
          "Class I",
          "Class II- special focus",
          "Class III",
          "Class IV",
          "Class V",
          "Diastema closure",
          "Multiple spaces closure and management",
          "Bioclear matrices",
          "Black triangle closure",
          "Single tooth with indirect composites",
          "Anterior Smile design cases",
          "FMR cases with indirect Composites",
          "Composite Injection moulding techniques",
          "How to create 3D anatomy",
          "DME – deep marginal elevation",
          "Full arch rubberdam placement",
          "Rubberdam made easy",
          "Tips and tricks on placement",
        ],
        cases: "More than 15 FMR cases to be discussed in full protocol with follow ups. How to make indirect composites in house.",
        videoDemos: [
          "How to record CR in patient",
          "How to record Facebow",
          "How to transfer Facebow record to articulator",
          "How to make indirect composites for FMR",
          "How to finish polish and create 3D anatomy",
          "How to make a deprogrammer chairside",
          "On Live patient recorded",
        ],
        handsOn: [
          "A wear model is given to you.",
          "You have to restore the teeth",
          "Set occlusion with the opposing model.",
          "Full arch rubber dam placement",
          "Full mouth indirect composite build ups",
          "How to set the occlusion",
          "Finish Polish",
          "Cementation Protocol",
        ],
        giveaways: [
          "Giveaways worth ₹6600/- given with the FMR course",
          "Free zirconia elite monolithic crown posterior from Advance Dental Export (Surat) Warranty five year warranty on a scan file. Validity for the coupon (six months from the last day of the course)",
          "2 discount coupons of ₹1500/- each from Esthetrix product on all their products. Coupon Validity (one month from the last day of the course). Minimum buy of ₹10000/- and above",
          "2 discount coupons of ₹1000/- each from BioClear products on their products (Valid only on kits, not on refill pack). Coupon Validity (one month from the last day of the course) Minimum buy of ₹10000/- and above.",
        ],
        participantRequirements: [
          "2 feviquicks",
          "Airotor handpiece",
          "Contra angle handpiece and attachment to the micromotor and the machine on which your handpiece will run.",
          "Light cure device",
          "2 BP handles (compulsory) 1 for 12 no blade and other for 15 no blade & 12 and 15 no blades (2 each)",
          "Composite instruments which they regularly use in the clinic.",
          "Scissors (compulsory)",
          "Artery forceps",
          "Floss - one roll",
          "Articulating Paper Holder",
          "Rubberdam kit",
          "We will provide you the rubberdam sheets",
          "Any case pics/ models that they wish to discuss",
          "Facebow and Articulator- for demo purpose. If you don't have one, can get from a friend or dental lab (not compulsory)",
          "15. free up phone space to record videos",
        ],
        fees: "Rs 35000 for the FMR INDIRECT COMPOSITE COURSE. Rs 5000 extra- refundable deposit. Once you courier the hands on material and model back to us…we will refund this money back to you. WHY this fees is very nominal? ONE FMR earning ranges from 40k onwards… So you will recover this cost in your first case… Next 100s of cases that you do will all your effort, credit and profit. This course in an investment course",
        postSupport: "Post the course you will be added to the group, where assistance will be provided. All participants are in the group and post cases to motivate and learn from each other.",
        image: fmrCourseImg,
        brochure: "https://drive.google.com/file/d/1OIz4eRNauiwVam_H9mw-QWw-X1Ow9-Q_/view?usp=sharing",
      },
    ],
  },
  {
    heading: "LIVE HANDS-ON COURSE – FMR WITH CROWNS, DIRECT & INDIRECT COMPOSITES",
    subheading:
      "An immersive in-person hands-on course to master Full Mouth Rehabilitation with crowns, direct, and indirect composites. Includes live patient treatment, theory, and practical sessions. Theory classes online (2 hours daily for 8-10 days), followed by 2 visits: Visit 1 - 3 days, Visit 2 – 1 day.",
    courses: [
      {
        title: "Live FMR Crown Course – Direct & Indirect Techniques",
        description:
          "Join us for an intensive course focusing on FMR with crowns, direct and indirect composites. Participants get to treat one whole patient from diagnosis to final cementation. Learn practical tips, tricks, and full protocols from expert clinicians. Includes live demos, hands-on practice, case discussions, and examples from previous participants like Dr Amy Duggal, Dr Sakina Ginwala, Dr Rajesh Sam, Dr Mansoor, Dr Girish, Dr Shel, Dr Anand Mohatta, Dr Aparna Mysore, Dr Jitendra, and more. Why register? Any FMR case gives you a minimum of 40K and above earning. Learning FMR is today's necessity due to increasing tooth wear. Bonded dentistry reduces failures, increases confidence, and allows higher charging.",
        duration: "10 Days Theory Online + 4 Days Hands-On (2 Visits)",
        topics: [
          "Bonding principles",
          "Shade selection",
          "Finishing & Polishing",
          "Smile Design Principles",
          "How to order a full mouth wax up",
          "Things to check in a mock up",
          "Easiest clinical way to record Centric relation",
          "Which articulator to use and why",
          "What is Facebow",
          "How to record Facebow in 3 minutes",
          "How to mount casts in CR",
          "How to transfer the Facebow to articulator super simplified",
          "Deprogrammer – when to use",
          "How to make a chair side deprogrammer",
          "Over hyped Occlusion- super simplified in daily clinical practice",
          "Tooth wear- Diagnosis & Management",
          "Attrition & Erosion",
          "Abrasion & Abfraction",
          "Localised Wear Management",
          "Generalised Wear Management",
          "Confirmative FMR approach- when to do and how to do",
          "Reorganised FMR approach- when to do and how to do",
          "How to plan for FMR",
          "Which case to be done with crowns and which with composite",
          "How to convince patient for FMR",
          "Clinical steps for FMR- whole sequence",
          "How to manage FMR failures",
          "What instructions to be given to the FMR patient",
          "How to manage FMR recalls",
          "How to charge the FMR patient",
          "How to make chair side temporaries for FMR",
        ],
        cases: "More than 30 FMR cases to be discussed in full protocol with follow ups, including: Full mouth rehab with PFM, Full mouth rehab with zirconia, Full mouth rehab with direct composites, Full mouth rehab with indirect composites.",
        videoDemos: [
          "How to record CR in patient",
          "How to record Facebow",
          "How to transfer Facebow record to articulator",
          "How to layer in composites",
          "How to finish polish",
          "How to make a deprogrammer",
          "On Live patient recorded - Patient preps- impression- CR-Facebow-cementation",
        ],
        handsOn: [
          "Participants get to do one whole patient of Full mouth wear.",
          "Starting from Diagnosis -Planning-Dental Photography- CR-Facebow- Deprogrammer-Mockups-Indices – core build ups- temporize -full mouth chairside- impressions- scans- final crown cementation -Finish Polish- Occlusal adjustment etc",
          "You have to treat the patient like you would do it in your clinic.",
          "We want to build that confidence in you that you can do ANY FMR on YOUR OWN!!.",
        ],
        giveaways: [
          "Giveaways worth ₹6600/- given with the FMR course",
          "Free zirconia crown from Advance Dental Export (Surat) Warranty five years. Validity for the coupon (six months from the last day of the course)",
          "2 discount coupons of ₹1500/- each from Esthetrix product on all their products. Coupon Validity (one month from the last day of the course). Minimum buy of ₹10000/- and above",
          "2 discount coupons of ₹1000/- each from Bioclear products on their products (Valid only on kits, not on refill pack). Coupon Validity (one month from the last day of the course) Minimum buy of ₹10000/- and above.",
        ],
        participantRequirements: [
          "Airotor handpiece",
          "Contra angle handpiece",
          "Straight handpiece.",
        ],
        fees: "Rs160000 for a single candidate. 10 Days Course: 10 days theory online, 2 Visit course (Visit 1 - 3 days, Visit 2 – 1 day).",
        postSupport: "Our Aim at the end of the course: You should be able to do any FMR whether it is by crowns or composite. You should be able to diagnose FMR cases. Simplify FMR workflow. Don’t be scared of the hard work and patience involved in the case. Dental Photography and documentation. And much more….. Talk to our previous participants to know more…",
        image: fmrCourseImg,
        brochure: "https://drive.google.com/file/d/1NBCYsU_iW_qsXCMwUF7wUEpZR57OZ9cg/view?usp=sharing",
      },
    ],
  },
  {
    heading: "PHOTOSHOP SMILE DESIGN COURSE",
    subheading: "Instead of Netflix, let's practice. Learn to use Photoshop for smile design to convince patients for treatments without expensive software. One time learning, no updates required. Teach your associates/assistants.",
    courses: [
      {
        title: "Photoshop Smile Design Course",
        description: "This course teaches dental professionals to use Photoshop to create digitally enhanced smiles for patient conviction. Show changes in five minutes, including diastema closures, fracture repairs, bleaching, and more. Affordable alternative to expensive smile design software.",
        duration: "One week course",
        topics: [
          "Diastema Closures",
          "Fracture Repairs",
          "Bleaching",
          "Multiple Space closures",
          "Gummy Smile correction",
          "Smile Design",
          "Shade Matching",
          "Lab Communication",
          "Implant Placement",
          "Watermark your work",
          "and much more"
        ],
        cases: "",
        videoDemos: [],
        handsOn: [],
        giveaways: [],
        participantRequirements: [
          "Photoshop software - If you don't have it, please install it from your computer friend.",
          "External Mouse is better to work with than a laptop mouse.",
          "Active Internet/ Mobile Hotspot",
          "We will send you cases and templates; once you register!"
        ],
        fees: "For Course Fees - Contact us on WhatsApp +917558585622, +917887685622",
        postSupport: "DM us for more details +917558585622, +917887685622",
        image: photoshopCourseImg,
        brochure: "https://drive.google.com/file/d/1XAu9Ww8HoNKKX2v7-I4RkrWJMCpZJU1k/view?usp=sharing",
      },
    ],
  },
];

interface CourseCardProps extends CourseItem {
  isWide?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  topics,
  cases,
  videoDemos,
  handsOn,
  giveaways,
  participantRequirements,
  fees,
  postSupport,
  image,
  brochure,
  isWide,
}) => {
  const [showFull, setShowFull] = useState(false);

  const toggleFull = () => {
    setShowFull(!showFull);
  };

  return (
    <div
  className={`bg-[#131313] text-white p-4 sm:p-6 md:p-8 border-2 border-[#CD9E42] rounded-lg 
  w-full sm:w-[600px] md:w-[600px] lg:w-[1000px] xl:w-[1200px] h-auto`}
>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
        <div className="md:w-1/2 flex flex-col">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-cover rounded mb-4"
            onError={(e) => (e.currentTarget.src = "/assets/fallback-image.jpg")}
          />
          {showFull && (
            <div className="flex-grow overflow-y-auto max-h-[300px] p-2 scrollbar-hidden">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">Topics Covered</h3>
              <ul className="list-disc pl-5 text-sm sm:text-base columns-1 sm:columns-1 gap-2">
                {topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              {videoDemos.length > 0 && (
                <>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Video Demos</h3>
                  <ul className="list-disc pl-5 text-sm sm:text-base">
                    {videoDemos.map((demo, i) => (
                      <li key={i}>{demo}</li>
                    ))}
                  </ul>
                </>
              )}
              {handsOn.length > 0 && (
                <>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Hands-On</h3>
                  <ul className="list-disc pl-5 text-sm sm:text-base">
                    {handsOn.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              <style>
                {`.scrollbar-hidden::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hidden {
                  -ms-overflow-style: none; /* IE and Edge */
                  scrollbar-width: none; /* Firefox */
                }`}
              </style>
            </div>
          )}
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#CD9E42]">{title}</h2>
            <p className="text-sm sm:text-base mt-2">{description}</p>
            <p className="text-sm sm:text-base text-gray-600 mt-2">Duration: {duration}</p>
            {showFull && (
              <div className="mt-4 overflow-y-auto max-h-[300px] p-2 scrollbar-hidden">
                {cases && (
                  <>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">Cases Discussed</h3>
                    <p className="text-sm sm:text-base">{cases}</p>
                  </>
                )}
                {giveaways.length > 0 && (
                  <>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Giveaways</h3>
                    <ul className="list-disc pl-5 text-sm sm:text-base">
                      {giveaways.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {participantRequirements.length > 0 && (
                  <>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Participant Requirements</h3>
                    <ul className="list-disc pl-5 text-sm sm:text-base">
                      {participantRequirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Fees</h3>
                <p className="text-sm sm:text-base">{fees}</p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Post Course Support</h3>
                <p className="text-sm sm:text-base">{postSupport}</p>
                <style>
                  {`.scrollbar-hidden::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hidden {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                  }`}
                </style>
              </div>
            )}
          </div>
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <button onClick={toggleFull} className="bg-[#CD9E42] text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base flex-1">
                {showFull ? "SHOW LESS" : "LEARN MORE"}
              </button>
              <a
                href={brochure}
                download
                className="bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base flex-1 text-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};35

const Course: React.FC = () => {
  return (
    <div className="bg-[rgb(2,2,2)] text-white min-h-screen px-4 sm:px-6">
      <Navigation />

      {courseSections.map((section, idx) => (
        <div key={idx} className="container mx-auto py-20 sm:py-10 md:py-40">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CD9E42]">{section.heading}</h1>
            {section.subheading && (
              <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-4 max-w-3xl mx-auto">{section.subheading}</p>
            )}
          </div>
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8 mt-6 sm:mt-8">
            {section.courses.map((course, i) => (
              <CourseCard
                key={i}
                {...course}
                isWide={true}
              />
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Course;
