import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Folder, Settings } from "lucide-react";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Overview", icon: <Home size={20} /> },
    { to: "/projects", label: "Projects", icon: <Folder size={20} /> },
    { to: "/profile", label: "Profile", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-6">
      <h2 className="text-xl font-bold mb-8">My Dashboard</h2>
      <nav className="flex flex-col gap-4">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
