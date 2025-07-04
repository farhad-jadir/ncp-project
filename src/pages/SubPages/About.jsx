import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-white px-4 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 items-start">

        {/* Left side (mobile নিচে, desktop বামে): Logos & Video */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          {/* Logos */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <img
              src="/images/ncp.png"
              alt="NCP Logo"
              className="w-32 h-32 rounded-xl shadow-lg object-contain"
            />
            <img
              src="/images/ncps.svg"
              alt="National Citizen's Committee Logo"
              className="w-32 h-32 rounded-xl shadow-lg object-contain"
            />
          </div>

          {/* YouTube Video */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/XcRWTPBbBWo"
              title="NCP Announcement Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* Right side: Textual Description */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 drop-shadow-sm">
            About National Citizens Party (NCP)
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify">
            The Jatiya Nagorik Party (National Citizen's Party or NCP) is a political party in Bangladesh.
            It was established on{" "}
            <span className="font-bold text-blue-700">February 28, 2025</span>,
            through the initiative of student rights activists and the Jatiya Nagorik Committee
            (National Citizen's Committee). It is notable for being
            <span className="font-bold text-blue-700"> the first student-led political party </span>
            in Bangladesh's history.
          </p>

          <h3 className="text-xl font-bold text-blue-700 mt-6">Context of Establishment:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-gray-700">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <span>
                The party was formed under the leadership of young leaders from the July uprising.
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <span>
                It was created through the efforts of student rights advocates and the National Citizen's Committee.
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <span>
                It was established to fight for the rights of the student community.
              </span>
            </li>
          </ul>

          {/* Join Button */}
          <Link
            to="/join"
            className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium shadow-md transition"
          >
            Join NCP
          </Link>
        </div>
      </div>
    </section>
  );
}
