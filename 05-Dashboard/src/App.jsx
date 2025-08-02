import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Overview from "./Pages/Overview.jsx";
import Projects from "./Pages/Projects.jsx";
import Profile from "./Pages/Profile.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
