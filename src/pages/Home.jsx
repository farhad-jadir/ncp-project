// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { FaUserPlus, FaDonate, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Formation from "./SubPages/Formation";
import Aboutt from "./SubPages/Aboutt";
import Footer from "./SubPages/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentColor, setCurrentColor] = useState(0);
  const colors = ['text-blue-900', 'text-red-800', 'text-green-800', 'text-purple-800'];
  const phrases = ["Integrity", "Unity", "Progress"];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    // Color change animation
    const colorInterval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 2000);

    // Text animation (optional - cycling through the values)
    const textInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => {
      clearInterval(colorInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="bg-blue-100 py-12">
      {/* Hero Section */}
      <div className=" mx-auto md:px-32 px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className={`${colors[currentColor]} animate-pulse transition-colors duration-1000 md:text-5xl `}>
              {phrases[currentPhrase]}, {phrases[(currentPhrase + 1) % phrases.length]}, {phrases[(currentPhrase + 2) % phrases.length]}: <br />
            </span>
            <span className="text-orange-500 animate-bounce text-goldman mt-6 transition-transform duration-1000 inline-block">
              National Citizen Party (NCP)'s Promise!
            </span>
          </h1>
          <p className="mt-4 text-gray-700">
            We believe in a Bangladesh founded on strong principles. The National Citizen Party is
            dedicated to eradicating corruption, fostering national unity, and ensuring progress
            for every citizen. Discover our vision for a better future.
          </p>

          {/* ✅ Link used correctly */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/join"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold shadow-md"
            >
              <FaUserPlus /> Join Party
            </Link>

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

      {/* Other Sections */}
      <Formation />
      <Aboutt />
      <Footer />
    </div>
  );
}