// src/App.js
import React from "react";
//import Homepage from "./components/HomePage";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import AboutKriworld from "./components/AboutkriWorld";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Why from "./components/Why";
import Industries from "./components/Industries";
import ProcessSection from "./components/ProcessSection";
import ClientReviews from "./components/ClientReviews";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MobileActionButtons from "./components/MobileActionButtons";




function App() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Header/>
      <HeroSection/>
      <WhoWeAre/>
      <AboutKriworld/>
      <Services/>
      <Plans/>
      <Why/>
      <Industries/>
      <ProcessSection/>
      <ClientReviews/>
      <ContactSection/>
      <Footer/>
      <MobileActionButtons/>
    </div>

  );
}

export default App;
