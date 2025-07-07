import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Joinn"; // ✅ নিশ্চিত হও যে ফাইলের নাম ঠিক আছে
import MemberListt from "./pages/MemberListt"; // ✅ নতুন যুক্ত করলাম

const Vision = () => <div className="text-center mt-10 text-xl">🔭 Vision Page</div>;
const Mission = () => <div className="text-center mt-10 text-xl">🎯 Mission Page</div>;
const Works = () => <div className="text-center mt-10 text-xl">🛠️ Works Page</div>;
const History = () => <div className="text-center mt-10 text-xl">📖 History Page</div>;

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/works" element={<Works />} />
          <Route path="/history" element={<History />} />
          <Route path="/join" element={<Join />} />
          <Route path="/members" element={<MemberListt />} /> {/* ✅ নতুন route */}
        </Routes>
      </div>
    </Router>
  );
}
