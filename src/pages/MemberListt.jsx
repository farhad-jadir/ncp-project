import { useEffect, useState } from "react";
import axios from "axios";

export default function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("https://ncp-project-backend.onrender.com")
      .then(res => setMembers(res.data))
      .catch(err => {
        console.error("❌ Fetch error:", err);
        alert("Failed to load members");
      });
  }, []);

  return (
    <div className=" p-4 max-w-3xl mx-auto">
      <h2 className="mt-20 text-xl font-bold mb-4">📋 Member List</h2>
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <ul className="space-y-2">
          {members.map((member, index) => (
            <li key={index} className="border p-3 rounded">
              <strong>{member.name}</strong> ({member.membership}) <br />
              📧 {member.email} | 📞 {member.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
