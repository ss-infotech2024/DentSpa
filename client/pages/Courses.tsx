import React from 'react';
import { Navigation } from '../components/Navigation';
import Footer from '../components/Footer';
const Course = () => {
  return (
    <div className="bg-background text-white min-h-screen">
      <Navigation />
      {/* Header Section */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-yellow-500">COURSES</h1>
        <h1 className="text-4xl font-bold text-yellow-500 mt-2">YOUR NEW DENTAL LIFE STARTS HERE</h1>
        <p className="text-gray-400 mt-4">Begin your career-transforming journey with our signature Totally Composite course. On completion, you can choose how to further your learning</p>
      </div>

      {/* Course Section 1 */}
      <div className="container mx-auto flex justify-center flex-wrap gap-6 py-10">
        <div className="bg-white text-black p-6 w-86 border-2 border-yellow-500 rounded-lg">
          <img src="https://cdn.prod.website-files.com/6513fabcb26a932e23572e8a/65c3f8572443cda699e7bad4_TC.jpg" alt="Starting Point" className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold text-yellow-500">Starting Point</h2>
          <p className="text-sm mt-2">This is the starting point for our Composite programmes. Our intensive two day composite course has now been delivered over 200 times across 14 countries and trained over 5000 clinicians worldwide. It is designed to give the knowledge, confidence and skills to create beautiful and functional direct anterior & posterior composites. Designed for dentists and therapists of all levels and free from commercial bias using several materials from multiple companies. Teaching real world techniques refined from years of general practice but retaining a solid evidence base. The course includes theory and significant practicals covering both the clinical and non clinical skills to succeed.</p>
          <p className="text-sm text-gray-600 mt-2">Duration: 2 Days</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">LEARN MORE</button>
        </div>
      </div>

      {/* Header Section 2 */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-yellow-500">TAKE THE NEXT STEP IN YOUR CAREER WITH OUR RESTORATIVE & AESTHETIC DENTISTRY DIPLOMA</h1>
        <p className="text-gray-400 mt-4">Elevate your professional dental journey with our advanced level 7 diploma in restorative and aesthetic, a renowned program that has guided countless clinicians to achieve success.</p>
      </div>

      {/* Course Section 2 */}
      <div className="container mx-auto flex justify-center flex-wrap gap-6 py-10">
        <div className="bg-white text-black p-6 w-80 border-2 border-yellow-500 rounded-lg">
          <img src="https://cdn.prod.website-files.com/6513fabcb26a932e23572e8a/65c3f8572443cda699e7bad4_TC.jpg" alt="Totally Aesthetics" className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold text-yellow-500">TOTALLY AESTHETICS</h2>
          <p className="text-sm mt-2">A programme designed to give the knowledge, confidence and skills to perform high level, minimally invasive, restorative and aesthetic dentistry. Suited to General Practitioners at any stage of their careers and all types of practice settings. Giving the clinical and non clinical recipes to flourish.</p>
          <p className="text-sm text-gray-600 mt-2">Duration: 17 Days (over 9 sessions)</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">LEARN MORE</button>
        </div>
        <div className="bg-white text-black p-6 w-80 border-2 border-yellow-500 rounded-lg">
          <img src="https://cdn.prod.website-files.com/6513fabcb26a932e23572e8a/65c3f8572443cda699e7bad4_TC.jpg" alt="Totally Therapist" className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold text-yellow-500">TOTALLY THERAPIST</h2>
          <p className="text-sm mt-2">Our 10-day programme is spread over 6 months for dental therapists associated with the Diploma in Aesthetic Dental Therapy (includes both maestro courses as part of the course).</p>
          <p className="text-sm text-gray-600 mt-2">Duration: 10 Days</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">LEARN MORE</button>
        </div>
      </div>

      {/* Header Section 3 */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-yellow-500">OTHER DENTAL COURSES</h1>
        <p className="text-gray-400 mt-4">In addition to our programmes focused on minimally invasive restorative and aesthetic dentistry we also offer various other short and diploma courses.</p>
      </div>

      {/* Course Section 3 */}
      <div className="container mx-auto flex justify-center flex-wrap gap-6 py-10">
        <div className="bg-white text-black p-6 w-80 border-2 border-yellow-500 rounded-lg">
          <img src="https://cdn.prod.website-files.com/6513fabcb26a932e23572e8a/65c3f8572443cda699e7bad4_TC.jpg" alt="Totally Surgery" className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold text-yellow-500">TOTALLY SURGERY</h2>
          <p className="text-sm mt-2">A two-day intensive hands-on oral surgery masterclass using models supplemented with online blended learning.</p>
          <p className="text-sm text-gray-600 mt-2">Duration: 2 Days</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">LEARN MORE</button>
        </div>
        <div className="bg-white text-black p-6 w-80 border-2 border-yellow-500 rounded-lg">
          <img src="https://cdn.prod.website-files.com/6513fabcb26a932e23572e8a/65c3f8572443cda699e7bad4_TC.jpg" alt="SimplyEndo" className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold text-yellow-500">SIMPLYENDO®</h2>
          <p className="text-sm mt-2">In collaboration with the UK's leading course provider, this is the perfect Endodontic programme for you.</p>
          <p className="text-sm text-gray-600 mt-2">Duration: 10 Days</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">LEARN MORE</button>
        </div>
      </div>

      {/* Header Section 4 */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-yellow-500">FOLLOW ON COMPOSITE COURSES</h1>
        <p className="text-gray-400 mt-4">Our Maestro courses are extended to build on the teaching of Totally Composite course with specific focus on composite situations. These programmes are included as part of the Totally Composite and Totally therapist diploma however they are available separately for delegates not wishing to commit to a diploma.</p>
      </div>

      {/* Course Section 4 */}
      <div className="container mx-auto flex justify-center flex-wrap gap-6 py-10">
        <div className="bg-white text-black p-6 w-80 border-2 border-yellow-500 rounded-lg">
          <img src="https://cdn.prod.website-files.com/6513fabcb26a932e23572e8a/65c3f8572443cda699e7bad4_TC.jpg" alt="Anterior Maestro" className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold text-yellow-500">ANTERIOR MAESTRO</h2>
          <p className="text-sm mt-2">A follow-up advanced course focusing on advanced smile makeovers to complex composite work from course must be completed first.</p>
          <p className="text-sm text-gray-600 mt-2">Duration: 2 Days</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">LEARN MORE</button>
        </div>
        <div className="bg-white text-black p-6 w-80 border-2 border-yellow-500 rounded-lg">
          <img src="https://cdn.prod.website-files.com/6513fabcb26a932e23572e8a/65c3f8572443cda699e7bad4_TC.jpg" alt="Posterior Maestro" className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold text-yellow-500">POSTERIOR MAESTRO</h2>
          <p className="text-sm mt-2">One day follow up programme to the Totally composite course focusing on advanced/complex posterior composite work (Totally composite must be completed first).</p>
          <p className="text-sm text-gray-600 mt-2">Duration: 1 Day</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">LEARN MORE</button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Course;