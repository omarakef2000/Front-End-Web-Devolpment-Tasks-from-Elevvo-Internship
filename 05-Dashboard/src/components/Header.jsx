import React, { useState, useRef, useEffect } from "react";
import NotificationDropdown from "./NotificationDropdown.jsx";
import { Bell } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-lg font-semibold text-gray-700">Admin Dashboard</h1>
      <div className="relative" ref={ref}>
        <button
          className="p-2 rounded-full hover:bg-indigo-100"
          onClick={() => setOpen(!open)}
          aria-label="Notifications"
        >
          <Bell size={24} />
        </button>
        {open && <NotificationDropdown />}
      </div>
    </header>
  );
}
