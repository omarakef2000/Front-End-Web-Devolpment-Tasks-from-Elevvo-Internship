import { ProfileProvider } from "./context/ProfileContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <ProfileProvider>
        <App />
     </ProfileProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);
