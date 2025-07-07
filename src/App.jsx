import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // ← এখন আমরা Home.jsx ফাইল ব্যবহার করব


// Dummy components for other routes
import About from "./pages/About";
import Join from "./pages/Joinn"; // ✅ ফর্ম যুক্ত রিয়েল Join.jsx ফাইল ইম্পোর্ট
const Vision = () => <div className="text-center mt-10 text-xl">🔭 Vision Page</div>;
const Mission = () => <div className="text-center mt-10 text-xl">🎯 Mission Page</div>;
const Works = () => <div className="text-center mt-10 text-xl">🛠️ Works Page</div>;
const History = () => <div className="text-center mt-10 text-xl">📖 History Page</div>;


export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/works" element={<Works />} />
          <Route path="/history" element={<History />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
}
