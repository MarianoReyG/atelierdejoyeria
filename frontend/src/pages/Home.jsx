import React from "react";
import Icon from "../components/svgs/Icon";
import Dibujo from "../assets/dibujo.jpg";
import Hero from "../components/Hero";
import Workshops from "../components/Workshops";
import About from "../components/About";
import StudentWork from "../components/StudentWork";
import Faqs from "../components/Faqs";
import Contact from "../components/Contact";
import SchoolDirector from "../components/SchoolDirector";

function Home() {
  return (
    <main>
      <Hero />
      <Workshops />
      <About />
      <StudentWork />
      <Faqs />
      <SchoolDirector />
      <Contact />
    </main>
  );
}

export default Home;
