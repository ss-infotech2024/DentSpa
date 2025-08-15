import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";

export default function ReferPatient() {
  
  return (
     
    <div className="bg-black text-white min-h-screen flex flex-col ">
      <Navigation/>
      {/* Keep Navigation full-width & fixed or static */}
      <div className="w-full mt[200px]">
       
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 flex-grow">
        {/* Header */}
        <div className="pt-16 text-center mt-[100px]">
          <h1 className="tracking-[0.5em] text-xl font-light">REFER A PATIENT</h1>
        </div>

        {/* Breadcrumb */}
        <div className="mt-8 border-t border-gray-500 w-full flex justify-center">
          <div className="-mt-4 bg-black px-6 py-2 text-[0.8rem] tracking-widest text-[#c1a768] border border-gray-500">
            HOME / REFER A PATIENT
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-12 text-lg">Please give us some details</p>

        {/* Form */}
        <form className="mt-8 w-full max-w-5xl flex flex-wrap justify-center gap-6">
          <input
            type="text"
            placeholder="FULL NAME*"
            className="bg-transparent border border-gray-400 px-4 py-4 w-full sm:w-[300px] text-sm tracking-widest focus:outline-none"
          />
          <input
            type="tel"
            placeholder="TELEPHONE*"
            className="bg-transparent border border-gray-400 px-4 py-4 w-full sm:w-[300px] text-sm tracking-widest focus:outline-none"
          />
          <input
            type="email"
            placeholder="EMAIL*"
            className="bg-transparent border border-gray-400 px-4 py-4 w-full sm:w-[300px] text-sm tracking-widest focus:outline-none"
          />
          <textarea
            placeholder="REFERRAL DETAILS"
            className="bg-transparent border border-gray-400 px-4 py-4 w-full min-h-[100px] text-sm tracking-widest focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#c1a768] text-black px-8 py-4 tracking-widest text-sm hover:bg-[#a98e56] transition"
          >
            SUBMIT
          </button>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
