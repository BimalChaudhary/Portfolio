import React from "react";
import Navbar from "../navbar/page";
import type { Metadata } from "next";
import AboutSection from "./AboutSection";

export const metadata: Metadata = {
  title: "Portfolio - About",
  description: "About my skills and technologies.",
};

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <AboutSection />
    </>
  );
};

export default About;
