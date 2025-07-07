import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFlag,
  FaIdCard,
  FaCheck,
  FaTimes,
  FaImage,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    district: "",
    idNumber: "",
    membership: "",
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    for (let key in formData) {
      submitData.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:5000/api/members", {
        method: "POST",
        body: submitData,
      });

      const result = await res.json();
      if (res.ok) {
        alert("✅ Member submitted!");
        navigate("/members");
      } else {
        alert("❌ Failed: " + result.error);
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-8 space-y-6">
        {/* Logo + Title */}
        <div className="text-center">
          <img
            src="/images/ncp-logo.png"
            alt="NCP Logo"
            className="w-20 h-20 mx-auto rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold text-blue-700 mt-4">Join Our Party</h2>
          <p className="text-sm text-gray-500">Be part of the change you want to see</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-500"
              required
            />
          </div>

          {/* Zila (District) */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              name="district"
              placeholder="Enter Your Zila (District)"
              value={formData.district}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required
            />
          </div>

          {/* ID Number */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaIdCard className="text-gray-400 mr-2" />
            <input
              type="text"
              name="idNumber"
              placeholder="Enter Your ID Number"
              value={formData.idNumber}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required
            />
          </div>

          {/* Membership Type */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaFlag className="text-gray-400 mr-2" />
            <select
              name="membership"
              value={formData.membership}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-500"
              required
            >
              <option value="">Select Membership Type</option>
              <option value="general">General Member</option>
              <option value="volunteer">Volunteer</option>
              <option value="leader">Leader</option>
            </select>
          </div>

          {/* Passport Photo Upload */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaImage className="text-gray-400 mr-2" />
            <input
              type="file"
              accept="image/*"
              name="photo"
              onChange={handleFileChange}
              className="w-full outline-none bg-transparent text-gray-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded flex items-center justify-center gap-2 font-semibold"
            >
              <FaCheck /> Submit
            </button>
            <button
              type="reset"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded flex items-center justify-center gap-2 font-semibold"
              onClick={() =>
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  dob: "",
                  district: "",
                  idNumber: "",
                  membership: "",
                  photo: null,
                })
              }
            >
              <FaTimes /> Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
