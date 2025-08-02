import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "Omar Akef",
    email: "omarakef2000@gmail.com",
  });

  const updateProfile = (updates) =>
    setProfile((prev) => ({ ...prev, ...updates }));

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
