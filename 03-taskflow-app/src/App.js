import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import task_1 from "./Assets/istockphoto-1279502184-612x612.jpg"; 
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App() {
useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,    
  });
}, []);

  return (
    <div className="App">
      <section data-aos="fade-down">
      <Hero  imageSrc={task_1}/>
     </section>
       <section data-aos="fade-up">
      <Features />
      </section>
     <section data-aos="fade-up">
      <Reviews />
      </section>
      <Pricing />
      <Footer />
    
    </div>
  );
}

export default App;
