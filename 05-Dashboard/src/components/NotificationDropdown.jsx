import React from "react";

const mockNotifications = [
  "New user signed up",
  "Project XYZ deadline approaching",
  "Server maintenance scheduled",
];

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-10">
      <div className="p-3 font-semibold border-b">Notifications</div>
      <ul>
        {mockNotifications.map((note, idx) => (
          <li
            key={idx}
            className="px-3 py-2 hover:bg-indigo-50 cursor-pointer text-gray-700 text-sm"
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}
