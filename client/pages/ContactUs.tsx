import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";

export default function ReferPatient() {
  const [formData, setFormData] = useState({
    fullName: "",
    telephone: "",
    email: "",
    referralDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminNumber = "919876543210"; // ← change to your WhatsApp number (with country code, no +)
    const message = `New Patient Referral:
Full Name: ${formData.fullName}
Telephone: ${formData.telephone}
Email: ${formData.email}
Referral Details: ${formData.referralDetails}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navigation />

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 flex-grow mt-[100px]">
        {/* Header */}
        <div className="text-center">
          <h1 className="tracking-[0.5em] text-xl font-light uppercase">
            REFER A PATIENT
          </h1>
        </div>

        {/* Breadcrumb */}
        <div className="mt-8 border-t border-gray-500 w-full flex justify-center">
          <div className="-mt-4 bg-black px-6 py-2 text-[0.8rem] tracking-widest text-[#c1a768] border border-gray-500 uppercase">
            HOME / REFER A PATIENT
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-12 text-lg font-light">Please give us some details</p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-5xl flex flex-wrap justify-center gap-6"
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="FULL NAME*"
            required
            className="bg-transparent border border-gray-400 px-5 py-4 w-full sm:w-[300px] text-sm tracking-widest uppercase placeholder-gray-300 focus:outline-none focus:border-[#c1a768] transition"
          />
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="TELEPHONE*"
            required
            className="bg-transparent border border-gray-400 px-5 py-4 w-full sm:w-[300px] text-sm tracking-widest uppercase placeholder-gray-300 focus:outline-none focus:border-[#c1a768] transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL*"
            required
            className="bg-transparent border border-gray-400 px-5 py-4 w-full sm:w-[300px] text-sm tracking-widest uppercase placeholder-gray-300 focus:outline-none focus:border-[#c1a768] transition"
          />
          <textarea
            name="referralDetails"
            value={formData.referralDetails}
            onChange={handleChange}
            placeholder="REFERRAL DETAILS"
            className="bg-transparent border border-gray-400 px-5 py-4 w-full min-h-[120px] text-sm tracking-widest uppercase placeholder-gray-300 focus:outline-none focus:border-[#c1a768] transition"
          />
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-[#c1a768] text-black px-10 py-4 tracking-widest text-sm uppercase hover:bg-[#a98e56] transition"
            >
              Send to WhatsApp
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
