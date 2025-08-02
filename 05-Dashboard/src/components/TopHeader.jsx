import React, { useState, useContext } from "react";
import { ProfileContext } from "../context/ProfileContext.jsx";

const mockNotifications = [
  { id: 1, text: "New project assigned: Website Redesign" },
  { id: 2, text: "Payment received: LE 1,200" },
  { id: 3, text: "Task deadline today: SEO Audit" },
];

export default function TopHeader() {
  const { profile } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center relative">
      <h2 className="text-xl font-semibold text-gray-700">Admin Dashboard</h2>

      <div className="flex gap-4 items-center">
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            🔔 Notifications
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-50">
              <div className="p-3 font-semibold border-b">Recent Activities</div>
              <ul>
                {mockNotifications.map((note) => (
                  <li
                    key={note.id}
                    className="p-3 hover:bg-gray-50 text-sm text-gray-700 border-b"
                  >
                    {note.text}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpen(false)}
                className="block w-full text-center text-blue-500 p-2 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          )}
        </div>

        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          👤 {profile.name}
        </div>
      </div>
    </div>
  );
}
