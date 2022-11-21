import React from "react";
import About from "./components/About-us/about";
import Blog from "./components/blog/blog";
import Club from "./components/club/club";
import Contact from "./components/contact-us/contact";
import Herosection from "./components/Hero/hero";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/projects";
import Service from "./components/service/service";
const Landing = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Service />
      <Club />
      <About />
      <Project />
      <Blog />
      <Contact />
    </>
  );
};

export default Landing;
