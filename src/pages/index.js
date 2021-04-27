import React, { useState } from "react";
import Contact from "../components/contact";
import HeroSection from "../components/HeroSection";
import Hobbies from "../components/hobbies";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Portfolio from "../components/portfolio";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Portfolio />

      <Hobbies />
      <Contact />
    </>
  );
};

export default Home;
