import { FaFacebookF, FaYoutube, FaWhatsapp, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center lg:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-yellow-300 font-bold mb-2">OUR PARTY</h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-yellow-300 font-bold mb-2">OUR GOALS</h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li><a href="/vision" className="hover:underline">Vision</a></li>
            <li><a href="/mission" className="hover:underline">Mission</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-yellow-300 font-bold mb-2">GET INVOLVED</h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li><a href="/join" className="hover:underline">Join Party</a></li>
            <li><a href="/donate" className="hover:underline">Donate</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-yellow-300 font-bold mb-2">OUR NETWORK</h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li><a href="/store" className="hover:underline">Store</a></li>
            <li><a href="/partners" className="hover:underline">Partners</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-yellow-300 font-bold mb-2">OUR LEGAL</h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li><a href="/terms" className="hover:underline">Terms</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h3 className="text-yellow-300 font-bold mb-2">UPDATE JOBS</h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/blogs" className="hover:underline">Blogs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright + social icons */}
      <div className="mt-10 text-center space-y-4">
        <p className="text-sm text-white">
          © 2025 জাতীয় নাগরিক পার্টি (NCP). All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-5 text-xl text-white">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
}
