// src/pages/Home.jsx
import { FaUserPlus, FaDonate, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Formation from "./SubPages/Formation";
import About from "./SubPages/About";
import Footer from "./SubPages/Footer"; // ঠিক path
 // ← এটাকে ইম্পোর্ট করতে হবে

export default function Home() {
  return (
    <div className="bg-blue-100 py-12 ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 leading-tight">
            Integrity, Unity, Progress: <br />
            National Citizen Party (NCP)'s Promise!
          </h1>
          <p className="mt-4 text-gray-700">
            We believe in a Bangladesh founded on strong principles. The National Citizen Party is
            dedicated to eradicating corruption, fostering national unity, and ensuring progress
            for every citizen. Discover our vision for a better future.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold shadow-md">
              <FaUserPlus /> Join Party
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold shadow-md">
              <FaDonate /> Donate
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/ncp2.png"
            alt="NCP Hero"
            className="rounded-lg w-full h-auto object-cover"
          />
          <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2">
            <FaChevronLeft />
          </button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Formation Section */}
      <Formation />
      <About />
      <Footer />
    </div>
  );
}
